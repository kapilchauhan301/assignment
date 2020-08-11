import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import Dashboard from './containers/dashboard';
import store from './store';
import './App.css';
class App extends React.Component{
  constructor() {
    super();
    
    this.state = {
      counter: 0
    }
  }
  //
  render() {
    return(
      <Provider store={store}>
        <div className="mainwrapper">
          <Router>
            <Route exact path="/" component={Dashboard} />
          </Router>
        </div>
      </Provider>
    )
  }
}


export default App;
