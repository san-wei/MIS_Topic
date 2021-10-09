import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Scroll from "../compoenet/Scrooll";
import '../css/home.css'

const Truku = () => {
    return (
        <div>
            <Header/>
                <div className="container">
                    <div className="section ">
                        <div className="title has-text-centered">
                            太魯閣族-簡介
                        <hr className="line"></hr>
                        </div>                           
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <figure className="image image-center " style={{width:"200px"}}>
                                    <img src={require('../image/page-image/Truku/Truku.png').default }alt="泰雅族圖騰"></img>
                                </figure>                                
                            </div>
                            <div className="column 	">
                                <p className="subtitle has-text-justified "> 太魯閣族人重視織布與紋面文化，信仰祖靈並遵守祖先訓示gaya，祖靈祭為重要祭儀。目前部落以花蓮縣的秀林、萬榮、卓溪三鄉鎮為主要居住地，以及吉安鄉慶豐、南華、福興三村，並於中華民國93 年（2004）公告認定為臺灣原住民族之一，稱為太魯閣族。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                太魯閣族的祖先在史前時代由南洋一帶乘坐rowcing（漂流木，即船隻之意），在臺灣西南沿海一帶登陸，登陸後散居於臺中至臺南一帶的平原上，後因與平原上之平埔族不合且寡不敵眾，被驅逐追殺，因而被迫向臺灣中部高山地區遷移，先遷至埔里西方名為Ayran（愛蘭）的地方，然後漸次向東的山區遷移，經過好幾個世紀共遷居十七個地方，最後遷移到現在的南投縣仁愛鄉合作村
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">遷徙痕跡</p>
                                        <p className="subtitle has-text-justified">太魯閣族人在十七、十八世紀往東越過了中央山脈的奇萊山、能高山、合歡山，到達臺灣東部的花蓮地區，在東部建立了新的家園，太魯閣族往東拓展後，在花蓮立霧溪、太魯閣溪兩岸河谷建立部落，十九世紀末太魯閣族人逐漸往立霧溪中、下游移動，往北到達和平溪流域，往南則發展到三棧溪、木瓜溪、清水溪流域。</p>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="section ">
                        <div className=" has-text-centered title">祖靈慶典</div>
                        <hr className="line"></hr>
                        <div className="columns">
                            <div className="column ">
                                <figure class="image is-128x128 image-center">
                                    <img src={require('../image/icon/Atayal.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">祖靈祭</div>
                            </div>
                        </div>
                    </div>
                    <div className="section ">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered">祭祀團體</p>
                                <p className="has-text-justified">太魯閣族的gaya（祖訓），指祖先留下的生活規範，是太魯閣族人行為與道德的規範準則。gaya 團體以一個或兩個近親群為核心，加上其他遠親族或姻親組成；gaya 的成員共同耕作、祭祀與遵守禁忌，具有親屬、經濟、宗教、地域功能的組織。太魯閣族人相信若違反gaya，祖先會降禍族人，若有成員違反gaya，其他成員會要求觸犯gaya 者贖罪，其方式是視所犯禁忌之大小，以殺豬、雞、鴨等動物，藉由血祭方式贖罪，至今族人仍維持此傳統。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered"> 婚姻</p>
                                <p className="has-text-justified">屬於小家庭組織的父系社會，家產由男性繼承。婚姻方面嚴守一夫一妻制，傳統上男性必須具備狩獵技巧，女性必須通過織布考驗才能被視為理想對象。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">部落</p>
                                <p className="has-text-justified">即指同在一個區域內的居民具有共祭、共獵與共負罪責，以及維護同一群人的生存與財產的組織。易言之，alang 是指同一個家族團體的生活領域，它涵蓋了居住環境、燒墾耕地以及狩獵區域的所有範圍。galang/alang 按照不同時代有「社」、「部落」、「聚落」、「村落」等不同詞彙，指的就是太魯閣族群社會組織的最基本單位。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">頭目</p>
                                <p className="has-text-justified">部落領袖是bukun，由部落推舉聰明、正直的人擔任，負責對外事務的聯繫、協商，對內則仲裁糾紛、維持部落和諧</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
       
    );
}

export default Truku