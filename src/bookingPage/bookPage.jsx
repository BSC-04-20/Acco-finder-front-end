import { useState } from "react";
import Client from "../axiosClient/Client";
import {useLocation} from "react-router-dom";

export function BookHostel(){
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [rooms, setRooms] = useState();
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
    return(
        <form>
            <img src={require(`../hostelPics/${image}`)}/>
            <label>{name}</label>
            <label>{gender}</label>
            <label>{rooms}</label>
            <input type='file' placeholder="transaction screenshot"/>
            <input type='submit' />
        </form>
    )
}