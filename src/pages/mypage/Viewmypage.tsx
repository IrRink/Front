import { useEffect, useState } from 'react';
import Auth from '../../api/auth';

function Viewpage() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [password, setPasswrd] = useState('');

	const members = async () => {
		let response = await Auth.fetchAuthority();
		let data = await response.json();
		data = data.user;
		setEmail(data.email);
		setName(data.name);
		setAge(data.age);
		setPasswrd(data.password);
	};

	useEffect(() => {
		members();
	}, []);
	return (
		<div>
			<h1 style={{ marginTop: '80px' }}>마이 프로필</h1>
			<ul>
				<li style={{ marginTop: '20px' }}>{email}</li>
				<li style={{ marginTop: '20px' }}>{name}</li>
				<li style={{ marginTop: '20px' }}>{age}</li>
			</ul>
		</div>
	);
}

export default Viewpage;
