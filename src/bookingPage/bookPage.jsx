import Client from "../axiosClient/Client";
import {useLocation} from "react-router-dom";

export function BookHostel(){
    const hostelId = useLocation();

    Client.get(`/api/hostels/${hostelId.state.id}/get`)
    .then((response) => {
        console.log(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
    return(
        <>
            
        </>
    )
}