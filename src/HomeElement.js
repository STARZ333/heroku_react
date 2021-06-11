import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import Kraber from "./Weapon/Kraber";
import "./HomeElement.css";
import KraberImg from "./image/Kraber_Icon.png";
import "./grid.less";


function HomeElement() {
    return (
        
            <div class="mdui-row homepage-module" >
                <div class="mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3">
                    <a href="/update/apkdownload.html">
                        <div class="mdui-card mdui-hoverable">
                            <div class="mdui-card-media">
                                <img src="https://cdn.cocservice.top/homepage/apkdownload.jpg" alt="安装包下载"/>
                            </div>
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">安装包下载</div>
                                <div class="mdui-card-primary-subtitle">各渠道商版本下载</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3">
                    <a href="/update/">
                        <div class="mdui-card mdui-hoverable">
                            <div class="mdui-card-media">
                                <img src="https://cdn.cocservice.top/homepage/update_data.jpg" alt="升级数据"/>
                            </div>
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">升级数据</div>
                                <div class="mdui-card-primary-subtitle">游戏数据一览无余</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3">
                    <a href="/p/">
                        <div class="mdui-card mdui-hoverable">
                            <div class="mdui-card-media">
                                <img src="https://cdn.cocservice.top/homepage/passages.jpg" alt="攻略教程"/>
                            </div>
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">攻略教程</div>
                                <div class="mdui-card-primary-subtitle">收录优质内容</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3">
                    <a href="/search/">
                        <div class="mdui-card mdui-hoverable">
                            <div class="mdui-card-media">
                                <img src="https://cdn.cocservice.top/homepage/search_data.jpg" alt="信息查询"/>
                            </div>
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">信息查询</div>
                                <div class="mdui-card-primary-subtitle">鱼情、部落和玩家</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="mdui-col-xs-6 mdui-col-sm-4 mdui-col-md-3">
                    <a href="https://shimo.im/docs/3Y8KYXYKdQCPrvKR/read" target="_blank" rel="nofollow">
                        <div class="mdui-card mdui-hoverable">
                            <div class="mdui-card-media">
                                <img src="https://cdn.cocservice.top/homepage/base_design.jpg" alt="阵型收录"/>
                            </div>
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">阵型收录</div>
                                <div class="mdui-card-primary-subtitle">晴天阵型收集</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        
    );
}
export default HomeElement;
