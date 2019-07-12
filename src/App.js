import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./App.css";
import dummystore from './dummy-store';
import LeftMenu from './LeftMenu/LeftMenu'
import RightMenu from './RightMenu/RightMenu'
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      folders : [],
      notes : []
    }
  }

  componentDidMount(){
    this.setState({
      folders : dummystore.folders,
      notes : dummystore.notes
    });
  }


  render() {
    return (
    <main className='App'>
      <header>
       <Link to='/'>Noteful</Link> 
      </header>
    	<div className="mainContainer">
        <LeftMenu folders= {this.state.folders}/>
        <RightMenu notes= {this.state.notes}/>
      </div>
      </main>
    );
  }
}

export default App;

