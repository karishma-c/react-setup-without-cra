import React, { useState } from "react";
import './App.scss';

const App = () => {

    const [showText, setShowText] = useState(false);

    const showDetails = () => {
        setShowText(!showText);
    }

    return (
        <div className="container">
            <div className="mainContainer">
                <h1 className="mainText">Hi, I am Karishma</h1>
                <h3 className="secondaryText">Frontend Developer</h3>
                <button className="mainButton" onClick={showDetails}>Know more</button>
            </div>
            {
                showText && 
                <div className="detailsContainer">
                    <h1 className="detailsText">Professional Experience</h1>
                    <p className="description">I am currently working as Frontend Developer in Maasika, a health oriented company
                        based in Bangalore. Work I have done so far,
                        <ul className="work">
                           <li>Designed and developed numerous web pages</li>
                           <li>Delivered a Progressive web app for doctors</li>
                           <li>Built a website in wix platform</li>
                           <li>Working in another PWA for patients to make them engage inside and outside the clinic</li>
                        </ul>
                    </p>
                </div>
            }
        </div>
    )
}

export default App;