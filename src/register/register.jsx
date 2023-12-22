import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import { useState } from "react";
import "./register.css";
import Logo from "./accofinder.png"

export function Register(){
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phonenumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [accountType, setAccountType] = useState();
    let endpoint = '';
    
    async function handleRegister(event){
        event.preventDefault()
        
        const formData = new FormData();
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('email', email);
        formData.append('phonenumber', phonenumber);
        formData.append('password', password);

        if(accountType == 'Student'){
            endpoint = 'http://localhost:8000/api/students/register';
        }
        
        else if(accountType == 'Landlord' || accountType == 'Agent'){
            endpoint='http://localhost:8000/api/landlords/register';
        }

        axios.post(endpoint, formData)
        .then((response) => {
            if(response.status == 201){
                alert('Registered Successfully');
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

            return(
                <div className ="wholecard">
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
                                already have an account?
                                <Link>
                                click here
                                </Link>
                            </p>
                        </div>
                    </div>
                
                    <form onSubmit={handleRegister} className="right">
                        <h2>Register</h2>
                        <input type="text"  placeholder="firstname" onChange={(event) => setFirstName(event.target.value)} required/><br/>
                        <input type="text" placeholder="lastname" onChange={(event) => setLastName(event.target.value)} required/><br/>
                        <input type="email" placeholder="email" onChange={(event) => setEmail(event.target.value)} required/><br/>
                        <input type="number" placeholder="phonenumber" onChange={(event) => setPhoneNumber(event.target.value)} required/><br/>
                        <input type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} required/><br/>
                        <div className="radio">
                        <input type='radio' name="accountType" onChange={(event) => setAccountType(event.target.value)} value="Student" required/>
                            <label>Student</label><br/>
                        <input type='radio' name="accountType" onChange={(event) => setAccountType(event.target.value)} value="Landlord" required/>
                            <label>Landlord</label><br/>
                        <input type='radio' name="accountType" onChange={(event) => setAccountType(event.target.value)} value="Agent" required/>
                            <label>Agent</label><br/>
                        </div>

                        <input type="submit" className="button" value="Register"/>
                    </form>
                </div>
            </div>
            )
}

