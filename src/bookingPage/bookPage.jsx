import { useState } from "react";
import Client from "../axiosClient/Client";
import {useLocation} from "react-router-dom";

export function BookHostel(){
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [rooms, setRooms] = useState();
    const [image, setImage] = useState();

    const navigateToPage = useState();
    const hostelId = useLocation();


    let image = hostelId.state.file;

    Client.get(`/api/hostels/${hostelId.state.id}/get`)
    .then((response) => {
            setName(response.data.hostel['name'])
            setGender(response.data.hostel['gender'])
            setRooms(response.data.hostel['vacantRooms'])
    })
    .catch((err) => {
        console.log(err)
    })

    function handleSubmit(event){
        event.preventDefault();

        Client.get(`/api/hostel/${hostelId.state.id}/book`)
        .then((response) => {
            if(response.status == 200){
                navigateToPage('/hostel/pending', {state: {
                    hostelId: hostelId.state.id
                }})
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return(
        <form onSubmit={handleSubmit}>
            <img src={require(`../hostelPics/${image}`)}/>
            <label>{name}</label>
            <label>{gender}</label>
            <label>{rooms}</label>
            <input type='file' />
            <input type='submit' />
        </form>
    )
}