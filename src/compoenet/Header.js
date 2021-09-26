/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../image/text.png"
import { Link } from "react-router-dom";
import '../navbar'
import Slick from "../slick/slick"

const Header = () => {
    return(
        <div className="container is-fullhd">
            <nav className="navbar " role="navigation" aria-label="main navigation">
                <div className="columns is-vcentered">
                    <div className="column is-narrow">                        
                        <div className="navbar-brand ">
                            <Link to="/home">
                                <figure className=" image ">
                                    <img src={logo}></img>
                                </figure>
                            </Link>
                            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"
                                
                                ></span>
                            </a>
                        </div>
                    </div>                        
                    <div className="column is-half ">                    
                        <div className="navbar-menu">
                            <Slick/>                                   
                        </div>
                    </div>
                </div>
            </nav>                
        </div>
    );
}
export default Header;