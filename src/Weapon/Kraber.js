import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";

function Kraber(props){
    return(
        <div>
            <button onClick={props.toHome}>Home</button>
            <h1>
                Kraber
            </h1>
        </div>
        
    )
}
export default Kraber;