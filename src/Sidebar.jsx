import { Button } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import EditIcon from '@mui/icons-material/Edit';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import DescriptionIcon from '@mui/icons-material/Description';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
  const dispatch = useDispatch()

  return (
    <div className='Sidebar'>
      <Button onClick={() => dispatch(openSendMessage())} startIcon={<EditIcon fontSize="large" />} className="sidebar__compose">
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={7} selected />
      <SidebarOption Icon={StarIcon} title="Starred" />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" />
      <SidebarOption Icon={SendIcon} title="Sent" />
      <SidebarOption Icon={DescriptionIcon} title="Drafts" />
      <SidebarOption Icon={KeyboardArrowDownIcon} title="More" />

    </div>
  )
}

export default Sidebar
