import { useState } from 'react';
import Auth from '../../api/auth';
import { Link } from 'react-router-dom';

function ForgotPassword() {
	const [email, setEmail] = useState('');
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [result, setResult] = useState('');
	const [error, setError] = useState('');
	const [password, setPassword] = useState('');

	async function submit() {
		const data = {
			email: email,
			securityQuestion: question,
			securityAnswer: answer,
		};
		const { response, result } = await Auth.fetchForgotPassword(data);
		if (response.ok) {
			setError('');
			setResult(result.message);
			setPassword(result.temporaryPassword);
		} else {
			setError(result.error);
		}
	}

	return (
		<div
			style={{
				width: 'calc(100% - 250px)',
				marginLeft: '250px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
				backgroundColor: '#d3d3d3', // 연한 푸른색 배경
			}}
		>
			<div
				style={{
					backgroundColor: 'white',
					borderRadius: '8px',
					boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
					padding: '40px',
					width: '400px',
					textAlign: 'center', // 중앙 정렬
				}}
			>
				<h1 style={{ marginBottom: '20px', color: '#002be9' }}>
					비밀번호 찾기
				</h1>
				<input
					type='email'
					placeholder='이메일'
					style={{
						width: '100%',
						padding: '10px',
						margin: '10px 0',
						borderRadius: '4px',
						border: '1px solid #007bff', // 푸른색 테두리
					}}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<select
					id='security-question-select'
					style={{
						width: '100%',
						padding: '10px',
						margin: '10px 0',
						borderRadius: '4px',
						border: '1px solid #007bff', // 푸른색 테두리
					}}
					onChange={(e) => setQuestion(e.target.value)}
				>
					<option value=''>보안 질문을 선택하세요.</option>
					<option value='어렸을 때 가장 친한 친구의 이름은?'>
						어렸을 때 가장 친한 친구의 이름은?
					</option>
					<option value='첫 번째 학교의 이름은?'>첫 번째 학교의 이름은?</option>
					<option value='어릴 때 살던 동네의 이름은?'>
						어릴 때 살던 동네의 이름은?
					</option>
					<option value='어릴 때 살던 동네의 이름은?'>
						어릴 때 살던 동네의 이름은?
					</option>
					<option value='첫 번째 애완동물의 이름은?'>
						첫 번째 애완동물의 이름은?
					</option>
				</select>
				<br />
				<input
					type='text'
					placeholder='정답'
					style={{
						width: '100%',
						padding: '10px',
						margin: '10px 0',
						borderRadius: '4px',
						border: '1px solid #007bff', // 푸른색 테두리
					}}
					onChange={(e) => setAnswer(e.target.value)}
				/>
				<br />
				<button
					style={{
						backgroundColor: '#002be9', // 푸른색 버튼
						color: 'white',
						border: 'none',
						padding: '10px',
						margin: '20px 0',
						borderRadius: '4px',
						cursor: 'pointer',
						width: '100%',
						transition: 'background-color 0.3s',
					}}
					onClick={submit}
				>
					제출하기
				</button>
				<p style={{ color: 'red' }}>{error}</p>
				<p style={{ color: 'green' }}>{result}</p>
				<p>{password}</p>
				<Link to={'../signin'}>로그인으로 돌아가기</Link>
			</div>
		</div>
	);
}

export default ForgotPassword;
