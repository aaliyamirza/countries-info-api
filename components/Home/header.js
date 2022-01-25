import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
//import {useTheme} from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
//import Brightness7Icon from '@mui/icons-material/Brightness7';


export default function Header() {
    
    return <header>
    <div style= {{width:"100%"}}>
        <Box sx={{bgcolor:"background.default", color:"text.primary", height:43, display:"flex", alignItems:"center", p:1, borderBottom:`1px solid #bdbdbd`, justifyContent:"space-around"}}> 
        <Box sx={{flexGrow:2}}>
        <h2>Where in the world?</h2>
        </Box>
        <div>
        <Box sx={{background: "background.default", color: "text.primary", alignItems:"center", display:"flex"}}> 
        <IconButton sx={{ ml: 1/3 }}><Brightness4Icon /></IconButton>
        <h5>Dark Mode</h5>
        </Box>
        </div>
        </Box>
        </div>
    </header>
}
//{theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
//{theme === "light" ? "Dark Mode" : "Light Mode"}