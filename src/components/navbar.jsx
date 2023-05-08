import React, { useState } from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Navbar() {
    const logout =()=>{
        console.log("Logged out");
        localStorage.setItem('login','false')
        window.location.reload();
    }
    const [isOpen, setOpen] = useState(false)
    // console.log('Open - ',isOpen);
    const clicked=()=>{
        // console.log('Open - ',isOpen);
        setOpen(!isOpen)
    }
  return (
    <div className='navbar'>
        <div className="brand">
            <h1>PRODUCT ADMIN</h1>
        </div>
        <div className="menu">
            <NavLink className='Nav' to="/">
                <div className='LinkItem'>
                    <HomeOutlinedIcon/>
                    <p>Dashboard</p>
                </div>
            </NavLink>
            <NavLink className='Nav' to="/reports">
                <div className='LinkItem'>
                    <FeedOutlinedIcon/>
                    <p>Reports</p>
                </div>
            </NavLink>
            <NavLink className='Nav' to="/products">
                <div className='LinkItem'>
                    <ShoppingCartOutlinedIcon/>
                    <p>Products</p>
                </div>
            </NavLink>
            <NavLink className='Nav' to="/account">
                <div className='LinkItem'>
                    <PermIdentityOutlinedIcon/>
                    <p>Account</p>
                </div>
            </NavLink>
            <NavLink className='Nav' to="./settings">
                <div className='LinkItem'>
                    <SettingsOutlinedIcon/>
                    <p>Settings</p>
                </div>
            </NavLink>
            <button onClick={logout} id='logout'>Admin, Logout</button>
        </div>
            <div className='hamburger'>
            <button id='ham' onClick={clicked} ><MenuOutlinedIcon/></button>
            <div className='ham-menu'>
                {
                    isOpen? 
                    <>
                    <NavLink className='Nav' to="/">
                    <div className='LinkItem'>
                        <HomeOutlinedIcon/>
                        <p>Dashboard</p>
                    </div>
                </NavLink>
                <NavLink className='Nav' to="/reports">
                    <div className='LinkItem'>
                        <FeedOutlinedIcon/>
                        <p>Reports</p>
                    </div>
                </NavLink>
                <NavLink className='Nav' to="/products">
                    <div className='LinkItem'>
                        <ShoppingCartOutlinedIcon/>
                        <p>Products</p>
                    </div>
                </NavLink>
                <NavLink className='Nav' to="/account">
                    <div className='LinkItem'>
                        <PermIdentityOutlinedIcon/>
                        <p>Account</p>
                    </div>
                </NavLink>
                <NavLink className='Nav' to="./settings">
                    <div className='LinkItem'>
                        <SettingsOutlinedIcon/>
                        <p>Settings</p>
                    </div>
                </NavLink>
                <button onClick={logout} id='logout'>Admin, Logout</button>
                    </>
                    :null
                }
            </div>
            </div>
    </div>
  )
}

export default Navbar
