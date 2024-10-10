import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './views/Main/main';
import Navber from './components/navbar';
import NotFound from './views/NotFound';
import Adminsign from './views/login/admin/adminsign';
import Admincreate from './views/login/admin/adminsignup';
import PostDetail from './views/Main/post/postDetail';
import Write from './views/Main/post/write';
import Del from './views/Main/post/Del/del';

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
