import React, { Component } from 'react';

class LeftMenu extends Component {
  render() {
    return (
      <div className="leftMenu">
        {this.props.folders.map(folder => {
          return (
            <div>
              {folder.name}
            </div>
            )
        })}
        <button type="button">Add Folder</button>
      </div>
    );
  }
}

export default LeftMenu;