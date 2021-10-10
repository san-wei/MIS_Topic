import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Scroll from "../compoenet/Scrooll";
import '../css/home.css'

const Kanakanavu = () => {
    return (
        <div>
            <Header/>
                <div className="container">
                    <figure className="image is-3by1">
                        <img src={require('../image/page-image/Kanakanavu/Kanakanavu.jpg').default } alt="Kanakanavu"></img>
                    </figure>
                    <div className="section "> 
                        <hr className="line"></hr>                          
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <img className="is-256x256 image-center " src={require('../image/page-image/Kanakanavu/icon.png').default }alt="卡那卡那富族圖騰"></img>
                            </div>
                            <div className="column 	">
                                <p className="title has-text-centered">族群簡介</p>
                                <p className="subtitle has-text-justified "> 卡那卡那富族、拉阿魯哇族與嘉義縣的阿里山鄉、南投縣信義鄉久美社區的鄒族人，有很長的一段時間被統稱為「鄒族」，之後因語言差異甚大，完全無法以族語溝通，且三個族群各自有自己的歷史想像、起源傳說、祭典儀式及傳統的社會結構，經卡、拉兩族的申請「正名」，政府於103 年6 月26 日以正式的儀式宣布，認定各為獨立的族群。拉阿魯哇族為第15 族，卡那卡那富族為第16 族。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                    有些族群以「人」的族語詞彙來自稱，如鄒族的「Cou」，布農族的「Bunun」，之後成為該族的族名。卡那卡那富族稱「人」為「cau」，但自稱為Kanakanavu，此名稱的由來為何之前未曾留下任何紀錄或口傳。
                                </p>
                                <p className="subtitle has-text-justified">遷徙的傳說，日本殖民統治時期留下的紀錄：「卡那卡那富族人之故地為荖濃溪的遙遠東方之Nacʉnga 其地，就是Patukuana（關山）方向之東方之土
                                   卡族耆老的口述中，也常提起源自「太陽出現的那個方向」，即與東方之說有不謀而合之處。不過近代的族人也有主張源自臺南地區的說法，即「西來之說」
                                   兩個遷徙路線均曾發生，只是發生的先後有所不同。相同的是，兩個不同的路線，族人最後都抵Naturuca（現今之那支蘭溪）周邊，也就是在Na’usurana（現今之藤苞山）建立最初的聚落。
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-justified">關於卡族人的發祥根源，有一則傳說紀錄：「有一名為Niun 的母親，與其子Parumaci 相依為命，日子過得艱苦又孤單，其母因而常在兒子面前長吁短嘆，哀嘆人世間的滄桑！ Parumaci 安慰母親未來必讓其有安樂的生活。話未說完就突然站起，一腳踢向長滿紅葉的karu sʉrʉ（枷檀樹）樹幹，樹葉盡落，紛紛相疊，瞬間疊成了一棟棟的房子。再度一踢，落葉悉數成了人，其數不知幾百。Parumaci 成了他們的首領，自此形成了一個聚落的社」。此一紀錄是唯一與卡族發祥有關的傳說。</p>
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
                                    <img className="image-center" src={require('../image/page-image/Kanakanavu/rice.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">米貢祭</div>
                            </div>
                            <div className="column ">
                                <figure className="image is-3by2 pic">
                                    <img className="image-center" src={require('../image/page-image/Kanakanavu/river.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">河祭</div>
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered">階層</p>
                                <p className="has-text-justified"> 傳說卡那卡那富族曾經有過世襲的Ra’ani 領袖、Kara’ani 副領袖、Vasʉ 征帥、’Ʉrʉvʉ 祭司各一位。族群最高的政權機關與立法機關，為由Mamarurang長老群組成的「長老會議」</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">marangʉ</p>
                                <p className="has-text-justified">在卡那卡那富族的社會中，每一個家庭都有主掌之人稱為marangʉ（家長）。傳統上家長一律由男性擔任，即所謂的父系氏族。部落事務以體力來分工，粗重危險由男性擔任、家務和製作服飾則為女性工作，農事男女皆可執行。卡那卡那富族是由數個地位平行的家族所構成的一個族</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
       
      
    );
}

export default Kanakanavu