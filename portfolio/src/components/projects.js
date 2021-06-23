import React from 'react';

const ProjectsSection = () => {
    return (
        <article id='Projects' className='Projects-section'>
            <h2>Projects</h2>
            <div className='Project-List'>
                <div className='main-image-box'>
                    <a href="https://juawito.github.io/golden-hour-g7/" target="_blank">
                        <img src="images/GoldenHour-Snapshots_01.jpg" alt="Golden Hour page" />
                    </a>
                </div>
                <div class="images-box">
                    <a href="https://juawito.github.io/-Weather-Dashboard-W6/" target="_blank"><img src="../images/06-server-side-apis-homework-demo.png" alt="Weather dashboard" /></a>
                    <a href="https://juawito.github.io/Password-Generator-W3/" target="_blank"><img src="../images/pass-gen.png" alt="Password Generator" /></a>
                    <a href="https://juawito.github.io/word-guess-game-w4/" target="_blank"><img src="../images/quiz-home.png" alt="Quiz Game page" /></a>
                </div>
            </div>
        </article>
    )
}

export default ProjectsSection;