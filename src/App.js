import React from 'react';
import Create from './pages/Create';
import Notes from './pages/Notes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
