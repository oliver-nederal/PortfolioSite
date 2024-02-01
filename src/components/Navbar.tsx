import React from 'react'
import Logo from '../assets/logo.png'
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';


import { Link } from "react-router-dom";

import ButtonGroup from '@mui/joy/ButtonGroup';
import Tooltip from '@mui/joy/Tooltip';
import { FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className='flex justify-center'>
      {/*Top NavBar*/}
      <div className='sticky w-[92vw] max-w-[1500px] h-[80px] flex justify-between items-center px-4 bg-[#efeff0] text-gray-600 border-[2px] shadow-md rounded-[30px] my-[20px]'>
          <div className='flex flex-row'>
            <div className='mx-2 rounded-xl'>
              <img src={Logo} alt='Logo' style={{width: '40px', borderRadius: '35%'}} />
            </div>
            <div className='mx-2 flex flex-col justify-center'>
              <ButtonGroup variant="outlined" spacing={1.5}>
                <Tooltip title="Discord" variant="outlined" placement="bottom" size='lg'> 
                  <IconButton> <FaDiscord/> </IconButton>
                </Tooltip>
                <Tooltip title="GitHub" variant="outlined" placement="bottom" size='lg'> 
                  <IconButton> <FaGithub/> </IconButton>
                </Tooltip>
                <Tooltip title="Instagram" variant="outlined" placement="bottom" size='lg'> 
                  <IconButton> <FaInstagram/> </IconButton>
                </Tooltip>
              </ButtonGroup>
            </div>
          </div>
          

          <ul className="hidden md:flex">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Skills', '/skills'],
              ['Projects', '/projects'],
              ['Contact', '/contact'],
            ].map(([title, url]) => (
              <a href={url} className="mx-2 p-2 rounded-lg transition bg-gray-200 bg-opacity-0 duration-500 ease-in-out hover:font-bold hover:bg-opacity-100">{title}</a>
            ))}
          </ul>

        <div className="md:hidden">
          <React.Fragment>
            <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
              <Menu />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  ml: 'auto',
                  mt: 1,
                  mr: 2,
                }}
              >
                <Typography
                  component="label"
                  htmlFor="close-icon"
                  fontSize="sm"
                  fontWeight="lg"
                  sx={{ cursor: 'pointer' }}
                >
                  Close
                </Typography>
                <ModalClose id="close-icon" sx={{ position: 'initial' }} />
              </Box>
              <List
                size="lg"
                component="nav"
                sx={{
                  flex: 'none',
                  fontSize: 'xl',
                  '& > div': { justifyContent: 'center' },
                }}
              >
                <ListItemButton onClick={() => {window.location.href='/';}} sx={{ fontWeight: 'lg' }}>Home</ListItemButton>
                <ListItemButton onClick={() => {window.location.href='/about';}}>About</ListItemButton>
                <ListItemButton onClick={() => {window.location.href='/skills';}} >Skills</ListItemButton>
                <ListItemButton onClick={() => {window.location.href='/projects';}} >Projects</ListItemButton>
                <ListItemButton onClick={() => {window.location.href='/contact';}} >Contact</ListItemButton>
              </List>
            </Drawer>
          </React.Fragment>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar