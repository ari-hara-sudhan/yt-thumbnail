import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import VideocamIcon from '@material-ui/icons/Videocam'
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications'
import { IconButton } from '@material-ui/core';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                 <MenuIcon/>
                </IconButton>
                <img className="header__logo" src="https://static0.srcdn.com/wordpress/wp-content/uploads/2018/04/YouTube-Logo.jpg" alt="yt-logo"/>

            </div>
            <div className="header__center">
                <input/>
                <SearchIcon fontSize="large" className="header__search"/>
           </div>
        <IconButton>
        <MicIcon/>
        </IconButton>
           
            <div className="header__right">
                <IconButton>
                <SearchIcon/>
                </IconButton>
                <IconButton>
                <VideocamIcon/> 
                </IconButton>
                <IconButton>
                <AppsIcon/>    
                </IconButton>
                <IconButton>
                <NotificationsIcon/> 
                </IconButton>
            </div>
        </div>
    )
}

export default Header
