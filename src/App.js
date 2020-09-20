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
  <div className = "home-container">
    <h1>COVID 🦠 Data 📉 Visualizer</h1>
    <hr className = "dividor"></hr>
    <p className = "home-paragraph">Welcome to COVID 🦠 Data 📉 Visualizer, a site that allows you to stay up-to-date on the latest 
    COVID-19 data by viewing tables and graphs 📊 related to the COVID-19 pandemic across several countries and globally! 🌎 </p>
    <br/>
    <p className = "home-paragraph">Over the past several months, COVID-19 has drastically changed our everyday lives 
    through social distancing. Our bedrooms 🛏 are gradually becoming our home offices, and we spend less time commuting
    🚅 and more time connecting through the Internet 📱.  </p>
    <br/>
    <p className = "home-paragraph">As we continue to struggle through this pandemic, keep yourself updated on the most recent statistics 📈! 
    To get started, click on either the Tables tab or the Graphs tab to view recent data. </p>
    <form action="/tables">
      <input className = "home-button" type = "submit" value = "Tables"/>
    </form>
    <br/>
    <form action="/graphs">
      <input className = "home-button" type = "submit" value = "Graphs"/>
    </form>
    <br/>
    <p className = "home-paragraph">Lastly, our team would like to thank the medical experts 👩🏿‍🔬👨🏽‍🔬🧑🏻‍🔬 and doctors 👩🏽‍⚕️🧑🏼‍⚕️👨🏻‍⚕️ who are working at the front lines around the clock ⏱
    to fight this virus 🧬, take care of patients 🩺, and develop a vaccine 🧪. These men and women are the true heros 🎖 during these times. To 
    help ease the stress these heros face everyday, we should do our part in wearing a mask 😷, social distancing, washing our hands often with 
    soap and water 🧼, and working to flatten the curve 📉. </p>
    <br/>
    <p className = "home-paragraph">Please consider donating to local hospitals 🏥 so that they have the resources they need to help the community 🚑. </p>
  </div>
)

export default App;
