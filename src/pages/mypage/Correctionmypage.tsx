import { useEffect, useState } from 'react';
import Auth from '../../api/auth';

function Correctionmypage() {
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
			<h1 style={{ marginTop: '80px' }}>내 정보 수정하기</h1>
			<ul>
				<li style={{ marginTop: '20px' }}>
					<label htmlFor='email'>이메일</label>
					<br />
					<input
						id='email'
						type='text'
						defaultValue={email}
						placeholder='이메일'
					/>
				</li>
				<li style={{ marginTop: '20px' }}>
					<label htmlFor='name'>이름</label>
					<br />
					<input id='name' type='text' defaultValue={name} placeholder='이름' />
				</li>
				<li style={{ marginTop: '20px' }}>
					<label htmlFor='age'>나이</label>
					<br />
					<input id='age' type='text' defaultValue={age} placeholder='나이' />
				</li>
				<li style={{ marginTop: '20px' }}>
					<label htmlFor='password'>비밀번호</label>
					<br />
					<input id='password' type='password' placeholder='비밀번호' />
				</li>
			</ul>
		</div>
	);
}

export default Correctionmypage;
