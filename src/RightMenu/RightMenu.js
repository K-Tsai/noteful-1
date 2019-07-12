import React, { Component } from 'react';
import './RightMenu.css'
class RightMenu extends Component {
  render() {
    return (
      <div className="mainContent">
      	{this.props.notes.map(note => { 
          return (
            <div className="note-info">
							<p>{note.name}</p>
							<p>{note.modified}</p>
							<button type="button">Delete Note</button>
            </div>
					)
				})}
      </div>
    );
  }
}

export default RightMenu;