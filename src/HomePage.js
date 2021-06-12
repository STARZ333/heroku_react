import React from "react";
import ReactDOM from 'react-dom';
import './HomePage.css';
import "./HomeElement.css";
import KraberImg from "./image/Kraber_Icon.png";
import Prowler from "./image/Prowler_Icon.png";
import Triple_take from "./image/Triple_Take_Icon.png";
import HomeElement from './HomeElement'
export default function HomePage(props){
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
                                <img src={Prowler} width="100%" alt="升级数据"/>
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
                                <img width="100%" src={Triple_take} alt="攻略教程"/>
                            </div>
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">Triple take</div>
                                <div class="mdui-card-primary-subtitle">三重擊</div>
                            </div>
                        </div>
                    
                </div>
                <div class="mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3">
                    <a href="/search/">
                        <div class="mdui-card mdui-hoverable">
                            <div class="mdui-card-media">
                                <img width="100%" src="https://cdn.cocservice.top/homepage/search_data.jpg" alt="信息查询"/>
                            </div>
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">信息查询</div>
                                <div class="mdui-card-primary-subtitle">鱼情、部落和玩家</div>
                            </div>
                        </div>
                    </a>
                </div>
                
            </div>

    </div>)
}


//   ReactDOM.render(
//     <HomePage/>,
//     document.getElementById('root')
//   );
  
  
