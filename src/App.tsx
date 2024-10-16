import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navber from './components/navbar';
import CreateAccount from './components/login/CreateAccount';
import PostDetail from './components/post/PostDetail';
import Write from './components/post/Write';
import Main from './components/Main';
import NotFound from './components/notFound/NotFound';
import Signin from './components/login/Adminsign';
import Delete from './components/post/Del/Delete';

function App() {
	return (
		<Router>
			<Navber />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/*' element={<NotFound />} />
				<Route path='/signin' element={<Signin />} />
				<Route path='/createAccount' element={<CreateAccount />} />
				<Route path='/post/:num' element={<PostDetail />} />
				<Route path='/write' element={<Write />} />
				<Route path='/Del' element={<Delete />} />
			</Routes>
		</Router>
	);
}

export default App;
