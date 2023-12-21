import { useState } from "react";
import client from "../axiosClient/Client";
import  './postHostel.css'
import RoomPhoto from '../assets/Room-1.jpg'

export function PostHostel(){
    const [name, setName] = useState();
    const [rooms, setRooms] = useState();
    const [location, setLocation] = useState();
    const [gender, setGender] = useState();
    const [image, setImage] = useState();

    function handlePosting(event){
        event.preventDefault();

        const formData = new FormData();
        
        formData.append('name', name);
        formData.append('vacantRooms', rooms);
        formData.append('location', location);
        formData.append('gender', gender);
        formData.append('file', image);

        client.post('/api/hostels/add', formData)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    return(
        <div className='post-hostel-container'>
             <div className='room-picture-container'>
                 <img src={RoomPhoto} alt='hostel'/>
             </div>
            <form onSubmit={handlePosting} className="hostelPostingForm">
                <input  className='file-field' type="file" onChange={(event) => setImage(event.target.files[0])}/><br/>
                <input  className='input-field' type="text" placeholder="name" onChange={(event) => setName(event.target.value)} required/><br/>
                <input className='input-field' type="number" placeholder="Number of vacant rooms"
                       onChange={(event) => setRooms(event.target.value)}/><br/>
                <select onChange={(event) => setLocation(event.target.value)}>
                    <option selected disabled>Location</option>
                    <option value="Chikanda Urban">Chikanda Urban</option>
                    <option value="Chikanda Rural">Chikanda Rural</option>
                    <option value="Old Naisi">Old Naisi</option>
                    <option value="Chikanda Matiya">Chikanda Matiya</option>
                </select><br/>
                <input type="radio" name="gender" value="male"
                       onChange={(event) => setGender(event.target.value)}/><label>Male</label><br/>
                <input type="radio" name="gender" value="female"
                       onChange={(event) => setGender(event.target.value)}/><label>Female</label><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}