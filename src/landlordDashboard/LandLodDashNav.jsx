import { useNavigate } from 'react-router-dom';
import './LandlordDashBoardNav.css';

export function LandlordDashboardNav(){
    const moveToPage = useNavigate();

    return(
        <nav className="landlordNavigation">
            <button onClick={()=>{moveToPage('/hostel/post')}}>Add Hostel</button>
            <button>Hostels</button>
            <button>Confirmations</button>
        </nav>
    )
}
