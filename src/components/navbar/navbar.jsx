import './navbar.css';
import { Component } from 'react';
import { MenuItems } from "./menuitems";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {    
    return (
        <div>
        <nav className="navbaritems">
            <h1 className= "navbar-logo">ACCOFINDER</h1>
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
