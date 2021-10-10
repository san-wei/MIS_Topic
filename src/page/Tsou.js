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
                                    賽夏族人（Saisiyat）在自稱時，使用saisiyat 來稱呼自己，後取其近音而寫為賽夏族。賽夏族的創生傳說中，認為先人在洪水時期時，倖存的兄妹成婚生下小孩，而後將小孩肉、骨、胃、腸分解後投入海中，各別成為各部落與民族的祖先。賽夏族分布在臺灣西北部，以鵝公髻山為界分屬於新竹縣與苗栗縣兩個行政區
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-justified">新竹縣境內的賽夏族</p>
                                        <p className="subtitle has-text-justified">居住在五峰鄉上坪溪流域，部落在五峰鄉大隘村與花園村內，部落周圍有不少泰雅族部落，文化上也彼此影響。</p></div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-justified">苗栗縣境內的賽夏族</p>
                                        <p className="subtitle has-text-justified">居住在中港溪上游的南庄鄉東河、南河流域，以及後龍溪上游獅潭溪流域，部落集中在南庄鄉東河村、蓬萊村、南江村，以及獅潭鄉百壽村等村落內，周圍多為客家漢族社區，生活中吸收不少客族文化。</p></div>
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
                                <p className="has-text-justified">賽夏族的部落由鄰近村落組成，部落領袖由部落中具有能力、溝通、公正、熱心等特質的族人擔任。部落內的公共事務，則由各氏族長老會議共同討論決定，之後交由部落領袖執行。</p>
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