import React, { useState, useReducer,Component } from "react";
import ReactDOM from "react-dom";
import './weapon.css';
import ProwlerImg from "../image/Prowler_Icon.png";

class Prowler extends Component{
  render(){
      let {items} = this.props
      return(
        <div className="weapon">
            <h1 onClick={this.props.toHome}>home</h1>            
            <div class="mdui-col-xs-6s mdui-col-sm-4 mdui-col-md-3" >                    
              <div class="mdui-cardss">
                  <div class="mdui-card-medias">
                      <img src={ProwlerImg} width="100%" alt="Kraber"/>
                  </div>
                  <div class="mdui-card-primarys">
                      <div class="mdui-card-primary-titles">Prowler</div>
                      <div class="mdui-card-primary-subtitles">獵獸衝鋒槍</div>
                  </div>
              </div>
            </div>
            <div className="title">
                槍支介紹
            </div>
            <div className="weaponContent">
            在默認情況下是一把五連發沖鋒槍，可以更換為自動模式。傷害不俗，且可對目標減速（侵蝕與直布羅陀除外），但是在開火狀態下彈道與準星在拉槍時有著明顯不匹配現象，所以不是很建議新手使用。在空投中自帶可拆卸的單倍數字化威脅。（熱成像瞄具）
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
                      <td>{items[1].Head_damage}</td>                    
                    </tr>
                    <tr>
                      <td>Body</td>
                      <td>{items[1].Body_damage}</td>         
                    </tr>
                    <tr>
                      <td>leg</td>
                      <td>{items[1].Leg_damage}</td>         
                    </tr>
                  </tbody>
              </table>
            </div>  
            
              
        </div>
      );
    // }
  }
  }
  export default Prowler;