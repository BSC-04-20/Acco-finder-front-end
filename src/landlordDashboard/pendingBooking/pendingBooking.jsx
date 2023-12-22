import { useLocation } from "react-router-dom";
import { useState } from "react";
import Client from "../../axiosClient/Client";

export function PendingBookingStatus(){
    const [hostelName, setHostelName] = useState();
    const [landlordName, setLandlordName] = useState();
    const [hostelGender, setGender] = useState();
    const [landlordPhoneNumber, setLandlordPhoneNumber] = useState();
    const hostelId = useLocation();

    Client.get(`/api/hostel/${hostelId.state.hostelId}/get`)
   .then((response) => {
    console.log(response.data)
   })
   .catch((err) => {
    console.log(err)
   });

    return(
        <div>

        </div>
    )
}