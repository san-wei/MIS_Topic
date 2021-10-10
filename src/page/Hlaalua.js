import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Scroll from "../compoenet/Scrooll";
import '../css/home.css'


const Hlaalua = () => {
    return (
        <div>
            <Header/>
                <div className="container">
                    <figure className="image is-3by1">
                        <img src={require('../image/page-image/Hlaalua/Hlaalua.jpg').default } alt="Hlaalua"></img>
                    </figure>
                    <div className="section ">   
                        <hr className="line"></hr>                            
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <img className="is-256x256 image-center " src={require('../image/page-image/Hlaalua/icon.png').default }alt="拉阿魯哇族圖騰"></img>
                            </div>
                            <div className="column 	">
                                <p className="title has-text-centered">族群簡介</p>
                                <p className="subtitle has-text-justified "> 拉阿魯哇族（Hla’alua）相當注重農耕祭儀，聖貝祭（miatungusu）就是農耕祭儀中，祭祀貝神而衍生出的祭典，貝神也是拉阿魯哇族主要的圖騰象徵。</p>   
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                    拉阿魯哇族（Hla’alua）由排剪（Paiciana）、美壠（Vilanganʉ）、塔蠟（Talicia）、雁爾（Hlihlara）四個社組成，主要聚居在高雄市桃源區高中里、桃源里以及那瑪夏區瑪雅里。拉阿魯哇為自稱，其意不可考。相傳族人原居地在東方Hlasʉnga，曾與矮人共同生活；矮人視「聖貝（takiarʉ）」為太祖（貝神）居住之所，每年舉行大祭以求境內平安、農獵豐收、族人興盛。
                                </p>
                                <p className="subtitle has-text-justified">
                                    拉阿魯哇族據《臺灣方誌》之記載，稱為內憂社或內悠社、美隴社等，在清末漢人合稱之為「頂四社」，日本人沿用其名稱為「上四社」。乃又稱為四社群或上四社群，主要分布由以右四社所組成：
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">排剪社</p>
                                        <p className="subtitle has-text-justified">位於荖濃溪和埔頭溪河流處北側山腳臺地，現為學校所地，社民分布在第一部落、第二部落及草水檢查哨等三部落居住。</p>
                                    </div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">美壠社</p>
                                        <p className="subtitle has-text-justified">位於荖濃溪東岸，塔羅流溪河口對岸臺地，社民散布在荖濃和寶來溪間的廣大流域。近代，部分社民移居那瑪夏瑪雅里居住。</p>
                                    </div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">塔蠟社</p>
                                        <p className="subtitle has-text-justified">位於塔羅留溪北岸山頂，由於交通不便，社民已悉數移到排剪社居住。</p>
                                    </div>                                    
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">雁爾社</p>
                                        <p className="subtitle has-text-justified">位於荖濃溪西岸河階臺地，Kalʉvʉnga 為其部落名，稱為Hlihlala。日本殖民統治時期，族人散居於荖濃溪西岸的可耕地各處，後又回到原址及區公所所在地居住。 </p>
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
                                <figure className="image is-3by2  pic ">
                                    <img className="image-center" src={require('../image/page-image/Hlaalua/rice.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">祭儀</div>
                            </div>
                            <div className="column ">
                                <figure className="image is-3by2  pic">
                                    <img className="image-center" src={require('../image/page-image/Hlaalua/shell.jpg').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">聖貝祭</div>
                            </div>
                        </div>
                    </div>
                    <div className="section has-background-white-bis">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered">政治活動</p>
                                <p className="has-text-justified">就政治單位而言，其執行單位即為部落，拉阿魯哇族稱之為miararuma，是舉行各種傳統祭典的單位。部落的政治權力運作是首長，稱為kapitanʉ 或rahli。此職位為世襲制，由長子繼承，年幼的長子可由氏族長老代為管理，直到長子有能力繼承為止。kapitanʉ 主要的權力在管理聚落事務與裁決族人之糾紛，並有對部落人民發號命令或懲處之權力。但是首領的權力並非絕對的，部落的大事仍要通過長老會議makarikari 商議。在戰爭方面，則是戰爭指揮者maliialualu 的權責，必須經過聚落長老會議來挑選驍勇善戰之士來擔任。而宗教方面，則是聚落祭司ʉlʉvʉ 的能力範圍，由氏族中的長老擇一擔任。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">經濟活動</p>
                                <p className="has-text-justified">拉阿魯哇族的生計方式採取初級農業生產、山田燒墾為主，並以採集工作、捕魚、狩獵、養殖家畜等為輔。特有kiakucua 的共耕制度可分成兩種，其意涵不同。一種是兩家土地相互毗連，在土地交界處採用的共耕方式，以避免爭議。另一種是服役婚所形成的，由女方家指定一塊接近男方家的土地進行共耕。其土地的使用模式，構成了拉阿魯哇族的傳統農耕方式。土地的繼承，是以家的男性為主，若家中無男子可繼承，則歸為氏族所有，讓氏族內有餘力的人繼續耕作。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">傳統親屬組織</p>
                                <p className="has-text-justified">家的概念家是組成社會的的基本單位，拉阿魯哇族稱之為ucani pihlingi。直到父母去世後，兄弟才能分家成立門戶。家屋稱為salia，傳統以茅管編織成壁、茅草蓋屋的茅屋。婚姻實行嚴格的一夫一妻制，以從夫居的嫁娶為主，較無多偶婚或招贅婚。由於布農人與平地人的遷入影響，招贅婚與多偶婚已有採用情形。Hla’alua 人的婚姻除了需經過當事人同意外，還需經過雙方父母同意，並由父母舉行結婚儀式。而女性喪偶後可再嫁，此時必須由先夫的父母來主婚；有時可能會下嫁給先夫的弟弟。婚姻分為三個階段：議婚、訂婚、結婚。</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
       
      
    );
}

export default Hlaalua