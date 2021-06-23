import React from 'react';

import Header from '../components/header';
import AboutSection from '../components/about';
import ContactSection from '../components/contact';
import  ProjectsSection from '../components/projects';

const Home = () => {
    return (
        <div>
            <Header />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    )
}

export default Home;