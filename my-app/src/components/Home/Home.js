import React from "react"
import "./Home.css"


const Home = () => {

    // Steps needed for 
    /*
        View Datasets
            Annotations & Models exist as objects under Datasets
        


    */


    return (<div className="Base">
        <div className="topnav">
            <h2>SHIELD</h2>
            <button>Home</button>
            <button>Datasets</button>
            <button>Settings</button>
            <button>Profile</button>
        </div>
        <div className="content">
            <h1>Welcome.</h1>
        </div>
        <div className="footer">
            <a>Contact Us</a>
        </div>
    </div>)
}

export default Home