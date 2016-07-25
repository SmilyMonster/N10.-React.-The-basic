import React from 'react';

export default class Users extends React.Component {
		_removeUser(userId)
	{
		if (confirm('Are you sure?'))
			firebase.database().ref().child('users').child(userId).remove();
	}
	render() {
		return (
					<li>
						<p>{this.props.name} 
						<a href="#" onClick={this._removeUser.bind(this, this.props.id)}><i className="fa fa-ban" aria-hidden="true"></i></a>
						</p>
						<hr />
					</li>
			)
	}
}