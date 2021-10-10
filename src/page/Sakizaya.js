import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Scroll from "../compoenet/Scrooll";
import '../css/home.css'

const Sakizaya = () => {
    return (
        <div>
            <Header/>
                <div className="container">
                    <figure className="image is-3by1">
                        <img src={require('../image/page-image/Sakizaya/Sakizaya.jpg').default } alt="Sakizaya"></img>
                    </figure>
                    <div className="section ">
                        <hr className="line"></hr>                          
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <img className="is-256x256 image-center " src={require('../image/page-image/Sakizaya/icon.png').default }alt="撒奇萊雅族圖騰"></img>
                            </div>
                            <div className="column 	">
                                <p className="title has-text-centered">族群簡介</p>
                                <p className="subtitle has-text-justified "> 撒奇萊雅族的民族歷史與文化當中，以清光緒4 年（1878）年達固部灣事件（加禮宛事件）的影響最大，在民族服裝色彩與火神祭典當中，除了有弔念祖先與歷史事件的意義外，也再次凝聚族人的民族認同。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                    撒奇萊雅族（Sakizaya）的傳說中，祖先由海外遷入東部後落腳花蓮平原，在十七世紀荷蘭、西班牙的紀錄中，就曾經出現過。。十九世紀末期，清朝開始積極經營東部與山區，導致撒奇萊雅與噶瑪蘭族聯合抵禦，在清光緒4 年（1878）發生了稱為「達固部灣事件」（加禮宛事件）的抗清戰爭本次戰爭造成撒奇萊雅族人傷亡、部落遷居、語言與文化隱匿一世紀之久，深刻衝擊撒奇萊雅族人的傳統文化，期間因為多居住在阿美族部落中，與阿美族互動密切，逐漸模糊原有的主體文化。
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">撒奇萊雅族人數較多的部落</p>
                                        <p className="subtitle has-text-justified">有新城北埔、花蓮市國福里、國福社區、美崙、撒固兒、瑞穗馬立雲、壽豐月眉、鳳林山興、壽豐水璉與豐濱磯崎等為主。近年來，因為整體社會經濟發展的變化，也有不少族人遷往大臺北都會區。</p>
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
                                <figure className="image is-3by2 pic">
                                    <img className="image-center" src={require('../image/page-image/Sakizaya/year.png').default }alt="豐年祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">豐年祭</div>
                            </div>
                            <div className="column ">
                                <figure className="image is-3by2 pic">
                                    <img className="image-center" src={require('../image/page-image/Sakizaya/fire.png').default }alt="火神祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">火神祭</div>
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered"> 母系社會</p>
                                <p className="has-text-justified"> 暗紅色上衣與土金色背心，代表婦女延續血脈、保護家園 撒奇萊雅族早期的婚姻以母系婚姻為主，結婚前男子為女方準備好薪材，雙方家長同意後，男方入住女方家。二十世紀的日本殖民統治時期以前，撒奇萊雅族人的婚姻對象以族內通婚為主；日據時期之後，與阿美族人通婚的比例逐漸變高。民國70 年代（1980 年代）之後，因整體社會經濟轉型，族人和其他族群接觸日漸頻繁，與漢族的通婚比例也開始增加。 年代（1980 年代）之後，因整體社會經濟轉型，族人和其他族群接觸日漸頻繁，與漢族的通婚比例也開始增加。 </p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">年齡階級</p>
                                <p className="has-text-justified">撒奇萊雅族的男子，按年齡成長略分為兒童、青年、成年與老年幾個階段，進入青年階段後會成為年齡階級成員，需要負擔防衛、產業與勞動等公眾事務，並且在各項祭典與儀式中扮演重要角色，男子成為年齡階級成員後，按照9 到12 級的年齡階級依序晉升。晉升階級由頭目、長老與青年幹部討論後決定，並於祭祀萬物創造大神Malataw 後確立。撒奇萊雅族的男子年齡階級名稱採用循環使用制度，目前撒固兒（Sakul）、馬立雲（Maibul）、磯崎（Kaluluan）、水璉（Ciwidian）部落仍有年齡階級制度運作。撒奇萊雅族年齡階級制度為八年一階層，從13 足歲至77 足歲以上，都有其階級名稱及意涵。</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
       
      
    );
}

export default Sakizaya