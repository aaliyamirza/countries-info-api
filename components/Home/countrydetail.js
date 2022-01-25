import React from "react";
import Detail from "../Country/detail";
import { useParams } from "react-router";
import ReactLoading from "react-loading";
import useFetch from "../Data/api";
import BackButton from "../Country/button";

export default function CountryDetail() {
    const {name} = useParams();

    const {data,loading} = useFetch(name);

    if(loading){
        return <div><ReactLoading type="spin"/></div>
    }

    return <div>
        <div>
            <BackButton/>
            <Detail data={data[0]} />
        </div>
    </div>
}