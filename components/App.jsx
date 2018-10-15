import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Navbar from './Navbar'; 
import Content from './Content/Content'; 


const App = () => (
  <div className="app">
    <Navbar />
    <Content />
  </div>
);

export default App;
