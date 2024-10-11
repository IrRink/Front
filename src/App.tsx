import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './views/Main/Main';
import Navber from './components/navbar';
import NotFound from './views/NotFound';
import Adminsign from './views/login/admin/Adminsign';
import Admincreate from './views/login/admin/Adminsignup';
import PostDetail from './views/Main/post/PostDetail';
import Write from './views/Main/post/Write';
import Del from './views/Main/post/Del/Del';

function App() {
	return (
		<Router>
			<Navber />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/*' element={<NotFound />} />
				<Route path='/signin' element={<Adminsign />} />
				<Route path='/createAccount' element={<Admincreate />} />
				<Route path='/post/:num' element={<PostDetail />} />
				<Route path='/write' element={<Write />} />
				<Route path='/Del' element={<Del />} />
			</Routes>
		</Router>
	);
}

export default App;
