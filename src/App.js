
import './App.css';
import Navbar from './Components/Navbar';
import React,{Component} from 'react';
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route

} from "react-router-dom";
import About from './Components/About';


export default class App extends Component{
  render(){
      return(
        
          <div>
            <Router>
              <Navbar/>
                <Switch>
                  <Route exact  path="/" key='general' element={<News country="us" pagesize={12} category='general'/>}></Route>
                  <Route exact  path="/about" element={<About/>}></Route>
                  <Route exact  path="/business" element={<News key='business'  country="us" pagesize={12} category='business'/>}></Route>
                  <Route exact  path="/entertainment"  element={<News key='entertainment' country="us" pagesize={12} category='entertainment'/>}></Route>
                  <Route exact  path="/health" element={<News key='health' country="us" pagesize={12} category='health'/>}></Route>
                  <Route exact  path="/science"  element={<News key='science' country="us" pagesize={12} category='science'/>}></Route>
                  <Route exact  path="/sports"  element={<News key='sports' country="us" pagesize={12} category='sports'/>}></Route>
                  <Route exact  path="/technology"  element={<News key='technology' country="us" pagesize={12} category='technology'/>}></Route>  
                </Switch> 
            </Router>
          </div> 
      )
  }
}
