import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import Home from './pages/home';
import Intro from './components/intro/intro';
import AboutSection from './pages/about';
import ContactSection from './pages/contact';
import ProjectsSection from './pages/projects';
import Header from './components/header'
import Footer from './components/footer';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Header />
            <Route exact path='/'>
                <Home /> 
             
            </Route>
            <Route exact path='/about'>
                <AboutSection />
            </Route>
            <Route exact path='/projects'>
                <ProjectsSection />
            </Route>
            <Route exact path='/contact'>
                < ContactSection />
            </Route>
            <Footer /> 
            </Router>
        </ApolloProvider>
    )
}

export default App;