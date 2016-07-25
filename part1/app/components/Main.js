import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList.js';
import ComponentsAdd from './ComponentsAdd.js';
import firebase from 'firebase';

var config = {
	apiKey: 'jo1wK88NMXuxNS0P4HGy6t4uyWwVNzfioIzr0e0d',
	databaseURL: 'https://user-listn779.firebaseio.com/'
}

firebase.initializeApp(config);

class Component extends React.Component {
	 render() {
		return (
			<div id="main">
				<UserList />
				<ComponentsAdd />
			</div>
		)
	}
}

ReactDOM.render(
	 <Component/>, document.getElementById('app')
)