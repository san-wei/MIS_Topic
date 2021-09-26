import React from "react";
import Header from "../compoenet/Header";
import Footer from "../compoenet/Footer";
import Scroll from "../compoenet/Scrooll";

const Bunun = () => {
    return (
        <div >
            <Header/>
            <div className="container is-fullhd">
                布農族
            </div>
            <Scroll/>
            <Footer/>              
        </div>
    );
}
export default Bunun;