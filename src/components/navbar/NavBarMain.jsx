import './navbar.css';
import { Component } from 'react';
import { MenuItems } from "./MenuItemsMain";
import { Link } from 'react-router-dom';
import Logo from '../../register/accofinder.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {    
    return (
        <div>
        <nav className="navbaritems">
            <div className="logo">
                <img className='image' src={Logo} alt="logo" />
                <h1 className= "navbar-logo">ACCOFINDER</h1>
            </div>
            <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder="search..." />
            </div>
            <div className='menu-icons' onClick= {this.handleClick}>
            <i className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"} ></i>
            </div>
            <ul className = {this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index)=> {
                return(
                    <li key={index}>
                    <Link className= {item.cName} to={item.Url}>
                    <i className={item.icon}>
                    </i>{item.title}
                    </Link>
                    </li>
                )
            })}
           
            </ul>
            </nav>
        </div>
    )
}
}

export default Navbar
