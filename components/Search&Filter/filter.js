import React from "react";
import MenuItem  from "@mui/material/MenuItem";
import FormControl  from "@mui/material/FormControl";
import  Select  from "@mui/material/Select";
//import { InputBase } from "@mui/material/InputBase";
//import {styled} from "@mui/material/styles";

//const BootstrapInput = styled(InputBase)


export default function Filter() {
return <div>
 <FormControl sx={{m:1, width:"17ch"}}>
     <Select label="region">
         <MenuItem value="africa">Africa</MenuItem>
         <MenuItem value="america">America</MenuItem>
         <MenuItem value="asia">Asia</MenuItem>
         <MenuItem value="europe">Europe</MenuItem>
         <MenuItem value="oceania">Oceania</MenuItem>
     </Select>
 </FormControl>
</div>
}

//input={<BootstrapInput/>}