import React from 'react';
import GraceShopper from '../images/graceShopper.png';
import artCollection from '../images/artCollection.png';
import whackAMole from '../images/whackAMole.png';
import magic from '../images/magic.jpg';
//update this to Home
const Portfolio = () => {
    //

    return (
        <div id='portfolio'>
            <h1 class="header">Things I've built in no particular order.</h1>
            <div class="flowbox">
                <div class="card white">
                    <h2 className="title">Grace Shopper</h2>
                    <img src={GraceShopper} alt="image" />
                    <p className="body">an Ecommerce platform. Can manage users, items, and categories. </p>
                    <div className="links">
                        <a target="_blank">View webpage (unavailable)</a>
                        <a target="_blank" href="https://github.com/Alec0124/Grace_Shopper">View code</a>
                    </div>
                </div>
                <div class="card white">
                    <h2 className="title">Art Mueseum</h2>
                    <img src={artCollection} alt="image" />
                    <p className="body">An application for searching for historical atrifacts. Mostly demonstrating being able to connect to a API and display the data.</p>
                    <div className="links">
                        <a target="_blank" href="https://mystifying-meitner-1d4c71.netlify.app/">View webpage</a>
                        <a target="_blank" href="https://github.com/Alec0124/harvardArt">View code</a>
                    </div>
                </div>
                <div class="card white">
                    <h2 className="title">Arcade Games</h2>
                    <img src={whackAMole} alt="image" />
                    <p className="body">Collection of arcade games.</p>
                    <div className="links">
                        <a target="_blank" href="https://brave-galileo-a2c678.netlify.app/">View webpage</a>
                        <a target="_blank" href="https://github.com/Alec0124/Arcade">View code</a>
                    </div>
                </div>
                <div class="card white">
                    <h2 className="title">Magic the Gathering</h2>
                    <img src={magic} alt="image" />
                    <p className="body">Magic the gathering application using the public database. Would like to make it a playable game. Work in progress.</p>
                    <div className="links">
                        <a target="_blank" href="https://compassionate-sammet-2105d9.netlify.app/">View webpage</a>
                        <a target="_blank" href="https://github.com/Alec0124/pixleDraw">View code</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;
