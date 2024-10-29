import { useState } from 'react';
import Auth from '../../api/auth';

function ForgotPassword() {
	const [email, setEmail] = useState('');
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [result, Setresult] = useState('');
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
			Setresult(result.message);
			setPassword(result.temporaryPassword);
		} else {
			setError(result.error);
		}
	}

	return (
		<div style={{ marginLeft: '500px' }}>
			<h1>비번 찾기</h1>
			<input
				type='email'
				placeholder='이메일'
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />
			<select
				id='security-question-select'
				onChange={(e) => setQuestion(e.target.value)}
			>
				<option value=''>보안 질문을 선택하세요.</option>
				<option value='어렸을 때 가장 친한 친구의 이름은?'>
					어렸을 때 가장 친한 친구의 이름은?
				</option>
				<option value='첫 번째 학교의 이름은?'>첫 번째 학교의 이름은?</option>
				<option value='hometown'>어릴 때 살던 동네의 이름은?</option>
				<option value='어릴 때 살던 동네의 이름은?'>
					어린 시절 가장 좋아했던 영화는?
				</option>
				<option value='첫 번째 애완동물의 이름은?'>
					첫 번째 애완동물의 이름은?
				</option>
			</select>
			<br />
			<input
				type='text'
				placeholder='정답'
				onChange={(e) => setAnswer(e.target.value)}
			/>
			<br />
			<button onClick={submit}>제출하기</button>
			<p style={{ color: 'red' }}>{error}</p>
			<p style={{ color: 'green' }}>{result}</p>
			<p>{password}</p>
		</div>
	);
}

export default ForgotPassword;
