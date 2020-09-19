import React from 'react';
import Tables from './Tables.js'
import Graphs from './Graphs.js'
import Nav from './Nav.js';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/tables" exact component={Tables}/>
          <Route path="/graphs" exact component={Graphs}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = ()=> (
  <div>
    <h1>COVID Data Visualizer Website</h1>
    <p>Description blah</p>
  </div>
)

export default App;
