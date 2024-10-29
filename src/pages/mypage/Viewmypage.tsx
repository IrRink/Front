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
		if (response.ok) {
			data = data.user;
			setEmail(data.email);
			setName(data.name);
			setAge(data.age);
			setPasswrd(data.password);
		} else {
			alert('현재 유효한 토큰이 없습니다 재 로그인 해주세요.');
			window.location.href = '../signin';
		}
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
