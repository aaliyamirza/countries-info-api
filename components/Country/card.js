import React from "react";
import Card  from "@mui/material/Card";
import  CardContent  from "@mui/material/CardContent";
import CardMedia  from "@mui/material/CardMedia";
//import { Link } from "react-router-dom";
//import { useHref } from "react-router";
//import  CardActionArea  from "@mui/material";
import  GlobalStyles  from "@mui/material/GlobalStyles";
//import {useHistory} from "react-router-dom";
//import {useNavigate} from 'react-router-dom';
//import { BrowserRouter as Route, Link } from "react-router-dom";
//const history = useNavigate()
//onClick={()=>{history(`/${name}`)}}
// <Link useHref={(`/${name}`)}>
function Country({flag,name,population,region,capital}) {
    
    return (
      <div>
      <GlobalStyles
      styles={{p:{fontWeight:'bold'},span:{fontWeight:'lighter'},h3:{fontWeight:'bolder'}}}
      />
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={flag}
            alt={`official flag of ${name} `}
          />
          <CardContent>  
          <h3>{name}</h3>
          <p>Population:{<span>{population}</span>}</p>
          <p>Region:{<span>{region}</span>}</p>
          <p>Capital:{<span>{capital}</span>}</p>
          </CardContent>
      </Card>
      </div>
    );
  }

  export default Country

