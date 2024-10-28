import './assets/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetail from './components/post/PostDetail';
import Write from './components/post/Write';
import Main from './pages/Main';
import Delete from './components/post/Del/Delete';
import Update from './components/post/Update';
import UpdateDetail from './components/post/UpdateDetail';
import Inject from './Inject';
import Navber from './components/navbar/navbar';
import NotFound from './pages/notFound/NotFound';
import CreateAccount from './pages/login/CreateAccount';
import Signin from './pages/login/Adminsign';

function App() {
	return (
		<Router>
			<Navber />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/*' element={<NotFound />} />
				<Route path='/signin' element={<Signin />} />
				<Route path='/createAccount' element={<CreateAccount />} />
				<Route path='/post/:id' element={<PostDetail />} />
				<Route path='/write' element={<Write />} />
				<Route path='/Del' element={<Delete />} />
				<Route path='/update' element={<Update />} />
				<Route path='/post/:id' element={<PostDetail />} />
				<Route path='/postdetail/:id' element={<UpdateDetail />} />
				<Route path='/inject' element={<Inject />} />
			</Routes>
		</Router>
	);
}

export default App;
