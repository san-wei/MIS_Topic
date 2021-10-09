/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Index from "../compoenet/Index"
import Scroll from "../compoenet/Scrooll";
import 'bulma/css/bulma.min.css';

const Home = () => {
    return(
        <div>
            <Header/>
            <Index/>
            <Scroll/>
            <Footer/>            
        </div>
    );
}
export default Home;