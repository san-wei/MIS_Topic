import React from "react";


const center = {display:"block", margin:"auto"}
const Footer = ()=>{
    return (
        <div className="has-background-grey-darker	">
            <div className="container is-max-widescreen ">
                <footer className="footer has-background-dark ">
                    <div className="columns  is-vcentered ">
                        <div className="column " >
                            <figure className="image is-128x128" style={center}>
                                <img src={require("../image/footer/logo-bg.png").default} alt="logo"/>
                            </figure>
                            <p className=" is-size-4 has-text-white has-text-centered">Copyright © 山之子民</p> 
                        </div>
                        <div className="column">
                            <figure className=" image is-128x128 has-text-center" style={center}>
                                <img src={require("../image/footer/font.png").default} alt="fontAwesome" />
                            </figure>
                            <p className="is-size-4  has-text-centered">
                                <a className="has-text-success " href="https://www.cip.gov.tw/zh-tw/index.html">原住民委員會</a>
                            </p>                   
                        </div>
                        <div className="column">
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