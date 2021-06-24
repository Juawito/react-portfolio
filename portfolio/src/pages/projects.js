import React from 'react';

import Project1Img from '../images/GoldenHour-Snapshots_01.jpg'
import weatherProjectImg from '../images/06-server-side-apis-homework-demo.png';
import passwordGenImg from '../images/pass-gen.png';
import wordGameImg from '../images/quiz-home.png'
const ProjectsSection = () => {
    return (
        <article id='Projects' className='Projects-section'>
            <h2 className='title'>Projects</h2>
            <div className='Project-List'>
                <div className='main-image-box'>
                    <a href="https://juawito.github.io/golden-hour-g7/" target="_blank" rel='noreferrer'>
                        <img src={Project1Img} alt="Golden Hour page" />
                    </a>
                </div>
                <div className="images-box">
                    <a href="https://juawito.github.io/-Weather-Dashboard-W6/" target="_blank" rel='noreferrer'><img src={weatherProjectImg} alt="Weather dashboard" /></a>
                    <a href="https://juawito.github.io/Password-Generator-W3/" target="_blank" rel='noreferrer'><img src={passwordGenImg} alt="Password Generator" /></a>
                    <a href="https://juawito.github.io/word-guess-game-w4/" target="_blank" rel='noreferrer'><img src={wordGameImg} alt="Quiz Game page" /></a>
                </div>
            </div>
        </article>
    )
}

export default ProjectsSection;