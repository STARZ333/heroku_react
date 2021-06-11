import React from "react";
import ReactDOM from 'react-dom';
import './HomePage.css';
import HomeElement from './HomeElement'
export default function HomePage(){
    return(
    <div className="home">
        <h1>
            Apex Weapons<span>A webpage introducing Apex weapons</span>
        </h1>
        < HomeElement/>

    </div>)
}


//   ReactDOM.render(
//     <HomePage/>,
//     document.getElementById('root')
//   );
  
  
