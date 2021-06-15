import React,{ useEffect }from "react";
import ReactDOM from 'react-dom';
import './HomePage.css';
import "./HomeElement.css";
import KraberImg from "./image/Kraber_Icon.png";
import Prowler from "./image/Prowler_Icon.png";
import Triple_take from "./image/Triple_Take_Icon.png";
import Todolist from "./image/todolist.jpg";
import HomeElement from './HomeElement'
import ReactGA from 'react-ga';


export default function HomePage(props){

    useEffect(() => {
        ReactGA.initialize('UA-193151170-1');
        // To Report Page View 
        ReactGA.pageview('/');
    }, [])

    useEffect(() => {
    console.log(window.location.pathname)
    })

    return(
    <div className="home">
        <h1>
            Apex Weapons<span>A webpage introducing Apex weapons</span>
        </h1>
        <div class="mdui-row homepage-module" >
                <div class="mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3" onClick={props.toKraber} >

                    
                        <div class="mdui-card mdui-hoverable">
                            <div class="mdui-card-media">
                                <img src={KraberImg} width="100%" alt="Kraber"/>
                            </div>
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">Kraber</div>
                                <div class="mdui-card-primary-subtitle">克萊博</div>
                            </div>
                        </div>
                    
                </div>
                <div class="mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3" onClick={props.toProwler}>
                    
                        <div class="mdui-card mdui-hoverable">
                            <div class="mdui-card-media">
                                <img src={Prowler} width="100%" alt="Prowler"/>
                            </div>
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">Prowler</div>
                                <div class="mdui-card-primary-subtitle">獵獸衝鋒槍</div>
                            </div>
                        </div>
                    
                </div>
                <div class="mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3" onClick={props.toTripletake}>
                        <div class="mdui-card mdui-hoverable">
                            <div class="mdui-card-media">
                                <img width="100%" src={Triple_take} alt="Triple_take"/>
                            </div>
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">Triple take</div>
                                <div class="mdui-card-primary-subtitle">三重擊</div>
                            </div>
                        </div>
                    
                </div>
                <div class="mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3" onClick={props.toTodolist}>
                    
                        <div class="mdui-card mdui-hoverable">
                            <div class="mdui-card-media">
                                <img width="100%" src={Todolist} alt="Todolist"/>
                            </div>
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">Todolist</div>
                                <div class="mdui-card-primary-subtitle">玩遊戲也不要忘記任務哦</div>
                            </div>
                        </div>
                    
                </div>
                
            </div>

    </div>)
}


//   ReactDOM.render(
//     <HomePage/>,
//     document.getElementById('root')
//   );
  
  
