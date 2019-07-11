import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./App.css";
import dummystore from './dummy-store';

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
        <div>
          <div>
            <header>
              Noteful
            </header>
          </div>
          <div className="mainContainer">
            <div className="leftMenu">
                {this.state.folders.map(folder => {
                  return (<div>
                           {folder.name}
                          </div>)
                })}
            </div>
            <div className="mainContent">
                {this.state.notes.map(note => {
                    return (<div>
                        {note.name}
                    </div>)
                })}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;

