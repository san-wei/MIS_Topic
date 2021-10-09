import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Scroll from "../compoenet/Scrooll";

const Bunun = () => {
    return (
        <div>
            <Header/>
                <div className="container">
                    <div className="section ">
                        <div className="title has-text-centered">
                            布農族-簡介
                        <hr className="line"></hr>
                        </div>                           
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <figure className="image image-center " style={{width:"200px"}}>
                                    <img src={require('../image/page-image/Bunun/Bunun.png').default }alt="泰雅族圖騰"></img>
                                </figure>                                
                            </div>
                            <div className="column 	">
                                <p className="subtitle has-text-justified "> 布農族部落分布在海拔500 至1,500 公尺中央山脈兩側，是原住民族中分布海拔最高的民族，家庭以父系大家庭為基礎，因歷史遷移而慢慢拓展，分布範圍相當遼闊。布農族有精靈（hanitu）的觀念，相信個人能力、疾病與災禍，都跟精靈hanitu 有關係；祭典以射耳祭（malahodaigian）最具代表性，農業祭儀中的「祈禱小米豐收歌」（pasibutbut）音樂造詣享譽國際。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                    布農族的起源有糞生、石生、葫蘆生等多種不同的神話傳說，流傳較為廣泛的有葫蘆生與糞生故事。前者傳說在遠古時代，有一天從天上掉下了一顆葫蘆，裂開之後，從葫蘆裡走出了一對男女，這一對男女的後裔就是現今的布農族人。後者傳說遠古時代有兩個洞穴，Naihai 蟲將糞便做成球的形狀，然後投入兩個洞裡，其中一個洞出現一位男人，另一個洞出現一位女人，兩人成長後結為夫妻，生下子女後繁衍成為各社群祖先
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline ">
                                    <div className="column is-full">
                                        <p className=" subtitle has-text-centered">布農族主要原鄉有:</p>
                                    </div>                                    
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">南投縣仁愛鄉、信義鄉</p>
                                    </div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">花蓮縣卓溪鄉、萬榮鄉</p>
                                    </div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">臺東縣延平鄉、海端鄉</p>
                                    </div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">高雄市桃源區、那瑪夏區</p>
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
                                <div className="subtitle has-text-centered">小米播種祭</div>
                            </div>
                            <div className="column ">
                                <figure class="image is-128x128 image-center">
                                    <img src={require('../image/icon/Atayal.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">射耳祭</div>
                            </div>
                        </div>
                    </div>
                    <div className="section ">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered">親族組織</p>
                                <p className="has-text-justified"> 布農族社會由一個家的概念，形成一個家族，再由數個父系家族組成亞氏族，即氏家族（聯族家族及氏族），彼此之間共有獵場、共同承擔氏族榮辱。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">婚姻與家庭</p>
                                <p className="has-text-justified">布農族屬父系社會，有從父居、父系繼承的性質；家族由兩個世代以上所組成，屬於大家庭的形式，人口常達3、40 人。婚姻制度屬於嫁娶婚，而氏族之間的通婚多由長輩決定，目前異族通婚比例漸高。布農族原有的婚姻制度是非常嚴格的，近年來隨著信仰文化、社會慣習、強勢異文化的衝擊而漸漸崩解。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">部落組織</p>
                                <p className="has-text-justified">布農族由過去以家為單位的散居形式至日本殖民統治時期的集團移住，家中的madadaingaz 長者、mapuadahu 祭司以及is-am-aminan 法師和lavian 戰爭首領等共同維護運作的現象已不復存在。lavian 負責部落對外事務，由部落中有彪炳戰功者擔任，需要有充分的軍事與地理知識，並具有膽識且熟悉攻防技巧，擔負部落、聚落之間的協商、結盟、出草等政治與軍事行為。</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
       
    );
}
export default Bunun;