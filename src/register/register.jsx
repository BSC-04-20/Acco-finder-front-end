export function Register(){
    
    return(
    <form>
        <input type="text"  placeholder="firstname" required/><br/>
        <input type="text" placeholder="lastname" required/><br/>
        <input type="email" placeholder="email" required/><br/>
        <input type="number" placeholder="phonenumber" required/><br/>
        <input type="password" placeholder="password" required/><br/>

        <input type='radio' name="accountType" value="Student"/>
            <label>Student</label><br/>
        <input type='radio' name="accountType" value="Landlord"/>
            <label>Landlord</label><br/>
        <input type='radio' name="accountType" value="Agent"/>
            <label>Agent</label><br/>

        <input type="submit" value="Register"/>{/** Register Button */}
    </form>
    )
}

