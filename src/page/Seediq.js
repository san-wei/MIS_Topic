import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Scroll from "../compoenet/Scrooll";
import '../css/home.css'

const Seediq = () => {
    return (
        <div>
            <Header/>
                <div className="container">
                    <div className="section ">
                        <div className="title has-text-centered">
                            賽德克族-簡介
                        <hr className="line"></hr>
                        </div>                           
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <figure className="image image-center " style={{width:"200px"}}>
                                    <img src={require('../image/page-image/Seediq/Seediq.png').default }alt="泰雅族圖騰"></img>
                                </figure>                                
                            </div>
                            <div className="column 	">
                                <p className="subtitle has-text-justified "> 賽德克族分布在臺灣中部山區，盛行織布與紋面文化，以祖訓gaya 為生活準則，並重視祖靈的祭祀儀式。</p>   
                                <p className="subtitle has-text-justified ">民國90 年代（2000 年代），賽德克族人基於對德克達雅、都達、德魯固三群共同歷史的認同，以「Sediq Balay、Sejiq Balay、Seediq Bale 賽德克族」為名發起向政府請願的正名運動，並於中華民國97 年（2008）公告認定為臺灣原住民族之一，稱為賽德克</p>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className=" has-text-centered title">地理歷史</div>
                        <hr className="line"></hr>
                        <div className="columns is-align-items-center">
                            <div className="column">
                                <p className="subtitle has-text-justified">
                                    賽德克族發源於中央山脈，是世代口耳相傳的起源地，今被稱之為牡丹岩。賽德克族的祖先從起源地歷經遷徙後，到達德鹿灣（南投縣仁愛鄉合作村內）定居、繁衍。
                                </p>
                                <p className="subtitle has-text-justified">
                                    賽德克族在遷居德克達雅、都達、德魯固三地後，形成三個地區的群體認同，並使用賽德克族都達、賽德克族德克達雅、賽德克族德魯固三語詞來作為群體間的識別。德克達雅、都達、德魯固群系分布如右
                                </p>
                            </div>
                            <div className="column">
                                <div className="columns is-vcentered is-multiline">
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">德克達雅</p>
                                        <p className=" has-text-justified">南投的德克達雅系：分布於仁愛鄉霧社與盧山間的濁水、眉溪流域。日本殖民統治時期因霧社事件，霧社以東者被迫遷至北港溪中游之清流、中原地區（今仁愛鄉互助村），原住眉溪東方深山者，遷居南山溪一帶之溪谷（今仁愛鄉南豐村境）。目前，族人以南投縣仁愛鄉的互助、南豐、大同等村為主要居住地點。花蓮的德克達雅系：分布於花蓮木瓜溪流域。清領時代末期受太魯閣族人勢力擴大影響，遷居花蓮縣壽豐鄉溪口村與萬榮鄉明利村兩地。戰後民國34年（1945）前後，又遷移至秀林鄉的佳民、富世村，部分往南遷居至萬榮鄉的見晴、萬榮村。</p>
                                    </div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">都達</p>
                                        <p className=" has-text-justified">都達（Toda）早期居住南投時，領域範圍以德克達雅北面的平靜山區一帶。十八世紀族人越過合歡山北峰，到達花蓮山區陶賽溪上游、中游，稱為都達（Toda，或寫為道澤、陶賽）。目前，主要分布於南投縣仁愛鄉精英、春陽村，及花蓮縣卓溪鄉立山村、崙山村為居住地。</p>
                                    </div>
                                    <div className="column is-full">
                                        <p className="subtitle has-text-centered">德魯固</p>
                                        <p className=" has-text-justified">德魯固有時寫為太魯閣（Truku），早期居住在南投縣仁愛鄉靜觀一帶，遷居到花蓮後主要以立霧溪流域為範圍。目前德魯固群的分布，南投縣以仁愛的松林、廬山、靜觀部落為主；花蓮縣以秀林、萬榮兩鄉為範圍，部分在卓溪鄉的立山與吉安鄉的慶豐、南華與福興等村。</p>
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
                                <div className="subtitle has-text-centered">播種祭</div>
                            </div>
                            <div className="column ">
                                <figure class="image is-128x128 image-center">
                                    <img src={require('../image/icon/Atayal.png').default }alt="播種祭"></img>
                                </figure>
                                <div className="subtitle has-text-centered">收穫祭</div>
                            </div>
                        </div>
                    </div>
                    <div className="section ">
                        <div className=" has-text-centered title">社會組織</div>
                        <hr className="line"></hr>
                        <div className="columns ">
                            <div className="column">
                                <p className="subtitle has-text-centered">婚姻</p>
                                <p className="has-text-justified">賽德克族屬於父系社會，部落與家庭的工作分工中，除了較粗重的工作與狩獵為男性負擔外，其他部分的事務與工作，並無男、女兩性強制的分工。賽德克族的婚姻為一夫一妻制度，在gaya 的婚姻規範中，禁止同居、婚外情、未婚生子等違反祖訓的行為。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">部落</p>
                                <p className="has-text-justified">組織賽德克族的部落領袖是頭目，由部落推舉聰明、正直的人擔任，負責對外事務的聯繫、協商，對內則是仲裁糾紛、維持部落安寧和諧。賽德克族的部落頭目，若有子承父或弟承兄繼任頭目者，都是部落族人對於前任頭目的認同與信任所致，除了需要相當的能力外，也需要被族人認同，最具代表性的人物是帶領霧社事件的馬赫坡社頭目莫那魯道。</p>
                            </div>
                            <div className="column">
                                <p className="subtitle has-text-centered">祭祀團體</p>
                                <p className="has-text-justified">祖訓是賽德克族文化中重要的行為與社會規範準則，若是違反規則，祖先會降禍族人，所以族人小心謹慎的遵守這些規則，以免危及群體安危。賽德克族的gaya，與太魯閣族的gaya、泰雅族的gaga 相同，是指祖先制訂的制度與規則。若是gaya 的成員破壞規則與禁忌，將會影響整個gaya 團體中的成員，因此其他成員會要求贖罪。</p>
                            </div>
                        </div>
                    </div>
                </div>   
            <Footer/>  
            <Scroll/>         
        </div>
       
      
    );
}

export default Seediq