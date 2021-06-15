import React, { useState, useReducer,Component } from "react";
import ReactDOM from "react-dom";
import './weapon.css';
import KraberImg from "../image/Kraber_Icon.png";

class Kraber extends Component{
  render(){
      let {items} = this.props
      return(
        <div className="weapon">
            <h1 onClick={this.props.toHome}>home</h1>            
            <div class="mdui-col-xs-6s mdui-col-sm-4 mdui-col-md-3" >                    
              <div class="mdui-cardss">
                  <div class="mdui-card-medias">
                      <img src={KraberImg} width="100%" alt="Kraber"/>
                  </div>
                  <div class="mdui-card-primarys">
                      <div class="mdui-card-primary-titles">Kraber</div>
                      <div class="mdui-card-primary-subtitles">克萊博</div>
                  </div>
              </div>
            </div>
            <div className="title">
                槍支介紹
            </div>
            <div className="weaponContent">
            空投大狙，唯一栓狙的傷害有多恐怖就不說了。彈藥是跟隨空投掉落的特殊狙擊子彈，傷害巨大，彈匣容量4發，落地自帶高倍鏡。無數狙擊手夢寐以求的大狙，一槍帶走一個小朋友不是夢。不過可能一盤都刷不出一把，如果你拿到了它請記住，你就是全隊的希望。
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
                      <td>{items[0].Head_damage}</td>                    
                    </tr>
                    <tr>
                      <td>Body</td>
                      <td>{items[0].Body_damage}</td>         
                    </tr>
                    <tr>
                      <td>leg</td>
                      <td>{items[0].Leg_damage}</td>         
                    </tr>
                  </tbody>
              </table>
            </div>  
            
              
        </div>
      );
    // }
  }
  }
  export default Kraber;