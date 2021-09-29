import React from "react";
import Logo from '../image/footer/logo-bg.png';

const Footer = ()=>{
    return (
        <div>
            <div className="container is-fluid px-0 ">
                <footer className="footer has-background-dark	 pb-6">
                    <div className="columns  is-vcentered ">
                        <div className="column ">

                        </div>
                        <div className="column  " >
                          <figure className="image is-128x128" >
                                <img src={Logo} alt="logo"/>
                            </figure>
                            <p className="has-text-white ">Copyright © 2021 山之子民</p>                            
                        </div>
                        <div className="column  is-half">
                            <div className="columns">
                                <div className="column">
                                    <figure className=" image is-128x128 " >
                                        <img src={require("../image/footer/font.png").default} alt="designevo" />
                                    </figure> 
                                    <p className="is-size-4 has-text-white">ICON </p>
                                </div>
                                <div className="column">
                                    <figure className=" image is-128x128 " >
                                        <img src={require("../image/footer/designevo.jpg").default} alt="designevo" />
                                    </figure> 
                                    <p className="is-size-4 has-text-white ">LOGO</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};
export default Footer;