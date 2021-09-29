/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar";

const Header = () => {
    return(
        <div className="container is-max-desktop">
            <nav className="navbar pt-5" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/home">
                        <img src={require("../image/header/logo.jpg").default} alt="logo" />
                    </Link>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu is-justify-content-center">
                    <div className="navbar-end ">
                        <div className="navbar-item has-dropdown is-hoverable"  >
                            <a className="navbar-link">北部</a>
                            <div class="navbar-dropdown">
                                <a className="navbar-item">
                                    <Link to="/atayal">泰雅族</Link> 
                                </a>
                                <a className="navbar-item" >
                                    <Link to="/saisiyat">賽夏族</Link>
                                </a>   
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable" >
                            <a className="navbar-link">中部</a>
                            <div class="navbar-dropdown">
                                <a className="navbar-item" > 
                                    <Link to="/bunun">布農族</Link>
                                </a>
                                <a className="navbar-item" >
                                    <Link to="/thao">邵族</Link>
                                </a>
                                <a className="navbar-item" >
                                    <Link to="/rukai">鄒族</Link>
                                </a>
                                <a className="navbar-item" >
                                    <Link to="/seediq">賽德克族</Link>
                                </a>
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable" >
                            <a className="navbar-link">南部</a>
                            <div class="navbar-dropdown">
                                <a className="navbar-item" >
                                    <Link to="/paiwan">排灣族</Link>
                                </a>
                                <a className="navbar-item" >
                                    <Link to="/rukai">魯凱族</Link>
                                </a>
                                <a className="navbar-item" >
                                    <Link to="/kanakanavu">卡那卡那富族</Link>
                                </a>
                                <a className="navbar-item" >
                                    <Link to="/hlaalua">拉阿魯哇族</Link>
                                </a>
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable" > 
                            <a className="navbar-link">東部</a>
                            <div class="navbar-dropdown">
                                <a className="navbar-item" >
                                    <Link to="/pangcah">阿美族</Link>
                                </a>
                                <a className="navbar-item" >
                                    <Link to="/puyuma">卑南族</Link>
                                </a>
                                <a className="navbar-item" >
                                    <Link to="/kavalan">噶瑪蘭族</Link>
                                </a>
                                <a className="navbar-item" >
                                    <Link to="/truku">太魯閣族</Link>
                                </a>
                                <a className="navbar-item" >
                                    <Link to="/sakizaya">撒奇萊雅族</Link>
                                </a>                                
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable" > 
                            <a className="navbar-link">蘭嶼</a>
                            <div class="navbar-dropdown">
                                <a className="navbar-item" >
                                    <Link to="/yami">雅美族</Link>
                                </a>                                
                            </div>
                        </div>  
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Header;