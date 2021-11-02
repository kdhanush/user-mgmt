import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './Components/UserList';
import UserAdd from './Components/UserAdd';

function App() {
	return (
		<div className='App'>
			<Router>
				<Route exact path='/' component={UserList} />
				<Route exact path='/adduser' component={UserAdd} />
			</Router>
		</div>
	);
}

export default App;
