import React from "react";
import Link from "react-router-dom";

export default function BackButton() {
    return <div>
        <Link to="/" style={{textDecoration: "none"}}>
        <p>Back</p>
        </Link>
    </div>
}