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
                 <img src={image ?  image: RoomPhoto} alt='Hostel Picture'/>

             </div>
            <form onSubmit={handlePosting} className="hostelPostingForm">
                <input id='upload-btn' className='file-field' type="file" onChange={(event) => setImage(event.target.files[0])}/>
                <label className='file-upload-label' htmlFor='upload-btn'>
                    <svg className='file-upload-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="file-upload">
                        <g data-name="Layer 2">
                            <path
                                d="M27,20a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V21a1,1,0,0,0-2,0v6a3,3,0,0,0,3,3H25a3,3,0,0,0,3-3V21A1,1,0,0,0,27,20Z"></path>
                            <path
                                d="M10,10a1,1,0,0,0,.707-.293L15,5.414V23a1,1,0,0,0,2,0V5.42l4.29,4.29a1.014,1.014,0,0,0,1.42,0,1.008,1.008,0,0,0,0-1.42l-6-6a1.007,1.007,0,0,0-1.417,0l-6,6A1,1,0,0,0,10,10Z"></path>
                        </g>
                    </svg>
                    upload file</label>
                <br/>
                <input className='input-field' type="text" placeholder="name"
                       onChange={(event) => setName(event.target.value)} required/><br/>
                <input className='input-field' type="number" placeholder="Number of vacant rooms"
                       onChange={(event) => setRooms(event.target.value)}/><br/>
                <div className='select-container'>
                    <select className='select-box' onChange={(event) => setLocation(event.target.value)}>
                        <option selected disabled>Location</option>
                        <option value="Chikanda Urban">Chikanda Urban</option>
                        <option value="Chikanda Rural">Chikanda Rural</option>
                        <option value="Old Naisi">Old Naisi</option>
                        <option value="Chikanda Matiya">Chikanda Matiya</option>
                    </select>

                </div>
                <br/>
                <input className='radio-input first' id='male' type="radio" name="gender" value="male"
                       onChange={(event) => setGender(event.target.value)}/>
                <label className='male' htmlFor='male'>Male</label><br/>
                <input className='radio-input second' id='female' type="radio" name="gender" value="female"
                       onChange={(event) => setGender(event.target.value)}/>
                <label className='female' htmlFor='female'>Female</label><br/>
                <input className='submit-btn' type="submit"/>
            </form>
        </div>
    )
}