import React, { Component, Fragment } from 'react';
import './App.css';
import SearchContainer from './containers/SearchContainer';
import RecipeDetails from './components/RecipeDetails'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import RecipeList from './containers/RecipeList';
import NavBar from './components/NavBar';
import Adapter from './components/Adapter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1 className="pageTitle">Gourmand</h1>
        <div id="edamam-badge" data-color="white"></div>
        <br></br>
          <Route exact path="/" component={SearchContainer}/>
          { Adapter.isLoggedIn() ?
            <Fragment>
              <Redirect to="/" />
              <Route exact path="/my_recipes" component={RecipeList}/>
            </Fragment>
            :
              <Fragment>
                <Route exact path="/register" component={(props) => <Register {...props} />} />
                <Route exact path="/login" component={(props) => <Login {...props} />} />
              </Fragment>
          }

      </div>
    );
  }
}

export default App;
