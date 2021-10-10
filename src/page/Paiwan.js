import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Scroll from "../compoenet/Scrooll";
import '../css/home.css'

const Paiwan = () => {
    return (
        <div>
            <Header/>
                <div className="container">
                    <figure className="image is-3by1">
                        <img src={require('../image/page-image/Paiwan/Paiwan.jpg').default } alt="Paiwan"></img>
                    </figure>
                    <div className="section "> 
                        <hr className="line"></hr>                          
                        <div className="columns is-align-items-center">
                            <div className="column ">
                                <img className="is-256x256 image-center " src={require('../image/page-image/Paiwan/icon.png').default }alt=" 排灣族圖騰"></img>                            
                            </div>
                            <div className="column 	">
                                <p className="title has-text-centered">族群簡介</p> 
                                <p className="subtitle has-text-justified "> 排灣族文化中以家名、家族的觀念與嚴謹的階級體系，貫穿社會中政治、婚姻、宗教與藝術各層面。排灣族人在小米收成後舉行「小米收穫祭」。另外，布曹爾群每五年辦理「五年祭」，迎請來探視子孫的祖靈，又稱為「人神盟約祭」。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                排灣族的分布，北以大武山、南到恆春半島、西到枋寮、東到太麻里及臺東市新園里的範圍，屬於中央山脈南段大武山兩側，包含屏東、臺東兩縣為範圍。排灣族內按照血緣風俗與族群自我分類，可分為拉瓦爾跟布曹爾兩大群系。
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">拉瓦爾群</p>
                                        <p className="subtitle has-text-justified">以三地門鄉的達瓦蘭社群為核心，以「達瓦蘭」為部落起源，社會文化上有百合花的配戴風俗，以及長男繼承的社會制度；在雕刻與陶壺藝術方面表現相當出色。</p></div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">布曹爾群</p>
                                        <p className="subtitle has-text-justified">主要分布在屏東縣瑪家、泰武、春日、獅子、牡丹鄉及臺東縣達仁、大武、金峰、太麻里等鄉，還有臺東市的新圍里等地區。</p></div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="section ">
                        <div className=" has-text-centered title">祖靈慶典</div>
                        <hr className="line"></hr>
                        <div className="columns">
                            <div className="column">
                                <figure className="image is-3by2 pic">
                                    <img className="image-center" src={require('../image/page-image/Paiwan/rice.png').default }alt="小米收穫祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">小米收穫祭</div>
                            </div>
                            <div className="column ">
                                <figure className="image  is-3by2 pic">
                                    <img className="image-center" src={require('../image/page-image/Paiwan/year.png').default }alt="五年祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">五年祭</div>
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered">家庭與婚姻</p>
                                <p className="has-text-justified"> 排灣族的布曹爾亞群婚姻制度被稱為長嗣繼承制度，也就是由家中出生序位第一的小孩來繼承家庭，因為不分男女而又稱為雙系制度。當婚姻締結時，非長嗣的一方入住長嗣家庭；若是雙方都不是長嗣，則雙方離開原生家庭建立新家；若是雙方皆為長嗣時，男女雙方都不離開自己的出生家庭，而往來兩家間處理事務，子女則繼承兩個家族財產與事務。排灣族的婚姻關係也是界定社會地位的條件之一，平民若是與貴族或頭目通婚，因為成為貴族近親的關係，自己身分的尊貴性也會提升，同時子女的階級也會因通婚而改變，Ravav 拉瓦爾則為長男繼嗣。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">部落與頭目排灣族的頭目</p>
                                <p className="has-text-justified">由本家直系長嗣世襲產生。社會地位、財產與被賦予的權利具優越性，擁有部落的土地、河流與獵場。頭目領導部落中的貴族、巫師、士族與庶民家族，照顧部落全體人民；部落人民也將平日工作所得，部分納貢奉獻給頭目。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered"> 階級社會</p>
                                <p className="has-text-justified">排灣族分為頭目、貴族、巫師與祭司、士族、庶民五個階級，每個階級所能享受的權利不同。頭目與貴族社會地位較高，身體不但可刺人頭紋、百步蛇紋路外，也擁有較多土地資源，可向族人徵收土地、山林稅等。頭目與貴族的家屋不但比較寬敞，也可進行雕刻裝飾。士族階級介於貴族與庶民之間，比起平民有部分特殊權利，像是免稅及使用部分人名等。庶民則藉由個人成就表現，獲得頭目與部落青睞。</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
       

    );
}
export default Paiwan;