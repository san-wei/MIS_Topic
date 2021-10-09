import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Scroll from "../compoenet/Scrooll";
import '../css/home.css';

const Saisiyat = () =>{
    return(
        <div>
            <Header/>
                <div className="container">
                    <div className="section ">
                        <div className="title has-text-centered">
                            賽夏族-簡介
                        <hr className="line"></hr>
                        </div>                           
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <figure className="image image-center " style={{width:"200px"}}>
                                    <img src={require('../image/page-image/Saisiyat/Saisiyat.png').default }alt="泰雅族圖騰"></img>
                                </figure>                                
                            </div>
                            <div className="column 	">
                                <p className="subtitle has-text-justified "> 賽夏族的社會以氏族為基礎，各姓氏從清領時代開始就有不同漢姓，並遵守社會與婚姻規範。賽夏族的信仰與祭典中，以祖靈與矮靈信仰為主，以巴斯達隘矮靈祭典最具知名度。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section">
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
                                        <p className="subtitle has-text-centered">新竹縣境內的賽夏族</p>
                                        <p className="subtitle has-text-justified">居住在五峰鄉上坪溪流域，部落在五峰鄉大隘村與花園村內，部落周圍有不少泰雅族部落，文化上也彼此影響。</p></div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">苗栗縣境內的賽夏族</p>
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
                                <figure class="image is-128x128 image-center">
                                    <img src={require('../image/icon/Atayal.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">巴斯達隘(矮靈祭)</div>
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
                                <p className="subtitle has-text-centered">氏族、姓氏</p>
                                <p className="has-text-justified">賽夏族的社會屬於父系社會，由具有共同父系祖先的家庭組成氏族，是基礎的社會單位，賽夏族共分為18 個氏族，每一個氏族都有自己的名稱，以動植物、自然現象、身體物理等現象來命名。清領時代，賽夏族的氏族制度與漢姓觀念結合，用語音翻譯，或者取其原意選字，共有豆、趙、朱、風、高、潘、錢、根、樟、夏、蟹、日、絲、芎、狐、蟬、獅、血、膜等漢姓，之後蟹改寫為解、狐改為胡、蟬改為詹，當中獅、血、膜三姓人口較少。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">婚姻與家庭</p>
                                <p className="has-text-justified">賽夏族的家庭制度為從夫居的父系制，居住方式為大家庭式，家庭中以男性長輩為尊。婚姻為一夫一妻制度，日本殖民統治時期以前流行交換婚，通婚雙方家庭讓女兒互換為婚配對象，並且重視氏族組織與關係，同氏族、聯族之間不得通婚。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">部落組織</p>
                                <p className="has-text-justified">賽夏族的部落由鄰近村落組成，部落領袖由部落中具有能力、溝通、公正、熱心等特質的族人擔任。部落內的公共事務，則由各氏族長老會議共同討論決定，之後交由部落領袖執行。</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
       
    );
}

export default Saisiyat;