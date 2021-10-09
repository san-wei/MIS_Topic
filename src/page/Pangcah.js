import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Scroll from "../compoenet/Scrooll";
import '../css/home.css'

const Pangcah = () =>{
    return (
        <div>
            <Header/>
                <div className="container">
                    <div className="section ">
                        <div className="title has-text-centered">
                            阿美族-簡介
                        <hr className="line"></hr>
                        </div>                           
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <figure className="image image-center " style={{width:"200px"}}>
                                    <img src={require('../image/page-image/Pangcah/Pangcah.png').default }alt="泰雅族圖騰"></img>
                                </figure>                                
                            </div>
                            <div className="column 	">
                                <p className="subtitle has-text-justified "> 阿美族人群聚而居，部落規模大、人口多，祭典活動特別盛大，以每年的豐年祭典最具代表性。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                    阿美族自稱為「pangcah」（邦查），含有「人」、「同族人」的意思，臺東的阿美族人多數住在卑南族的北邊，被卑南族人稱為「Amis」，有北方人、北方民族的意思，後來受到學術界的採用與傳播，成為廣為人知的族群名稱。阿美族的起源神話中，有「創生神話」以及「發祥傳說」兩大類別系統；北部阿美族人傳說祖先是由神降生而來，南部阿美族人認為祖先是由石頭誕生而來。
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">北部阿美(南勢阿美)</p>
                                        <p className=" has-text-justified">南勢阿美族是阿美族群中最北的一群，與太魯閣族群的葛瑪蘭族相鄰，居住在現在的花蓮縣新城鄉、花蓮市、吉安鄉、壽豐鄉。 </p>
                                    </div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">中部阿美(秀姑巒阿美與海岸阿美)</p>
                                        <p className=" has-text-justified">秀姑巒阿美族群與太魯閣族、布農族、平埔族為鄰，居住在現今的花蓮縣鳳林鎮、光復鄉、瑞穗鄉、玉里鎮、富里鄉等等。海岸阿美族居住在東海岸山脈的海階平原上，與北邊葛瑪蘭族相處融洽，與外族較少接觸，居住在現今花蓮縣豐濱鄉、台東縣的長濱鄉、成功鎮等等。</p>
                                    </div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">南部阿美(臺東阿美與恆春半島的阿美族)</p>
                                        <p className=" has-text-justified">台東阿美族群居住在東海岸的南端以及現今的台東縣東河鄉、卑南鄉、太麻里鄉及台東市等地，鄰近卑南族、布農族、排灣族、魯凱族等等。恆春阿美族因為曾經居住在恆春而得名，是所有阿美族群中最南的一群，後來大部分遷居到現在的台東縣池上鄉、鹿野鄉、關山鎮等等，現在僅存屏東旭海附近還有部份居民。</p>
                                    </div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">都市阿美(到都市謀生)</p>
                                        <p className=" has-text-justified">因為到都市謀生活的阿美族人越來越多，所以逐漸形成了許多都市阿美族群，例如台北的汐止鎮、高雄地區的草衙，以及台中、桃園地區都有他們的蹤跡。</p>
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
                                <div className="subtitle has-text-centered">豐年祭</div>
                            </div>
                            <div className="column ">
                                <figure class="image is-128x128 image-center">
                                    <img src={require('../image/icon/Atayal.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">漁撈祭</div>
                            </div>
                        </div>
                    </div>
                    <div className="section ">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered">母系</p>
                                <p className="has-text-justified">母系婚姻制度，主要特色為從妻居，以及財產與家系繼承為母女相傳兩項。阿美族傳統婚姻女性扮演著重要的角色，婚前男性前往女性家中義務工作數月至數年，婚後男性跟隨妻子居住。 個氏族，每一個氏族都有自己的名稱，以動植物、自然現象、身體物理等現象來命名。清領時代，賽夏族的氏族制度與漢姓觀念結合，用語音翻譯，或者取其原意選字，共有豆、趙、朱、風、高、潘、錢、根、樟、夏、蟹、日、絲、芎、狐、蟬、獅、血、膜等漢姓，之後蟹改寫為解、狐改為胡、蟬改為詹，當中獅、血、膜三姓人口較少。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">領袖制度</p>
                                <p className="has-text-justified">阿美族最高領袖是大頭目，透過選賢與能制度，由地方領袖、男子年齡階級與司祭家代表在會議中選出。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">年齡階級</p>
                                <p className="has-text-justified">阿美族的部落男子按照年齡分為各種不同階級，負責統籌規劃與執行部落的各項事務。
                                                                  阿美族部落的男子在13、14 歲時，進入集會所（sfi）接受各類知識、勞務、軍事學習與訓練，訓練時以2 至5 歲為一個年齡層級，共同居住生活與學習，並按照不同年齡層分擔不同類別的部落任務。</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
       
    );
}
export default Pangcah;