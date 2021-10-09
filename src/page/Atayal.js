import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Scroll from "../compoenet/Scrooll";
import '../css/home.css';

const Atayal = () => {
    return (
        <div>
            <Header/>
                <div className="container">
                    <div className="section ">
                        <div className="title has-text-centered">
                            泰雅族-簡介
                        <hr className="line"></hr>
                        </div>                           
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <figure className="image image-center " style={{width:"200px"}}>
                                    <img src={require('../image/page-image/Atayal/Atayal.png').default }alt="泰雅族圖騰"></img>
                                </figure>                                
                            </div>
                            <div className="column 	">
                                <p className="subtitle has-text-justified ">泰雅族社會盛行織布與紋面文化，族人遵守祖先訓示gaga，以祖靈祭為最重要的祭儀活動。近年，因為原住民意識崛起、文化復振運動興起，與原來在民族分類上劃歸泰雅族的太魯閣族與賽德克族，分別在民國93 年（2004）與民國97 年（2008）成為各自獨立的民族。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                    泰雅族分布在臺灣中北部山區，包含新北市、桃園市、新竹縣、苗栗縣、臺中市、南投縣、宜蘭縣等七縣市的山區各鄉鎮，是臺灣原住民族中分布領域最廣的民族。泰雅族族名音譯自「atayal」，意思是人、真人或同族人，
                                    分為賽考列克（Seqoleq）與澤敖列兩群（Tseole）。
                                </p>
                                <p className="subtitle has-text-justified">泰雅族人起源傳說是在遠古時代，由大石頭分裂爆開後走出男、女性的祖先，之後遷徙到各地建立部落。大石頭爆裂的起源地，泰雅族兩個亞群有不同看法，賽考列克群認為在南投仁愛鄉發祥村的瑞岩，又稱為賓斯布干（Piasebukan）；澤敖列群則認為起源地在新竹五峰的大壩尖山（Papakwaqa）</p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">賽考列克群</p>
                                        <p className="subtitle has-text-justified">主要分布在新北市烏來區、桃園市復興區、新竹縣尖石鄉與臺中市和平區。</p></div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">澤敖列群</p>
                                        <p className="subtitle has-text-justified">主要分布於新竹縣五峰、尖石鄉、苗栗縣泰安鄉、臺中市和平區、南投縣仁愛鄉與宜蘭縣的大同、南澳鄉。</p></div>
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
                                <div className="subtitle has-text-centered">播種祭</div>
                            </div>
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
                                <p className="subtitle has-text-centered">婚姻</p>
                                <p>傳統的泰雅族家庭是以父系血緣為中心，從夫居的父系社會，婚姻制度屬於一夫一妻制的嫁娶婚形式，有血緣關係的男、女雙方要在五代之後才可以成為婚嫁對象。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">部落</p>
                                <p>泰雅族社會中，以部落為基本單位，由數個散村部落集中成為集居型村落，傳統的部落是在同一地區內，以血緣親族為基礎，加上以祭祀、狩獵、負罪牲團、勞動等不同功能的組織團體所組成。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">頭目</p>
                                <p>意指領袖，頭目對內處理部落公共事務，對外代表全社與他社間保持聯繫。頭目的承繼與更迭有世襲制與選舉制兩種，世襲制是指部落頭目的繼承，由長子或同一家系之子繼承。選舉制是在頭目因征戰、疾病死亡，或因體弱無法執行任務時，由原來的頭目或長老們在會議中推選決定。</p>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <p className="subtitle has-text-centered">祭祀團體</p>
                                <p>宗教儀式中最重要的團體，範圍包括定期舉行的播種祭、收穫祭，以及不定期舉行的獵頭祭、祈雨祭、祈晴祭、祖靈祭等。祭祀團體由熟悉農耕曆法、祭典儀式的族長領袖主持。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">狩獵團體</p>
                                <p className="has-text-justified">是部落或gaga 中男子所組成的團體，戰爭時則成為戰鬥團體。狩獵團體的行動範圍是部落外的獵區，並且不能越界到別人的獵區，活動一趟常需要數天以上的時間。</p>
                            </div>
                            <div className="column">                                
                                <p className="subtitle has-text-centered">犧牲團體</p>
                                <p className="has-text-justified">犧牲團體，文獻上稱為牲團，是同一血緣親族共同飲食的意思，也就是共同分肉的團體。犧牲團體按照功能與性質可分為贖罪牲團與共食牲團兩種，贖罪牲團與宗教儀禮有關，同一血族中若發生違反gaga 的竊盜、通姦等情事時，必須出面認罪，避免觸怒神靈而導致災禍發生。認罪時需進行贖罪儀式。</p>
                            </div>
                            <div className="column">                                
                                <p className="subtitle has-text-centered">勞動團體</p>
                                <p className="has-text-justified">勞動團體又稱為共勞團體，是一個或一群人相互交換工作，有共同合作勞動的意思。勞動團體的工作並無一定組織與固定成員，主要考量勞動目標、工作量與成員居住地點等，通常以部落內的血緣親屬，以及姻親親屬為主要對象。</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
    
    );
}

export default Atayal