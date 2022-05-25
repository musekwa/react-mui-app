import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import { Home, Settings, Person, Article, Group, Storefront, AccountBox, ModeNight } from '@mui/icons-material';

const Sidebar = ({ setMode, mode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" }}}>
        <Box position={"fixed"}>
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#homepage">
                    <ListItemIcon>
                        <Home />  
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#pages">
                    <ListItemIcon>
                        <Article />  
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#group">
                    <ListItemIcon>
                        <Group />  
                    </ListItemIcon>
                    <ListItemText primary="Group" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#marketplace">
                    <ListItemIcon>
                        <Storefront />  
                    </ListItemIcon>
                    <ListItemText primary="Marketplace" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#friends">
                    <ListItemIcon>
                        <Person />  
                    </ListItemIcon>
                    <ListItemText primary="Friend" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#profile">
                    <ListItemIcon>
                        <AccountBox />  
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#settings">
                    <ListItemIcon>
                        <Settings />  
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#nigthmode">
                    <ListItemIcon>
                        <ModeNight />  
                    </ListItemIcon>
                    <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')}  defaultChecked />
                </ListItemButton>
            </ListItem>
        </List>
        </Box>
    </Box>
  )
}

export default Sidebar