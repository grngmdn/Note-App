import React from 'react';
import Create from './pages/Create';
import Notes from './pages/Notes';
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
