import React from 'react'
import './Sidebar.css';
import { FaSquareXTwitter } from "react-icons/fa6";
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from './SidebarOption';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import Button from '@mui/material/Button';

function sidebar() {
  return (
    <div className='sidebar'>
      {/*icon */}
      <FaSquareXTwitter  className="sidebar__twitterIcon"/>
      {/* SidebarOptions*/}
      <SidebarOption active  Icon = {HomeIcon} text="Home"/>
      <SidebarOption Icon = {SearchOutlinedIcon} text= "Search"/>
      <SidebarOption Icon = {NotificationsIcon}  text="Notifications"/>
      <SidebarOption Icon = {ExploreIcon}  text="Explore"/>
      <SidebarOption Icon = {MessageIcon} text="Message"/>
      <SidebarOption Icon = {AccountCircleIcon} text="Profile"/>
      <SidebarOption Icon = {ExpandMoreSharpIcon } text="More"/>

      {/* Tweet*/}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

    </div>
  )
}

export default sidebar;
