import React from 'react';
// import backImg from './background';


function Content(){


    return(
        <body>
    <header>
        <h1>Eddie Coronado</h1>
        <nav>
            <a href="#about">About Me</a>
            <a href="#contact-info">Contact Me</a>
            <a href="https://www.linkedin.com/in/eddie-coronado-bb7988b3/">Linkedin</a>
            <a href="https://drive.google.com/drive/folders/1B660c80EgMc4swZh7BU5MOBKlFXcpHRD?ths=true">Resume</a>
        </nav>
    </header>

    <div class="backgroudimg">
        <h2>Enjoy my webiste!</h2>
    </div>
    <main class="page-container">
        <div class="sections " id="about">
            <h2>About Me</h2>
            <div>
                <a class="about-me">
                    My name is Eddie Coronado and I am currently working on completing a Full Stack development boot
                    camp!
                    I have learned a lot and I ready to apply it to more real world situations. Please feel free to
                    reach out
                    to me regarding any questions!

                </a>
            </div>
        </div>
        <div class="sections">
            <h2>Work</h2>
            <div class="work-container">

                <a href="https://github.com/Eddie-Coronado/Note-Taker" class="item Note-Tracker">
                    <div>
                        <h3>Note Taker</h3>
                    </div>
                </a>

                <a href="https://github.com/Eddie-Coronado/Weather-Dashboard" class="item Weather-Dashboard">
                    <div>
                        <h3>Weather Dashoboard</h3>
                    </div>
                </a>

                <a href="https://github.com/Eddie-Coronado/Professional_README_Generator"
                    class="item Team-Profile-Generator">
                    <div>
                        <h3>Professional README Generator</h3>
                    </div>
                </a>

                <a href="https://github.com/Eddie-Coronado/Progressive-Budget"
                    class="item Budget-Tracker">
                    <div>
                        <h3>Budget Tracker</h3>
                    </div>
                </a>

                <a href="https://github.com/Eddie-Coronado/Password-Generator"
                    class="item Password-Generator">
                    <div>
                        <h3>Password Generator</h3>
                    </div>
                </a>

                <a href="https://github.com/Eddie-Coronado/Employee-Management-System"
                    class="item Employee-Management-System">
                    <div>
                        <h3>Employee Management System</h3>
                    </div>
                </a>

            </div>
        </div>
        <div class="sections contact-info" id="contact-info">
            <h2>Contact Me</h2>
            <div>
                <address>
                    <a href="tel:+19092281334">909.228.1334</a>
                    <a href="eddiej_coronado@yahoo.com">eddiej_coronado@yahoo.com</a>
                    <a href="https://github.com/Eddie-Coronado">Github</a>
                </address>
            </div>
        </div>
    </main>
</body>
    )
}

export default Content;