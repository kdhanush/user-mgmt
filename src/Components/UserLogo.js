import React from 'react';

const UserLogo = (props) => {
	const {user,color} = props;
	return (
		<div className='user-logo' style={{ backgroundColor: `${color}` }}>
			{user.fist_name.charAt(0).toUpperCase()}
		</div>
	);
};

export default UserLogo;
