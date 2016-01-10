'use strict';

import React from 'react';

class NoteComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			editing: false
		};
	}

  render() {
  	if(this.state.editing) {
  		return this.renderEdit();
  	}

  	return this.renderNote();
  }

  renderEdit() {
  	return <input type="text"
  		autoFocus={true}
  		placeholder={this.props.task}
  		onBlur={this.finishEdit.bind(this)}
  		onKeyPress={this.checkEnter.bind(this)} />;
  }

  renderNote() {
  	return (
      <div onClick={this.edit.bind(this)}>
        <span>{this.props.task}</span>
        {this.renderDelete()}
      </div>
    );
  }

  renderDelete() {
    return <button onClick={this.props.onDelete}>x</button>;
  }

  edit() {
  	this.setState({
  		editing: true
  	});
  }

  checkEnter(e) {
  	if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit(e) {
  	if(this.props.onEdit) {
  		this.props.onEdit(e.target.value);
  	}

  	this.setState({
  		editing: false
  	});
  }

}

NoteComponent.displayName = 'NoteComponent';

// Uncomment properties you need
// NoteComponent.propTypes = {};
// NoteComponent.defaultProps = {};

export default NoteComponent;
