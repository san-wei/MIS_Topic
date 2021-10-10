import React from "react";


const center = {display:"block", margin:"auto"}
const Footer = ()=>{
    return (
        <div className="has-background-grey-darker	">
            <div className="container is-max-widescreen ">
                <footer className="footer has-background-dark ">
                    <div className="columns  is-vcentered is-mobile is-multiline">
                        <div className="column ">
                            <figure className=" image is-128x128 has-text-center" style={center}>
                                <img src={require("../image/footer/font.png").default} alt="fontAwesome" />
                            </figure>
                            <p className="is-size-4  has-text-centered">
                                <a className="has-text-success " href="https://www.cip.gov.tw/zh-tw/index.html">原住民委員會</a>
                            </p>                   
                        </div>
                        <div className="column ">
                            <figure className=" image is-128x128 "style={center} >
                                <img src={require("../image/footer/new.png").default} alt="賣厝阿明NEWS" />
                            </figure>
                            <p className="is-size-4  has-text-centered">
                                <a className=" has-text-success		 " href="https://54aming.com//">賣厝阿明</a>                            
                            </p>
                        </div>
                        <div className="column ">
                            <figure className=" image is-128x128 "style={center} >
                                <img src={require("../image/footer/vovo.jpg").default} alt="小哈工作坊" />
                            </figure>
                            <p className="is-size-4  has-text-centered">
                                <a className=" has-text-success		 " href="https://vovo2000.com/">小哈工作坊</a>                            
                            </p>
                        </div>
                        <div className="column ">
                            <figure className=" image is-128x128 "style={center} >
                                <img src={require("../image/footer/designevo.jpg").default} alt="designEvo" />
                            </figure>
                            <p className="is-size-4  has-text-centered">
                                <a className=" has-text-success		 " href="https://DesignEvo.com/">DesignEvo</a>                            
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};
export default Footer;