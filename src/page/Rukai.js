import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer"
import Scroll from "../compoenet/Scrooll";
import '../css/home.css'

const Rukai = () =>{
    return(
        <div>
            <Header/>
                <div className="container">
                    <div className="section ">
                        <div className="title has-text-centered">
                            魯凱族-簡介
                        <hr className="line"></hr>
                        </div>                           
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <figure className="image image-center " style={{width:"200px"}}>
                                    <img src={require('../image/page-image/Rukai/Rukai.png').default }alt="泰雅族圖騰"></img>
                                </figure>                                
                            </div>
                            <div className="column 	">
                                <p className="subtitle has-text-justified "> 魯凱族社會的特色為任務分工縝密的階級制度，融入婚姻、政治、宗教、祭祀與藝術各領域。以百合花為「魯凱族族花」，文化核心價值以百合花的配飾權最富特色，具有表彰聖潔、膽識、勇氣與尊榮的意義，經濟生活以小米種植為主體，小米收穫祭為最重要的祭典。</p>   
                                <p className="subtitle has-text-justified ">士族階級的傳承受到長男繼嗣制度影響，只有長子能夠繼承為士族階級，其餘為平民。平民在進行各項工作前，像是砍木材、結婚、過路、釀酒等，都需要支付部分稅收給頭目。而平民在進行特定儀式與繳交特定稅賦後，也能夠獲得特殊權利，像是身上刺紋圖案使用、百合花裝飾權、服裝圖案裝飾使用及部分人名使用等權利。</p>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column ">
                                <p className="subtitle has-text-centered">東魯凱群</p>
                                <p className="subtitle has-text-justified">位於臺東卑南大南溪上游，部落有臺東縣卑南鄉東興新村。</p>
                            </div>
                            <div className="column ">
                                <p className="subtitle has-text-centered">西魯凱群</p>
                                <p className="subtitle has-text-justified">居住在屏東霧臺隘寮溪流域，屏東縣霧臺鄉境內包括：好茶、阿禮、吉露、霧臺、神山、大武、佳暮、谷川八個部落，部分遷居三地門鄉青葉、德文、瑪家鄉三和美園與臺東縣金鋒鄉等部落</p>
                            </div>
                            <div className="column ">
                                <p className="subtitle has-text-centered">下三社</p>
                                <p className="subtitle has-text-justified">在高雄茂林濁口溪流域，部落有高雄市茂林區多納、萬山與茂林。近年，魯凱族人基於工作與就學等因素，實際居住在原鄉的人口只佔總人數的一半，約有一半的族人離開原鄉至都會工作，像是距離高雄、屏東都會區比較近的屏東縣市、高雄市，以及臺中市、新北市等地，形成親屬或地緣性的聚居。</p>
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
                                <div className="subtitle has-text-centered">盪鞦韆</div>
                            </div>
                            <div className="column ">
                                <figure class="image is-128x128 image-center">
                                    <img src={require('../image/icon/Atayal.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered"> 小米收穫祭</div>
                            </div>
                            <div className="column ">
                                <figure class="image is-128x128 image-center">
                                    <img src={require('../image/icon/Atayal.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered"> 黑米祭</div>
                            </div>
                            <div className="column ">
                                <figure class="image is-128x128 image-center">
                                    <img src={require('../image/icon/Atayal.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered"> 萬山祖靈祭</div>
                            </div>
                        </div>
                    </div>
                    <div className="section ">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered">家庭與婚姻</p>
                                <p className="has-text-justified">家庭是魯凱族最重要的親族單位，魯凱族家庭採用偏向於長男繼承的雙系繼承法則，由家中長男繼承家屋、家名，其餘子女婚後必須遷出，若是家中無男性則由女性招贅繼承。婚姻方面以一夫一妻制的嫁娶婚姻為主，擇偶對象務求門當戶對，首先考慮階級身分，以雙方階級相同的「同級婚」最為族人所接受。 </p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">部落與頭目</p>
                                <p className="has-text-justified">部落為地域性組織，由單一聚落或數個鄰近聚落組成，兼有政治、經濟、軍事、教育、社福等功能。魯凱族的部落以當家頭目為傳統世襲的領袖，並包含各種專業的長老士族，像頭目報信代言人（marudrange）、家族代表、軍事戰略家、工藝匠師、分享操刀手（siabakale）、占卜祈福（taraivigi）與禮儀祭師（bariakalai）等，以不同專長領域來支援部落的各項需求。雖然，頭目具有相當大的權利，但公眾事務仍然會透過部落會議討論後執行</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">階級制度</p>
                                <p className="has-text-justified">魯凱族的階級社會分為頭目、貴族、士族、平民四個階級，每個階級所能享受的權利不同。頭目與貴族社會地位較高，也擁有較多土地資源，有向族人徵收土地、山林稅收，以及身體刺紋圖騰、家屋雕刻的權利。士族階級介於貴族與平民間，是具有優異功績或者特殊才能的村民，擁有頭目給予的特殊權利，像是免稅、戴花環等。</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
        
    );
}

export default Rukai;