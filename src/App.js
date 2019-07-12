import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./App.css";
import dummystore from './dummy-store';
import LeftMenu from './LeftMenu/LeftMenu'
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
              Noteful
            </header>
          <div className="mainContainer">
            <LeftMenu 
            folders= {this.state.folders}/>
            <div className="mainContent">
                {this.state.notes.map(note => {
                    return (
                      <div>
                        {note.name}
                      </div>
                    )
                })}
            </div>
            </div>
      </main>
    );
  }
}

export default App;

