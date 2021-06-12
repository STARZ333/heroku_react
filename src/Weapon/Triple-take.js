import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";

function Triple_take(props){
    return(
        <div>
            <button onClick={props.toHome}>Home</button>
            <h1>
            Triple take
            </h1>
        </div>
        
    )
}
export default Triple_take;