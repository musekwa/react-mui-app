import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"

const Rightbar = () => {
  return (
    <Box flex={1.5} p={2} sx={{ display: { xs: "none", sm: "block" }}}>
      <Box position={"fixed"} >
       
        <Typography variant='h6' fontWeight={100}>Online friends</Typography>
       <Box width={150}>
       <AvatarGroup total={7} >
          <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar sx={{ width: 30, height: 30 }} alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar sx={{ width: 30, height: 30 }} alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/6.jpg" />
          <Avatar sx={{ width: 30, height: 30 }} alt="Travis Howard" src="https://material-ui.com/static/images/avatar/7.jpg" />
          <Avatar sx={{ width: 30, height: 30 }} alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/8.jpg" />
         <Avatar sx={{ width: 30, height: 30 }} alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/8.jpg" />
        </AvatarGroup>
        </Box>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5} >
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/camera.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/burgers.jpg" alt="" />
          </ImageListItem>
        </ImageList>
<Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest conversations</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar