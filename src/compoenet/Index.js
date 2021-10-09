import React from "react";
import '../css/home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = ()=>{
    return (
        <div className="container is-fluid px-0 ">
            <div className="section ">
                <div className="columns ">
                    <div className="column ">
                        <figure class="image">
                            <a href="http://www.twedance.org/"><img src={require('../image/index/map.jpg').default }alt="分布地圖" ></img></a>
                        </figure>
                    </div>
                    <div className="column ">
                        <div className="title has-text-centered">台灣原住民</div>
                        <div>
                            <p className="subtitle "><b>族群</b>：目前官方認定有十六族</p>
                            <p className="subtitle "><b>分佈</b>：多靠近台灣東半部居多</p>
                            <p className="subtitle "><b>語言</b>：屬於南島語係</p>
                            <p className="subtitle "><b>文化</b>：屋架建築、火墾、吃檳榔、紋面、方衣製作、輪舞等文化習俗</p>  
                            <p className="subtitle "><b>定義</b>：指在十七世紀前，中國沿海未移民臺灣前，就住在台灣及周圍的人民</p>
                            <p className="subtitle "><b>祭儀</b>：原住民族相信萬物皆有靈，通常由巫師負責和神靈溝通。其中祖靈被認為最能影響族人的吉凶禍福，原住民族人相信祖靈居住在山上，會保護族人的農作物收穫豐盛，因此最受原住民敬畏</p>                                        
                            <p className="subtitle "><b>聚落</b>:分成三類，第一類與部落組織相一致，如鄒族、阿美族、卑南族；第二是以族人的血緣團體或祭祀團體相一致，如泰雅與布農的若干社；第三類為純地緣型團體，由一部落的若干氏族或小祭祀團結合為一社，如布農與賽夏大多數的社。</p>                                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="section has-text-centered has-background-white-bis ">
                <div className="title pt-3">各族圖騰</div>
                <div className="columns is-mobile ">
                    <div className="column ">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Atayal.png').default } alt="泰雅族" ></img>     
                        </figure>
                        <p className="subtitle">泰雅族</p>
                    </div>
                    <div className="column">
                            <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Pangcah.png').default } alt="阿美族" ></img>
                        </figure>
                        <p className="subtitle">阿美族</p>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Paiwan.png').default } alt="排灣族" ></img>
                        </figure>
                        <p className="subtitle">排灣族</p>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Bunun.png').default } alt="布農族" ></img>
                        </figure> 
                        <p className="subtitle">布農族</p>
                    </div>
                </div>
                <div className="columns is-mobile">
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Puyuma.png').default } alt="卑南族" ></img>
                        </figure>
                        <p className="subtitle">卑南族</p>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Rukai.png').default } alt="魯凱族" ></img>
                        </figure>
                        <p className="subtitle">魯凱族</p>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Tsou.png').default } alt="鄒族" ></img>
                        </figure>
                        <p className="subtitle">鄒族</p>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Saisiyat.png').default } alt="賽夏族" ></img>
                        </figure>
                        <p className="subtitle">賽夏族</p>
                    </div>
            </div>
                <div className="columns is-mobile">
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Yami.png').default } alt="雅美族" ></img>
                        </figure>
                        <p className="subtitle">雅美族</p>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Thao.png').default } alt="邵族" ></img>
                        </figure>
                        <p className="subtitle">邵族</p>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Kavalan.png').default } alt="噶瑪蘭族" ></img>
                        </figure>     
                        <p className="subtitle">噶瑪蘭族</p>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Truku.png').default } alt="太魯閣族" ></img>
                        </figure>                                 
                        <p className="subtitle">太魯閣族</p>
                    </div>
                </div>
                <div className="columns is-mobile">
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Sakizaya.png').default } alt="撒奇萊雅族" ></img>
                        </figure>
                        <p className="subtitle">撒奇萊雅族</p>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Seediq.png').default } alt="賽德克族" ></img>
                        </figure>
                        <p className="subtitle">賽德克族</p>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Hlaalua.png').default } alt="拉阿魯哇族" ></img>
                        </figure>                   
                        <p className="subtitle">拉阿魯哇族</p>
                    </div>
                    <div className="column">
                        <figure class="image is-128x128 image-center">
                            <img src={require('../image/icon/Kanakanavu.png').default } alt="卡那卡那富族" ></img>
                        </figure>                        
                        <p className="subtitle">卡那卡那富族</p>
                    </div>
                </div> 
            </div>                   
            <div className="section ">
                <div className=" has-text-centered title ">
                    原住民文化
                </div>
                <div className="tile is-ancestor">
                    <div className="tile">
                        <div className="tile is-8 is-parent">
                            <div className="tile is-child box ">
                                <figure class="image is-2by1 text-hover">
                                    <img src={require("../image/index/arrow.jpg").default} alt="弓箭"/>
                                    <div className="overlay">
                                        <div className="hover-text">狩獵</div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="tile is-vertical is-parent">
                            <div className="tile is-child box">
                                <figure class="image is-1by1">
                                    <img src={require("../image/index/arms.jpg").default} alt="武器"/>
                                    <div className="overlay">
                                        <div className="hover-text">武器</div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile">
                        <div className="tile is-4 is-parent ">
                            <div className="tile is-child box">
                                <figure class="image 64x64">
                                    <img src={require("../image/index/house.jpg").default} alt="傳統建築"/>
                                    <div className="overlay">
                                        <div className="hover-text">建築-茅草屋</div>
                                    </div>               
                                </figure>
                                <figure class="image 64x64">
                                    <img src={require("../image/index/home.jpg").default} alt="傳統建築"/>
                                    <div className="overlay">
                                        <div className="hover-text">建築-石板屋</div>
                                    </div>               
                                </figure>
                            </div>
                        </div>
                        <div className="tile  is-parent is-4">
                            <div className="tile is-child  ">
                            <figure class="image ">
                                    <img src={require("../image/index/clothing.jpg").default} alt="傳統服裝"/>
                                    <div className="overlay">
                                        <div className="hover-text">各族服裝</div>
                                    </div>               
                                </figure>
                            </div>
                        </div>
                        <div className="tile  is-parent is-4">
                            <div className="tile is-child box">
                                <figure class="image ">
                                    <img src={require("../image/index/song.jpg").default} alt="歌曲"/>
                                    <div className="overlay">
                                        <div className="hover-text">歌曲</div>
                                    </div>               
                                </figure>
                                <figure class="image ">
                                    <img src={require("../image/index/song-2.jpg").default} alt="歌曲"/>
                                    <div className="overlay">
                                        <div className="hover-text">歌曲</div>
                                    </div>               
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile is-ancestor">
                    <div className="tile">
                        <div className="tile is-4 is-parent is-vertical">
                            <div className="tile is-child box">
                                <figure class="image is-1by1">
                                    <img src={require("../image/index/Texture.jpg").default} alt="紋面"/> 
                                    <div className="overlay">
                                        <div className="hover-text">紋面</div>
                                     </div>               
                                </figure>
                            </div>
                        </div>
                        <div className="tile  is-parent">
                            <div className="tile is-child box">
                                <figure class="image is-2by1">
                                    <img src={require("../image/index/sacrifice.jpg").default} alt="慶典"/>
                                    <div className="overlay">
                                        <div className="hover-text">慶典</div>
                                    </div>               
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;