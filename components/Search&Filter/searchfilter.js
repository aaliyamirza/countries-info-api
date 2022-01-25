import React from "react";
import Box from "@mui/material/Box";
import  Search  from "./search";
import Filter from "./filter";

export default function FilterBar() {
    return <div>
        <Box sx={{display:"flex",p:1}}>
            <Box sx={{flexGrow:2}}>
            <Search/>
            </Box>
            <Box>
            <Filter/>
            </Box>
        </Box>
    </div>
}

  