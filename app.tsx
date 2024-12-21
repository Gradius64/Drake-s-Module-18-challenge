import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { client } from './apolloClient'; // Import your Apollo Client setup
import Home from './components/Home'; // Example component
import SavedBooks from './components/SavedBooks'; // Example component
import Login from './components/Login'; // Example component
import Signup from './components/Signup'; // Example component

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/saved" component={SavedBooks} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
