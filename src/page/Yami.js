import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer"
import Scroll from "../compoenet/Scrooll";
import '../css/home.css'

const Yami = () =>{
    return(
        <div>
            <Header/>
                <div className="container">
                    <figure className="image is-3by1">
                        <img src={require('../image/page-image/Yami/Yami.jpg').default } alt="Yami"></img>
                    </figure>
                    <div className="section ">
                        <hr className="line"></hr>                          
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <img className="is-256x256 image-center " src={require('../image/page-image/Yami/icon.png').default }alt="雅美族圖騰"></img>
                            </div>
                            <div className="column 	">
                                <p className="title has-text-centered">族群簡介</p>
                                <p className="subtitle has-text-justified "> 雅美族分布於臺東縣的蘭嶼島上，有豐富的神話傳說與歲時祭儀，並具有明顯的海洋特質。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                    雅美族（Yami）分布在臺東的蘭嶼鄉蘭嶼島。「雅美（yami）」一詞是「我們」的意思，由十九世紀末期人類學家鳥居龍藏開始使用；部分族人在族群名稱上也另外使用「達悟」（tao）一詞，意思為「人」。目前關於蘭嶼的相關研究與報導，分別出現官方採用雅美、民間採用達悟這兩種不同的族稱。
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-justified">蘭嶼居民的遠祖來源有石生與竹生兩種傳說，其中紅頭部落的說法是，南方的神創造了小蘭嶼跟蘭嶼後再回到蘭嶼島時，在山上觸動了巨大的岩石。巨石落入海中後轟然分裂成兩半，男神Nemotacolulito 從裂石中走出，並往山中走去搖撼巨竹，竹中又爆出另一位男神Nemotacoluga wuly。有一天，裂石中走出的男神從左、右腳的膝蓋生出一男一女，由竹子中走出的男神也同樣從膝蓋生出了一男一女，兩神的子女結為夫婦，開始發展出雅美人的社會與文化。</p>
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
                                <figure className="image is-3by2 pic">
                                    <img className="image-center" src={require('../image/page-image/Yami/rice.png').default }alt="小米祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">收穫祭</div>
                            </div>
                            <div className="column ">
                                <figure className="image is-3by2 pic">
                                    <img className="image-center" src={require('../image/page-image/Yami/flyfish.png').default }alt="飛魚祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">飛魚祭</div>
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered">雙邊親戚關係</p>
                                <p className="has-text-justified">傳統雅美族人的親族群體稱為zipus，zipus 成員照顧彼此的家人子女，在婚喪喜慶、建屋造船、墾地伐木、政治結盟與戰爭時互相幫助。zipus以自己父母雙邊等距離展開的親屬關係為主，最親密的是自己的兄弟姊妹及配偶，接著是父母的同胞兄弟姊妹之子女及配偶。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">婚姻與家庭</p>
                                <p className="has-text-justified">雅美族屬於父系家族，父母與未婚子女共同生活。婚姻觀念上為一夫一妻制度，男女戀愛之後，女方搬入男方家同住，經適應後成為穩定關係；結婚的對象過去以部落內的通婚為主，現在除了在部落間通婚比例增加外，與其他原住民族、漢族通婚的比例也提高不少。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">共作組織 </p>
                                <p className="has-text-justified">共作組織在工作上互相幫助、共享資源，是生活中重要的團體。雅美族社會中有漁船、粟作和灌溉三個共同勞動作業組織。隨著時代變遷，傳統的粟作組織已經不存在，漁團組織與灌溉組織也逐漸鬆散，繼之而起的是漁網組織。漁團組織kakavay 是以10 人乘坐的大船為標準單位，並包含8 人、6 人船的漁船組織。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">部落 </p>
                                <p className="has-text-justified">雅美族人稱部落為ili，生活由居住的地緣關係及親屬血緣關係交織而成，並無特定頭目或政治領袖；公共議題由各家族長老們商量討論，在統合眾人意見後決定。目前按照行政編制所設立的村長，則稱為panikudan。</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
       
    );
}

export default Yami;