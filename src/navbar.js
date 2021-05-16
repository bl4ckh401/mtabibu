import NavItems from "./navItems";
import { BsHouseFill } from "react-icons/bs";
import { FaPrescriptionBottleAlt,FaUserAlt,FaWeixin } from "react-icons/fa";

import './App.css'
function NavBar(){
    let brand = { 
           color: 'red',
           width:72,
           height:50
    }
    return(
        <div className='App-header'>
            <navbar>
                <div className='navList'>
                <img src="./myLogo.png" alt="logo" style={brand}/>
                </div>  
                <NavItems href='login.jsx' icon={<BsHouseFill/>} name='Home'/>
                <NavItems icon={<FaPrescriptionBottleAlt/>} name='Prescription'/>
                <NavItems icon={<FaUserAlt/>} name='Profile'/>
                <NavItems icon={<FaWeixin/>} name='Chat'/>
            </navbar>
        </div>
        
    )
}
export default NavBar;
