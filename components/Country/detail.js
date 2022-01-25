import React from "react";
import Card  from "@mui/material/Card";
import  CardContent  from "@mui/material/CardContent";
import CardMedia  from "@mui/material/CardMedia";
//mport { Button } from "@mui/material";
//import useFetch from "../Data/api";
//import { useParams } from "react-router";

export default function Detail({data}) {
    

    return <div>
    <Card>
    
        <CardMedia component="img" height="140" image={data?.flags.svg} alt="official flag of country"/>
        <CardContent>
        <h3>{data?.name}</h3>
        <div>
        <p>Native Name: {data?.nativeName} </p>
        <p>Population: {data?.population.toLocaleString("en-US")}</p>
        <p>Region:{data?.region}</p>
        <p>Sub Region: {data?.subregion}</p>
        <p>Capital:{data?.capital} </p>
        </div>
        <div>
            <p>Top Level Domain: {data?.topLevelDomain[0]} </p>
            <p>Currencies: {data?.currencies[0]?.name}</p>
            <p>Languages: {data?.languages.map(item => `{item.name}`)}</p>
        </div>
        <div>
            <h4>Border Countries:</h4>
            { data?.borders?.map(item => <p>{item}</p>)}
        </div>
        </CardContent>
    </Card>
    </div>
}