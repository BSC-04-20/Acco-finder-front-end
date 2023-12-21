import { useState } from "react"

export function PostHostel(){
    const[name, setName] = useState();
    const[rooms, setRooms] = useState();
    const[location, setLocation] = useState();
    const[gender, setGender] = useState();
    const[image, setImage] = useState();



    function handlePosting(event){
        event.preventDefault();

        const formData = new FormData();
        
        formData.append('name', setName);
        formData.append('rooms', setRooms);
        formData.append('location', setLocation);
        formData.append('gender', setGender);
        formData.append('image', setImage);


    }

    return(
        <form onSubmit={handlePosting}>
            <input type="file" onChange={(event)=>setImage(event.target.files[0])}/><br/>
            <input type="text"  onChange={(event)=>setName(event.target.target)} placeholder="name"/><br/>
            <input type="number" onChange={(event)=>setRooms(event.target.target)} placeholder="Number of vacant rooms"/><br/>
            <select onChange={(event)=>setLocation(event.target.target)}>
                <option selected disabled>Location</option>
                <option value="Chikanda Urban">Chikanda Urban</option>
                <option value="Chikanda Rural">Chikanda Rural</option>
                <option value="Old Naisi">Old Naisi</option>
                <option value="Chikanda Matiya">Chikanda Matiya</option>
            </select><br/>
            <input type="radio" name="gender" onChange={(event)=>setGender(event.target.target)} value="male" /><label>Male</label><br/>
            <input type="radio" name="gender" onChange={(event)=>setGender(event.target.target)} value="female" /><label>Female</label><br/>
            <input  type="submit"/>
        </form>
    )
}