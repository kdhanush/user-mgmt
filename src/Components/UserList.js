import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
// import UserLogo from '../UserLogo';
import UserCard from './UserCard/UserCard';

const UserList = () => {
	const [userlist, setUserlist] = useState([]);
	// const [refresh, setRefresh] = useState(false);
	console.log(userlist);
	const colors = [
		'#FF0000',
		'#b7b7b7',
		'#008000',
		'#0000FF',
		'#FF00FF',
		'#000080',
		'#800080',
	];

	let colorRandomizer = ()=>{
		let colIndex = Math.round(Math.random() * ((colors.length-1) - 0));
		return colIndex;
	}

	let gotoAddUser = ()=>{
		let url = window.location.origin.toString()+'/adduser';
		window.open(url,"_self")
	}

	const deleteHandler = async (email) => {
		// console.log(user.email);

		if (window.confirm('Are you sure')) {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			console.warn("start delete..")
			const { data } = await axios.delete(
				`http://3.6.93.159:7853/machstatz/delete_existing_user?email=${email}`,
				config
			);
			let _ = userlist.findIndex(da=>da.email===email);
			console.log("index to delete",_);
			if(_){
				let newUserList = userlist.slice(0);
				newUserList.splice(_,1);
				setUserlist(newUserList);
			}	
			console.log(data);
		}
	};

	const fetch = async () => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.get(
			'http://3.6.93.159:7853/machstatz/get_all_users',
			config
		);
		console.log(data);
		setUserlist(data);
	};

	useEffect(()=>{
		fetch();
		// colorRandomizer();
	}
	,[]
	);

	return (
		<div className='grid-container'>
			{userlist.map((user, i) => (
				<UserCard user={user} key={i} color={colors[colorRandomizer()]} deleteHandler={deleteHandler} />
			))}
			<button style={{position:'fixed',top:'1rem',right:'1rem',padding:'1rem'}} onClick={()=>gotoAddUser()}>
				+ Add User
			</button>
		</div>
	);
};

export default UserList;
