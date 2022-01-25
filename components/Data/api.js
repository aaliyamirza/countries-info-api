import {useState,useEffect} from "react";
import Data from "./fetch";
import { FilterContext} from "../Search&Filter/useFilter";

const useFetch = (params=null) => {
    const {filter} = FilterContext
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const fetchbyName = async () => {
        try{
            const {data} = await Data.getByName(params);
            setData(data);
            setLoading(false)
        } catch(error) {
            setLoading(false)
            setError(error)
        }
        }
    
        const fetchData = async () => {
            try{
                const {data} = await Data.getAll()
                setData(data);
                setLoading(false)
            } catch(error) {
                setLoading(false)
                setError(error)
            }
        }

        const fetchbyRegion = async () => {
            try{
                const {data} = await Data.getbyFilter(filter)
                setData(data);
                setLoading(false)
            } catch(error) {
                setLoading(false)
                setError(error)
            }
        }

        const fetchbySearch = async () => {
            try {
                const {data} = await Data.getbySearch(filter)
                setData(data);
                setLoading(false)
            } catch(error) {
                setLoading(false)
                setError(error)
            }
        }

        useEffect(() => {
            if(params) {
                fetchbyName();
            } else if(filter) {
                fetchbyRegion();
            }
            else if(filter){
                fetchbySearch();
            } else{
                fetchData();
            }
        })

        return {
            data, error, loading
        }
    }
    
    export default useFetch