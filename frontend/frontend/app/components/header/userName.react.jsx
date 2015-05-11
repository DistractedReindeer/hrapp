'use strict';

/** @jsx React.DOM */

var React  = require('react');

var DropdownButton = require('react-bootstrap').DropdownButton,
    MenuItem       = require('react-bootstrap').MenuItem;

var appActions = require('../../actions/appActions');

var UserName = React.createClass({

  render: function() {
    var username  = this.props.user.username || false;
    return(
      <DropdownButton title={username}>
        <MenuItem eventKey='logout' onClick={this._onUserDropDownClick.bind(this,'logout')} header={true} className='b-menu-item'>
          <span>Log Out</span>
        </MenuItem>
        <MenuItem eventKey='myLinks' onClick={this._onUserDropDownClick.bind(this,'myLinks')} header={true} className='b-menu-item'>
          <span>My Links</span>
        </MenuItem>
      </DropdownButton>
    );
  },

  _onUserDropDownClick: function(eventKey){
    // debugger;
    switch(eventKey) {
      case 'logout':
        appActions.logout();
        break;
      case 'myLinks':
        appActions.myLink();
        break;
      default: break;
    }
  }
});

module.exports = UserName;
