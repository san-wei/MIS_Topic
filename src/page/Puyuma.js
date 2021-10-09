import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer"
import Scroll from "../compoenet/Scrooll";
import '../css/home.css'

const Puyuma = () =>{
    return(
        <div>
            <Header/>
                <div className="container">
                    <div className="section ">
                        <div className="title has-text-centered">
                            卑南族-簡介
                        <hr className="line"></hr>
                        </div>                           
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <figure className="image image-center " style={{width:"200px"}}>
                                    <img src={require('../image/page-image/Puyuma/Puyuma.png').default }alt="泰雅族圖騰"></img>
                                </figure>                                
                            </div>
                            <div className="column 	">
                                <p className="subtitle has-text-justified "> 卑南族位於多族群交會的平原地帶，很早與外界文化接觸，卻依然持續維繫傳統文化與生活。卑南族社會有嚴謹的年齡階級組織與會所制度；巫法之術（靈術）高強興盛，名聲遠播於各民族之間。卑南族現今尚存之年度慶典有「小米鋤草完工慶」、「小米收穫祭」（感恩海祭）、「少年年祭」（猴祭）、「年祭」（大獵祭）等，其中以「年祭」的規模最大。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                    卑南族（Puyuma）自稱「puyuma」，歷史上又有「彪馬」、「漂馬」、「普悠馬」、「普悠馬」等音譯寫法，源自臺東卑南鄉南王部落（Puyuma）的名稱。為避免卑南族與南王部落同語詞的混用情形，近年有族人提倡以「比努優瑪樣」（Pinuyumayan）來作為卑南族新的族稱，以區別族稱與部落名。
                                </p>
                                <p className="subtitle has-text-justified">卑南族的起源有「竹生」、「石生」兩種說法，「竹生」傳說以卑南社為中心，「石生」傳說以知本社為中心；各部落也是由卑南、知本兩社為核心，經遷徙居住後發展出其他各個部落。卑南族十七世紀以前就是強盛的民族，民族威望在卑南王時代達到顛峰；傳說卑南王雄盛之際，曾領導東部各族群72 個部落，影響力北到今花蓮玉里、南到屏東恆春，是各部落尊敬的領袖人物。</p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">卑南族目前分布</p>
                                    </div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-justified">臺東市分布知本、建和、南王、寶桑</p>
                                        <p className="subtitle has-text-justified">卑南鄉分布利嘉、泰安、上賓朗、下賓朗、初鹿、龍過脈、班鳩等</p>
                                        <p className="subtitle has-text-justified">少數居住成功鎮與太麻里鄉</p>
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
                                <div className="subtitle has-text-centered">小米收穫祭</div>
                            </div>
                            <div className="column ">
                                <figure class="image is-128x128 image-center">
                                    <img src={require('../image/icon/Atayal.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">年祭</div>
                            </div>
                        </div>
                    </div>
                    <div className="section ">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered">親屬組織</p>
                                <p className="has-text-justified"> 各家族中擁有共同祖先者，屬於同一宗族；宗族中傳承久遠，並且有家氏的稱為「大宗本家」；由本家分出，自家也有分家者，稱為「小宗本家」；由家中分出尚未有分家者，稱為「分家」。每一宗族中通常只有一個大宗本家，跟十幾個分家。同一祖先的宗族，屬於同一氏族。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">婚姻制度</p>
                                <p className="has-text-justified">卑南族的傳統婚姻制度中，家族氏名與家屋財產由長女繼承，居住方式由男子入居女方家庭，在民族的社會文化分類上，稱為母系社會。目前，傳統從妻居的婚姻方式已經相當少見。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">部落制度</p>
                                <p className="has-text-justified">卑南族部落內傳統政治領袖為ayawan，負責協調部落中的重大事件，並領導部落的獵首與征戰行動。祭司（rahan）掌管祭祀禮儀，由男性擔任，是祭典儀式中的領導人物。祭司必須熟知曆法、氣象與歷史，並且懂得傳統歌謠與舞蹈，作為部落傳統農耕與生活之指引，被認為是博學多聞的賢能之人。巫師（na temaramaw）男女皆有，凡是有疾病者，族人都會請巫師施法、作法，以恢復健康。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">年齡階級</p>
                                <p className="has-text-justified">卑南族的男子，12、13 歲就要進入少年會所集體住宿，開始進行嚴格的訓練，包含體能與知識訓練，時間長達六、七年之久。17、18 歲時，卑南少年由少年會所轉入成年會所，進行更進一步的技能訓練。</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
        
    );
}

export default Puyuma;