import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Curm_Home(){
    document.title="Curm Home"

    return(
        <a>
            <h1>CURM!</h1>
            <h2>
                <Link to="/curm/common">Common</Link>
            </h2>
            <h2>
                <Link to="/curm/uncommon">Uncommon</Link>
            </h2>
            <h2>
                <Link to="/curm/rare">Rare</Link>
            </h2>
            <h2>
                <Link to="/curm/mythic">Mythic</Link>
            </h2>
        </a>
    );
}

export default Curm_Home