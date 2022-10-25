import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import './Header.css'

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    const signOut = () =>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <div className='header'>
        <div className='header__left'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src="https://www.vectorlogo.zone/logos/gmail/gmail-ar21.svg" alt="" />
        </div>
        <div className='header__middle'>
            <SearchIcon />
            <input placeholder='Search mail' type="text" />
            <ArrowDropDownIcon className='header__inputCaret'/>
        </div>
        <div className='header__right'>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <Avatar className='header__avatar' onClick={signOut} src={user?.photoUrl}/>
        </div>
    </div>
  )
}

export default Header