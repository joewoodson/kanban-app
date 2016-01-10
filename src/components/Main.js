require('normalize.css');
require('styles/App.css');

import uniqid from 'uniqid';
import React from 'react';
import Notes from './NotesComponent';

class AppComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes:	[
	  		{
	  			id: uniqid(),
	  			task: 'Task 1'
	  		},
	  		{
	  			id: uniqid(),
	  			task: 'Task 2'
	  		}
	  	]
		};
	}

  render() {
    const notes = this.state.notes;

    return (
    	<div>

    		<button onClick={this.addNote.bind(this)}>+</button>
    		<Notes notes={notes} onEdit={this.editNote.bind(this)} onDelete={this.deleteNote.bind(this)} />

    	</div>
    );
  }

  addNote() {
  	this.setState({
  		notes: this.state.notes.concat([{
  			id: uniqid(),
  			task: 'New Task'
  		}])
  	});
  }

  editNote(id, task) {
    const notes = this.state.notes.map((note) => {
      if(note.id === id && task) {
        note.task = task;
      }

      return note;
    });

    this.setState({notes});
  }

  deleteNote(id) {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id)
    })
  }

}

AppComponent.defaultProps = {
};

export default AppComponent;


/////// Example //////////

// require('styles//Card.sass');
// var $ = require('jquery');

// class CardComponent extends React.Component {
// 	constructor() {
// 	  super();
// 	  this.state = {};
// 	 }
//   componentDidMount () {
//   	var component = this;
//   	$.get('http://netrunnerdb.com/api/card/' + this.props.login, function(data) {
//       data = $.parseJSON(data);
//       component.setState(data[0]);
//   	})
//   }
//   render() {
//     return (
//       <div className="card-component">
//         <img src={'http://netrunnerdb.com' + this.state.imagesrc} width="100" />
//         <h3>{this.state.title}</h3>
//         <hr/>
//       </div>
//     );
//   }
// }
