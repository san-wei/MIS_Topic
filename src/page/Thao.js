import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Scroll from "../compoenet/Scrooll";
import '../css/home.css'

const Thao = () => {
    return (
        <div>
            <Header/>
                <div className="container">
                    <figure className="image is-3by1">
                        <img src={require('../image/page-image/Thao/Thao.jpg').default } alt="Thao"></img>
                    </figure>
                    <div className="section ">
                        <hr className="line"></hr>                          
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <img className="is-256x256 image-center " src={require('../image/page-image/Thao/icon.png').default }alt="邵族圖騰"></img>
                            </div>
                            <div className="column 	">
                                <p className="title has-text-centered">族群簡介</p>
                                <p className="subtitle has-text-justified "> 邵族主要居住在南投縣魚池鄉伊達邵部落和水里鄉大坪林聚落，其中伊達邵部落至今仍然嚴謹地遵循傳統祖靈信仰，傳統祖靈信仰以ulalaluan（祖靈籃）為供奉對象，具體象徵祖靈之存在，並且供奉於各家戶內。邵族的傳統祭祀體系主要分為農曆3 月的播種祭、農曆7 月的狩獵祭及農曆8 月的祖靈祭等重要祭儀。農耕祭儀反應出早期農業生活的節令和族人之生活型態；狩獵祭時，族人會以白鰻造型的麻糬做為祭品，體現出重視狩獵、漁獵的生活文化；一年之中又以農曆8 月份的祖靈祭最為熱鬧莊嚴。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                    邵族的族名Thao，源自日本殖民統治時期，日本學者引用邵語稱呼「人」的「Thao」做為邵族的族名。相傳，邵族祖先原居於嘉南平原一帶，因狩獵過程中進入中央山脈，獵人無意間發現罕見的白鹿，經過數天的追逐而到達現今的Puzi（土亭仔），白鹿即躍入日月潭，邵族祖先因此停留，發現了此地魚類豐富，土地肥沃，是個適合耕作和獵漁的新天地，所以帶來族人在這裡定居下來。日月潭地區的邵族人，以Lalu（舊稱光華島、珠仔嶼）為最高祖靈地，清領時代日月潭周邊地區都稱為「水沙連」，有頭社、水社、猫蘭社、審鹿社、埔社、眉社等社群，合稱為「水沙連六社」
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">邵族獨立</p>
                                        <p className="subtitle has-text-justified">在民族分類上曾經被歸類為鄒族，邵族人爭取以「邵族」作為族名，經過長期的爭取推動後，在民國90 年（2001），政府承認邵族為臺灣的第十個原住民族，獨立稱呼為「邵族」。目前邵族人居住在南投魚池鄉伊達邵部落（日月村）與水里鄉大坪林聚落（頂坎村）等地，也有不少人遷居臺中、臺北等都會區。</p>
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
                                <figure className="image  is-3by2 pic">
                                    <img className="image-center" src={require('../image/page-image/Thao/Byman.png').default }alt="拜鰻祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">拜鰻祭</div>
                            </div>
                            <div className="column">
                                <figure className="image is-3by2 pic">
                                    <img className="image-center" src={require('../image/page-image/Thao/hunting.png').default }alt="狩獵祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">狩獵祭</div>
                            </div>
                            <div className="column ">
                                <figure className="image  is-3by2">
                                    <img className="image-center" src={require('../image/page-image/Thao/spirits.png').default }alt="祖靈祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">祖靈祭</div>
                            </div>
                            <div className="column ">
                                <figure className="image  is-3by2">
                                    <img className="image-center" src={require('../image/page-image/Thao/sowing.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">播種祭</div>
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered">氏族組織</p>
                                <p className="has-text-justified">邵族為父系社會，以氏族為單位與其他氏族通婚，早期以族內氏族通婚為主，近年來與他族通婚的現象逐漸普遍。氏族除了是婚姻單位外，也是邵族的親屬單位，氏族由同樣姓氏者組成，通常為特定祭祀團體成員，在祭典中有不同的角色分工。邵族現在有七個漢族姓氏：袁、石、毛、陳、高、筆（白）、朱（丹），每個漢姓都是從氏族名稱轉變而來。 個氏族，每一個氏族都有自己的名稱，以動植物、自然現象、身體物理等現象來命名。清領時代，賽夏族的氏族制度與漢姓觀念結合，用語音翻譯，或者取其原意選字，共有豆、趙、朱、風、高、潘、錢、根、樟、夏、蟹、日、絲、芎、狐、蟬、獅、血、膜等漢姓，之後蟹改寫為解、狐改為胡、蟬改為詹，當中獅、血、膜三姓人口較少。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">部落組織</p>
                                <p className="has-text-justified">伊達邵部落目前仍保有二位頭人系統，分別為袁氏和石氏之家族，頭人為長嗣世襲製，平時排解族人間的糾紛，並執行部落會議和長老會議所議決的事務，在傳統歲時祭儀時更扮演著主持儀式的重要角色。</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
       
      
    );
}

export default Thao