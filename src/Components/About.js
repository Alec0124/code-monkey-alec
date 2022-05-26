import React from 'react';
import rollerBlading from '../images/rollerblading.jpeg';
import rockClimbing from '../images/rockClimbing.jpeg';
import reading from '../images/reading.jpeg';
//update this to Home
const About = () => {
    //

    return (
        <div id='about'>
            <h1 class="header">About me</h1>
            {/* <p>
                I entered the work force at 16 working as customer service for the fast food and retail industry until 23.
                I then began work at a promotional products company getting hired as a warehouse team member. Before the first year was up, an opening became available on the fulfillment team, and I was able to fill that position.
                My team leader and I were responsible for handling the customer service for the fulfillment programs as well as data entry relating to the inventory, web site maintenance, and accounting. Having such extensive customer service experience, I pride myself on communication, emotional empathy, patience, critical thinking and problem solving.
            </p> */}
            <p>
                I've been interested in coding since I was thirteen and Warcraft III (a computer game) was released. Warcraft III allows you to create games using the map editor with built in functions that allowed broad customizability. This is where I first learned things like 'If then else' statements, loops, variables, and arrays.
            </p>
            <p>
                I have recently reached a point in my life where I feel as though I need to attempt to make money doing what I love. So I decided to go through the bootcamp training offered by Fullstack Academy. I am hoping this course will propel me into a coding career.
            </p>

            <div class="flowbox">

                <div class="card">
                    <h2>Rollerblading</h2>
                    <img src={rollerBlading} alt="image" />
                    <p>I have had fun rollerblading for as long as I can remember. It was my source of transportation when I was young. Now it is still a great source of excersize and a way for me to spend time with my niece who has also grown to enjoy it.</p>
                </div>

                <div class="card">
                    <h2>Reading</h2>
                    <img src={reading} alt="image" />
                    <p>I have enjoyed many stories, particularly I would read science fiction fantasy stories. I enjoy authros scuh as Robert Jordan, James Patterson, and Stephen King.</p>
                </div>


                <div class="card">
                    <h2>Rock Climbing</h2>
                    <img src={rockClimbing} alt="image" />
                    <p>Rock Climbing is an excellent sport. A great way to keep your body in shape. I should start rock climbing.</p>
                </div>
            </div>
        </div>
    )
};

export default About;