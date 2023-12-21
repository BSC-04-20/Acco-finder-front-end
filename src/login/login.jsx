import { useState } from "react"
import client from "../axiosClient/Client";

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
            endpoint = '/api/landlord/login';
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
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} required/><br/>
            <input type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} required/><br/>

            <input type='radio' name="accountType" onChange={(event) => setAccountType(event.target.value)} value="Student" required/>
                <label>Student</label><br/>
            <input type='radio' name="accountType" onChange={(event) => setAccountType(event.target.value)} value="Landlord" required/>
                <label>Landlord</label><br/>
            <input type='radio' name="accountType" onChange={(event) => setAccountType(event.target.value)} value="Agent" required/>
                <label>Agent</label><br/>

            <input type="submit" value='Login'/>
        </form>
    )
}

