import React from "react";
import ReactDOM from 'react-dom';
import './HomePage.css';
import HomeElement from './HomeElement'
function HomePage(){
    return(
    <div className="home">
        
        {/* <h1>
            Apex Weapon<span>A simple React Todo List App</span>
        </h1> */}
        < HomeElement/>

    </div>)
}

//   var HomePage = React.createClass({
//     render:function(){
//       return (<div className="img"></div>)
//     }  
//   });
  ReactDOM.render(
    <HomePage/>,
    document.getElementById('root')
  );
  
  
