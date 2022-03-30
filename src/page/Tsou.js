import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer"
import Scroll from "../compoenet/Scrooll";
import '../css/home.css'

const Tsou = () =>{
    return(
        <div>
            <Header/>
                <div className="container">
                    <figure className="image is-3by1">
                        <img src={require('../image/page-image/Tsou/Tsou.jpg').default } alt="Tsou"></img>
                    </figure>
                    <div className="section ">
                        <hr className="line"></hr>                       
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <img className="is-256x256 image-center " src={require('../image/page-image/Tsou/icon.png').default }alt="鄒族圖騰"></img>
                            </div>
                            <div className="column 	">
                                <p className="title has-text-centered">族群簡介</p>
                                <p className="subtitle has-text-justified "> 鄒族居住在臺灣中部中高海拔的阿里山山區，祭典有豐收謝神的小米收穫祭典（homeyaya）與彰顯彪炳戰功的凱旋祭（mayasvi）。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                    鄒族人現今的居住分布以嘉義縣阿里山鄉一帶的山區為主，亦即鄒族以阿里山山區、曾文溪流域與濁水溪上游流域為中心，東方在中央山脈玉山山麓與布農族的勢力範圍接壤，西與嘉南平原的漢族為鄰，南方則與魯凱族比鄰。
                                    鄒族人除了主要分布在阿里山一帶之外，另外還有少數聚落分布在高雄、南投二縣境內，與布農族人混居。阿里山鄉依部落區為分成北三村：來吉、拉拉屋雅、達邦村(包含兩個重要的部落達邦及特富野)；南四村：里佳村、山美村、新美村、茶山村。
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline ">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">北鄒</p>
                                        <p className="subtitle has-text-centered">指的是阿里山曹亞族，（又分為Tapagu-Tufuja群和Lututu群)</p></div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">南鄒</p>
                                        <p className="subtitle has-text-centered">指的是卡那布亞族及沙阿魯阿亞族</p></div>
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
                                    <img className="image-center" src={require('../image/page-image/Tsou/rice.png').default }alt="小米收穫祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">小米收穫祭</div>
                            </div>
                            <div className="column ">
                                <figure className="image  is-3by2 pic">
                                    <img className="image-center" src={require('../image/page-image/Tsou/triumphant.png').default }alt="凱旋祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">戰祭</div>
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered">親族組織</p>
                                <p className="has-text-justified">鄒族傳統上由數個父系家庭組成亞氏族（或稱世系群），具有共同的姓氏、共同耕作、共有河流漁區、共同進行小米祭儀，並且在大社中共同擁有家屋。家屋中有代表亞氏族的象徵性聖物：祭粟食與獸骨架。亞氏族是鄒族親屬關係中最基本單位，血緣相近的亞氏族則合為一個氏族，以最早確立的本支為本家，並以之為名。氏族是一個外婚單位，也就是同氏族族人不准通婚。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">婚姻與家庭</p>
                                <p className="has-text-justified">鄒族為父系家族，子女皆從父居，與父系親族一同生活。婚姻方面，鄒族主要行嫁娶制，婚姻主權在家長。鄒族傳統文化中盛行「服役婚」，就是婚後男方要到女方家中義務幫忙一段時間，服役時間長短不一，有人只需一星期，有人則長達數年，目前這個風俗已不存在。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered"> 大社、小社</p>
                                <p className="has-text-justified"> 鄒族是一個以大社認同為觀念的社會，由一個主要大社為中心，周圍由幾個分支的小社所分布圍繞，共同組成一個「大社」的觀念。大社是最早形成的聚居單位，因耕作關係逐漸在附近形成小社，但在政治、宗教、經濟等各方面仍以大社為核心。大社的政治中心為男子集會所「庫巴」，由部落首長家族管理。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered"> 會所</p>
                                <p className="has-text-justified">鄒族的大社，最重要的象徵就是男子會所，是部落內宗教、政治與經濟活動的中心。會所主要的用途有男子教育、部落會議、征戰集結、祭典訓練、狩獵社交等，是傳承教育、協商集結的場所，也是處理公眾事務的地方。會所不只是部落的象徵，也與年度中的戰祭儀式緊密結合，是鄒族重要的文化象徵。</p>
                            </div>                            
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
         
    );
}

export default Tsou;