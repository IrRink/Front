import { useEffect, useState } from 'react';
import Auth from '../../api/auth';

function Correctionmypage() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [age, setAge] = useState<number | undefined>(undefined);
	const [password, setPassword] = useState('');

	const members = async () => {
		let response = await Auth.fetchAuthority();
		if (response.ok) {
			let data = await response.json();
			data = data.user;
			setEmail(data.email);
			setName(data.name);
			setAge(parseInt(data.age));
		} else {
			alert('토큰이 만료되었습니다.');
			window.location.href = '../signin';
		}
	};

	useEffect(() => {
		members();
	}, []);

	async function submit() {
		const data = {
			email: email,
			name: name,
			age: age,
			password: password,
		};

		const result = await Auth.fetchChangeAuth(data);
		alert(result);
	}
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
						onChange={(e) => setEmail(e.target.value)}
					/>
				</li>
				<li style={{ marginTop: '20px' }}>
					<label htmlFor='name'>이름</label>
					<br />
					<input
						id='name'
						type='text'
						defaultValue={name}
						placeholder='이름'
						onChange={(e) => setName(e.target.value)}
					/>
				</li>
				<li style={{ marginTop: '20px' }}>
					<label htmlFor='age'>나이</label>
					<br />
					<input
						id='age'
						type='number'
						defaultValue={age}
						placeholder='나이'
						onChange={(e) => setAge(Number(e.target.value))}
					/>
				</li>
				<li style={{ marginTop: '20px' }}>
					<label htmlFor='password'>비밀번호</label>
					<br />
					<input
						id='password'
						type='password'
						placeholder='비밀번호'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</li>
				<button onClick={submit}>제출</button>
			</ul>
		</div>
	);
}

export default Correctionmypage;
