import {useEffect, useState } from "react";
import Client from "../axiosClient/Client";
import { useNavigate } from 'react-router-dom';

export function ViewHostel(){
    const [hostels, setHostels] = useState();
    const navigateToPage = useNavigate();

    let hostelsArray = [];
    const fetchHostels = async () => {

            await Client.get('/api/hostels/all')
            .then((response) => {
                hostelsArray = Object.entries(response.data.hostels);

                    setHostels(hostelsArray.map((hostel, index) => {
                        return(
                            <div>                    
                                <img src={require(`../hostelPics/${hostel[1]['filename']}`)}/>
                                <div>
                                    <label>{hostel[1]['name']}</label>
                                    <label>{hostel[1]['gender']}</label>
                                    <label>{hostel[1]['vacantRooms']}</label>
                                    <button onClick={() =>{
                                        navigateToPage('/hostel/book', {state:{
                                            id:hostel[1]['id']
                                        }}
                                        )}
                                    }>Book</button>
                                </div>
                            </div>
                        )
                    }))
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() =>{
        fetchHostels()
    }, []);

    return(
        <div>
            {hostels}
        </div>
    )
}