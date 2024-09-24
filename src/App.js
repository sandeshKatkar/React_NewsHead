
import './App.css';
import Navbar from './Components/Navbar';
import React,{Component} from 'react';
import News from './Components/News';


export default class App extends Component{
  render(){
      return(
          <div>
              <Navbar/>
              <h1>Hello this is APP</h1>
              <News/>
          </div>
      )
  }
}
