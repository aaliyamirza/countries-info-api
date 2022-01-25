import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Country from "./card";
//import CountryLink from '../Home/countrylink';
import useFetch from '../Data/api.js';
import ReactLoading from "react-loading";


 export default function Countries() {
     const {data,loading} = useFetch();

if(loading){
    return <div><ReactLoading/></div>
}

     return <div>
     <Box sx={{ flexGrow:1, mt:2}}>
         <Grid container spacing={2}>
             { data.map((country,index)=> (
                 <Grid item xsm={12} sm={12} md={3} key={index}>
                 <Country flag={country?.flags.png} name={country.name.common} population={country?.population} region={country?.region} capital={country.capital} />
                  </Grid>
             ))}
         </Grid>
     </Box>
    
     </div>
 }
