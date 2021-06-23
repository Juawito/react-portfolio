import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import Home from './pages/home';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
            <Route exact path='/'>
                <Home /> 
            </Route>
            </Router>
        </ApolloProvider>
    )
}

export default App;