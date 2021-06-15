import React, { useState, useReducer,Component } from "react";
import ReactDOM from "react-dom";
import './weapon.css';
import Triple_takeImg from "../image/Triple_Take_Icon.png";

class TripleTake extends Component{
  render(){
      let {items} = this.props
      return(
        <div className="weapon">
            <h1 onClick={this.props.toHome}>home</h1>            
            <div class="mdui-col-xs-6s mdui-col-sm-4 mdui-col-md-3" >                    
              <div class="mdui-cardss">
                  <div class="mdui-card-medias">
                      <img src={Triple_takeImg} width="100%" alt="Kraber"/>
                  </div>
                  <div class="mdui-card-primarys">
                      <div class="mdui-card-primary-titles">Triple Take</div>
                      <div class="mdui-card-primary-subtitles">三重擊</div>
                  </div>
              </div>
            </div>
            <div className="title">
                槍支介紹
            </div>
            <div className="weaponContent">
            一次射擊會打出三發子彈（但是備彈只減少一發，魔幻設定）更容易擊中移動的目標。基礎傷害23爆頭傷害46，三發都打到需要乘以3，基礎69爆頭138。彈匣容量5發。三重擊的難點在於很難在遠距離保證三發子彈全部打到敵人身上，而收束器配件又有前置載入時間。在對狙的情況下很有可能吃虧。
            </div>
            <div className="title">
                槍支傷害
            </div>
            <div className="tb1">
              <table  border="1" id="tb" width="450">
                  <thead>
                    <tr>
                      <th>擊中部位</th>
                      <th>傷害</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Head</td>
                      <td>{items[3].Head_damage}</td>                    
                    </tr>
                    <tr>
                      <td>Body</td>
                      <td>{items[3].Body_damage}</td>         
                    </tr>
                    <tr>
                      <td>leg</td>
                      <td>{items[3].Leg_damage}</td>         
                    </tr>
                  </tbody>
              </table>
            </div>  
            
              
        </div>
      );
    // }
  }
  }
  export default TripleTake;