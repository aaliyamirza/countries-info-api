import React from "react";
import { FormControl,OutlinedInput,InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FilterContext} from "./useFilter";

export default function Search() {
    const {filter,setFilter}= FilterContext
    //const [search,setSearch] = React.useState('')
     function handleChange(e) {
        setFilter({
            ...filter,
            search:e.target.value
        });
    }

    return <div>
        <FormControl sx={{m:1, width: "45ch", bgcolor:"background.default", color:"text.primary"}}>
            <OutlinedInput value={filter} onChange= {handleChange} sx={{height:"5ch", maxWidth:"330px"}} placeholder="Search for a country..." startAdornment=
               { <InputAdornment position="start">
                    <SearchOutlinedIcon />
                </InputAdornment> }
            />
        </FormControl>
    </div>
}