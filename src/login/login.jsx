import { useState } from "react"
import client from "../axiosClient/Client";
import './login.css';
import Logo from "../register/accofinder.png";
import { Link } from "react-router-dom";

export function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [accountType, setAccountType] = useState();

    async function handleLogin(event){
        event.preventDefault();

        let endpoint = '';
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        const csrf = await client.get('/sanctum/csrf-cookie');
        
        if(accountType == 'Student'){
            endpoint = '/api/student/login';
        }
        
        else if(accountType == 'Landlord' || accountType == 'Agent'){
            endpoint='/api/landlord/login';
        }

        client.post(endpoint, formData)
        .then((response)=> {
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div className="wholecard">
            <div className="card">
                    <div className="leftcard">
                        <img src={Logo} alt="logo" />
                        <div className="text">
                            <h1 className="heading">
                                WELCOME TO ACCOFINDER.
                            </h1>
                        <div className="smalltext">
                        </div>
                            <p>
                                don't have an account?
                                <Link className="link">
                                click here
                                </Link>
                            </p>
                        </div>
                    </div>

                    
                    <form onSubmit={handleLogin} className="right">
                        <h2>Login</h2>
                        <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} required/><br/>
                        <input type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} required/><br/>
                        
                        <div className="radio">
                            <div className="select">
                            <input type='radio' name="accountType" onChange={(event) => setAccountType(event.target.value)} value="Student" required/>
                                <label>Student</label><br/>
                            </div>
                            <div className="select">
                            <input type='radio' name="accountType" onChange={(event) => setAccountType(event.target.value)} value="Landlord" required/>
                                <label>Landlord</label><br/>
                            </div>
                            <div className="select">
                            <input type='radio' name="accountType" onChange={(event) => setAccountType(event.target.value)} value="Agent" required/>
                                <label>Agent</label><br/>
                            </div>
                        </div>
                        <input className="button" type="submit" value='Login'/>
                    </form>
                </div>
        </div>
    )
}

