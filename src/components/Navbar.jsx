import { Pets, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Box, styled, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'

 const StyledToolbar = styled(Toolbar)({
     display: "flex",
     justifyContent: "space-between"
 })

const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({theme})=>({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }

}))

const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }

}))


const Navbar = () => {

    const [open, setOpen] = useState(false)


  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{ display: { xs: "none", sm: "block"}}}>Navbar</Typography>
            <Pets sx={{ display: { xs: "block", sm: "none"}}}/>
            <Search><InputBase placeholder="search..." /></Search>
            <Icons>
                <Badge badgeContent={2} color="error">
                    <Mail />
                </Badge>
                <Badge>
                    <Notifications />
                </Badge>
                <Avatar onClick={()=>setOpen(true)} sx={{ width: "30px", height: "30px"}} src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </Icons>
            
            <UserBox onClick={()=>setOpen(true)}>
                <Avatar sx={{ width: "30px", height: "30px"}} src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Typography variant='body2'>Evariste</Typography>
            </UserBox>
        </StyledToolbar>
         <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={""}
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={()=>{}}>Profile</MenuItem>
        <MenuItem onClick={()=>{}}>My account</MenuItem>
        <MenuItem onClick={()=>{}}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar