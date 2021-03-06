import React from 'react';

export default class ComponentsAdd extends React.Component 
{
	_submitForm(evt)
	{
		evt.preventDefault();
		if(this._name.value.length)
		{
			const name = {name: this._name.value}

			firebase.database().ref().child('users').push(name).then(() => {
			this._name.value = ''
		});
		}

	}

	render() 
	{
		return (
				<form id="add" onSubmit={this._submitForm.bind(this)} >
					<hr />
					<input type="text" placeholder="Введите имя..." ref={input => this._name = input} />
					<input type="submit" value="Добавить"/>
				</form>
				)
	}
}