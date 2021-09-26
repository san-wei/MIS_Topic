import React from "react";
import Logo from '../image/logo-bg.png';

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
                        <div className="column has-text-centered is-half">
                            <div className="columns">
                                <div className="column">
                                    <p className="is-size-3 has-text-white">ICON </p>
                                    <p className="pt-2">
                                        <a className="has-text-white has-background-success	px-1 py-1" href="https://react-icons.github.io/react-icons/">React icon</a> 
                                    </p>
                                </div>
                                <div className="column">
                                    <p className="is-size-3 has-text-white">LOGO</p>
                                    <p className="pt-2">
                                        <a className="has-text-white has-background-success	px-1 py-1" href="https://www.designevo.com/tw/">designevo</a> 
                                    </p>  
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