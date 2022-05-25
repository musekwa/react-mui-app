import React, { useState} from 'react'
import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"
import Rightbar from './components/Rightbar'
import { Autocomplete, Box, createTheme, Stack, TextField, ThemeProvider} from "@mui/material"
import Navbar from "./components/Navbar";
import Add from './components/Add'

const userRoles = [
  { label: "Extensionista", value: "Extensionista"},
  { label: "Gestor", value: "Gestor"},
  { label: "Produtor", value: "Produtor"},
]


function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction={"row"} justifyContent="space-between" spacing={1}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
        {/* <Box>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={userRoles}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Perfil" />}
          />
        </Box> */}
      </Box>
    </ThemeProvider>
  );
}

export default App



// import { Button, styled } from "@mui/material";
// import SettingsIcon  from "@mui/icons-material/Settings";
// import AddIcon from "@mui/icons-material/Add";


// function App() {

//   const BlueButton = styled(Button)(({theme})=>({
//     backgroundColor: theme.palette.otherColor.main,
//     color: theme.palette.otherColor.light,
//     "&:hover": {
//       backgroundColor: "#345",
//       color: "#111"
//     }
//   }))

//   return (
//     <div>
//       <Button variant="text">Text</Button>
//       <Button startIcon={<SettingsIcon />}  variant="contained" color="primary" size="small">
//         Contained
//       </Button>
//       <Button variant="outlined">Outlined</Button>
//       <Button variant="contained" size="small" startIcon={<AddIcon />} color="otherColor">Add Item</Button>

//       <BlueButton size="small">
//         Salvar
//       </BlueButton>

//     </div>
//   );
// }

// export default App;
