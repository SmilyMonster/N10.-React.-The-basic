import React from 'react';
import User from './User.js';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';

export default class UserList extends React.Component {
	constructor(){
		super();

		this.state={users: []}
	}

	componentDidMount(){
		this.bindAsArray(firebase.database().ref().child('users'), 'users');
	}

	render() {
		const usersCount = this.state.users.length;
		let usersList;
		if (usersCount > 0)
		{
			usersList = <ul> 
								{this.state.users.map((user, index) => 
														{
															return <User key={index} name={user.name} id={user['.key']} />
														})
								}
							</ul>
		}
		return (
			<div>
				{usersList}
				<p id="total">Users in list: {usersCount}</p>
			</div>
		)
	}
}

ReactMixin(UserList.prototype, ReactFireMixin);