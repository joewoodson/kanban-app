'use strict';

import React from 'react';
import Note from './NoteComponent';

require('styles//Notes.sass');

class NotesComponent extends React.Component {
  render() {
    return (
      <div className="notes-component">
        <ul>{this.props.notes.map((note) =>
    			<li key={note.id}>
    				<Note task={note.task} onEdit={this.props.onEdit.bind(null, note.id)} onDelete={this.props.onDelete.bind(null, note.id)} />
    			</li>
    		)}</ul>
      </div>
    );
  }
}

NotesComponent.displayName = 'NotesComponent';

// Uncomment properties you need
// NotesComponent.propTypes = {};
// NotesComponent.defaultProps = {};

export default NotesComponent;
