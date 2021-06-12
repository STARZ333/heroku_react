import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";

function Prowler(props){
    return(
        <div>
            <button onClick={props.toHome}>Home</button>
            <h1>
                Prowler
            </h1>
        </div>
        
    )
}
export default Prowler;