import { Box, ButtonGroup, Button, Fab, Tooltip, Modal, styled, Avatar, Typography, TextField, Stack } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, EmojiEmotions, DateRange, VideoCameraBack, Image, PersonAdd } from "@mui/icons-material"

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
})

const Add = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
        <Tooltip onClick={e=>setOpen(true)} title="Add content" sx={{ position: "fixed", bottom: 20, left: { xs:"calc(50% - 25)", md: 30 }}}>
            <Fab color="primary" aria-label="add">
            <AddIcon />
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={(e)=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
            <Typography variant="h6" color="gray" textAlign="center">Create post</Typography>
            <UserBox onClick={()=>setOpen(true)}>
                <Avatar sx={{ width: "30px", height: "30px"}} src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Typography variant='body2' fontweight={500}>Evariste</Typography>
            </UserBox>
            <TextField
                sx={{ width: "100%"}}
                id="filled-multiline-static"
                multiline
                rows={2}
                placeholder="type your post here"
                variant="filled"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotions color="primary" />
                <Image color="secondary" />
                <VideoCameraBack color="success" />
                <PersonAdd color="error" />
            </Stack>
            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                <Button >Post</Button>
                <Button sx={{ width: "100px"}}><DateRange /></Button>
            </ButtonGroup>
        </Box>
        </StyledModal>
    </>
  )
}

export default Add