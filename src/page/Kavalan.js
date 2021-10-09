import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Scroll from "../compoenet/Scrooll";
import '../css/home.css'

const Kavalan = () => {
    return (
        <div>
            <Header/>
                <div className="container">
                    <div className="section ">
                        <div className="title has-text-centered">
                            噶瑪蘭族-簡介
                        <hr className="line"></hr>
                        </div>                           
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <figure className="image image-center " style={{width:"200px"}}>
                                    <img src={require('../image/page-image/Kavalan/Kavalan.png').default }alt="泰雅族圖騰"></img>
                                </figure>                                
                            </div>
                            <div className="column 	">
                                <p className="subtitle has-text-justified "> 世居宜蘭千百年的噶瑪蘭族擁有蘭陽平原土地的主權，自由自在的群居靠近河流與海邊的土地上，噶瑪蘭族人濱海而居，早期住屋為高架的干欄建築，具有古東南亞文化的特徵。噶瑪蘭族人透過航海進行交換貿易，十九世紀末期受「加禮宛戰役」影響，族人隱匿於阿美部落超過一世紀。噶瑪蘭族族人近年發起民族正名運動，於中華民國91 年（2002）公告認定為臺灣原住民族之一，稱為噶瑪蘭族。工藝方面，噶瑪蘭族目前仍保有編織香蕉絲的技術，非常具有特色。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                噶瑪蘭族（Kavalan）自稱為kavalan，意思是平原的人類，自認有別於居住山林地區的泰雅族。傳說噶瑪蘭族人最早由南方島嶼，途經地名為Sanasai的地方後遷入臺灣，落腳於蘭陽平原，十九世紀初開始遷居到花蓮臺東海岸。噶瑪蘭族原來在蘭陽平原共有30 多個部落，十八世紀末漢人開始進入蘭陽平原；十九世紀清朝設立行政區「噶瑪蘭廳」，並以「加留餘埔」制度保障部落土地。不過，社會與生態環境的改變，仍讓不少噶瑪蘭族人從蘭陽平原，乘船南渡到達花蓮平原落腳，形成以加禮宛社為核心的大、小六個部落。清朝因執行開山撫番政策，勢力進逼花蓮平原，侵擾噶瑪蘭族人生活。
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">宜蘭縣的噶瑪蘭族</p>
                                        <p className="subtitle has-text-justified">居住在宜蘭縣壯圍鄉奇立板、貓里霧罕、五結鄉加禮宛、流流、利澤簡等社。</p>
                                    </div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">花蓮縣的噶瑪蘭族</p>
                                        <p className="subtitle has-text-justified">居住在新城嘉里村加禮宛、豐濱新社村新社、豐濱村立德。</p>
                                    </div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">臺東縣的噶瑪蘭族</p>
                                        <p className="subtitle has-text-justified">居住在長濱鄉三間村的三間厝、樟原村、大尖石。</p>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="section ">
                        <div className=" has-text-centered title">祖靈慶典</div>
                        <hr className="line"></hr>
                        <div className="columns">
                            <div className="column">
                                <figure class="image is-128x128 image-center">
                                    <img src={require('../image/icon/Atayal.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">海祭</div>
                            </div>
                            <div className="column ">
                                <figure class="image is-128x128 image-center">
                                    <img src={require('../image/icon/Atayal.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">豐年祭典</div>
                            </div>
                        </div>
                    </div>
                    <div className="section ">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered">母系婚姻</p>
                                <p className="has-text-justified"> 傳統的噶瑪蘭族社會屬於母系社會，男性於成年結婚後隨同妻子居住，並以家中女性長者為尊。日本殖民統治時期花蓮地區的噶瑪蘭族人，仍以民族內的通婚為主，民國60 年代（1970 年代）開始後，與其他民族之間的通婚比例逐漸增加。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">部落組織</p>
                                <p className="has-text-justified">噶瑪蘭族中年以上的男性稱為長老，由長老共同決定部落內重要公眾事務，並由頭目擔任召集人，也負責對外聯繫與執行。長老制度肩負部落內外溝通、聯繫的任務，像是文化傳承、祭典舉行，以及行政部門與部落之間的公共議題協商等，都是由長老們與頭目共同討論後決定。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">年齡階級</p>
                                <p className="has-text-justified">是維繫部落的重要力量，按照年齡分為不同階級，負責統籌規劃與執行部落各項事務。像是在新社部落的男性族人，早期會依照年齡階級進行插秧、除草、收割等農務分工；目前在豐年祭典辦理時，各年齡階級也負責祭典中的各項準備與執行工作；平時則以勞務分工、部落服務為主要精神，除分為老年、青年之外，也加入婦女組。</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
       
      
    );
}

export default Kavalan;