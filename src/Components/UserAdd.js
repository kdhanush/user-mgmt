import React, { useState } from 'react';
import axios from 'axios';

const UserAdd = () => {
	const [email, setEmail] = useState('');
	const [fist_name, setFist_name] = useState('');
	const [last_name, setLast_name] = useState('');
	const [pwd, setPwd] = useState('');
	const [username, setUsername] = useState('');

	const sendData = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.post(
			'http://3.6.93.159:7853/machstatz/add_new_user',
			formData,
			config
		);
		console.log(data)
		if (data) {
			alert(data.message);
			let url = window.location.origin.toString()+'/adduser';
			window.open(url,"_self")
		}
	};


	let gotoList = ()=>{
		let url = window.location.origin.toString();
		window.open(url,"_self")
	}

	const formHandler = () => {
		const formData = {
			email: email,
			fist_name,
			last_name,
			pwd,
			username,
		};
		console.log(formData);
		sendData(formData);
	};
	return (
		<div className='master-container'>
			<div className='form-container'>
				<h1>Add User</h1>
				<label>First Name</label>
				<input
					type='text'
					id='fname'
					name='firstname'
					placeholder='Your name..'
					onChange={(e) => setFist_name(e.target.value)}
				/>

				<label >Last Name</label>
				<input
					type='text'
					id='lname'
					name='lastname'
					placeholder='Your last name..'
					onChange={(e) => setLast_name(e.target.value)}
				/>

				<label>Profiles</label>

				<select name='' id='' disabled>
					<option value=''></option>
				</select>

				<label>Username</label>
				<input
					type='text'
					id='username'
					name='lastname'
					placeholder='Your last name..'
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Email Address</label>
				<input
					type='text'
					id='email'
					name='lastname'
					placeholder='Your last name..'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input
					type='text'
					id='password'
					name='lastname'
					placeholder='Your last name..'
					onChange={(e) => setPwd(e.target.value)}
				/>
				<div style={{display:'flex',}}>
				<button className='button' onClick={formHandler}>
					Add
				</button>
				<button className='cancel-button' onClick={gotoList}>
					Cancel
				</button>
				</div>
				
			</div>
		</div>
	);
};

export default UserAdd;
