import { useState } from "react"
import client from "../axiosClient/Client";
import './login.css'
import loginBackgroundImage from '../assets/accofinder logo copy.jpg'

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
        <form onSubmit={handleLogin} className=' login-form'>
            {/*<div className='login-background-container'>*/}
            {/*    <img src={loginBackgroundImage} alt="accofinder" className="login-background-image"/>*/}
            {/*</div>*/}
            <div className='imput-container'>
                <input className="input " type="email" placeholder="Email"
                       onChange={(event) => setEmail(event.target.value)} required/><br/>
                <input className="input " type="password" placeholder="password"
                       onChange={(event) => setPassword(event.target.value)} required/><br/>

                <input className=" select select-student " type='radio' name="accountType" onChange={(event) => setAccountType(event.target.value)} value="Student" required/>
                <label className='student-label'>Student</label><br/>

                <input className=" select select-landlord " type='radio' name="accountType" onChange={(event) => setAccountType(event.target.value)} value="Landlord" required/>
                <label className='landlord-label'>Landlord</label><br/>

                <input className=" select select-agent " type='radio' name="accountType" onChange={(event) => setAccountType(event.target.value)} value="Agent" required/>
                <label className='agent-label'>Agent</label><br/>
            </div>

            <input className="input login-submit-btn " type="submit" value='Login'/>
        </form>
    )
}

