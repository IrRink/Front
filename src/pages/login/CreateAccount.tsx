import React, { useState } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../api/constants';
import useAuth from '../../hooks/useAuth';
import REG from '../../constants/regularExpressions';

// Styled components for maintaining the design
const FirstMainDiv = styled.div`
	width: calc(100% - 250px);
	height: 100vh;
	background-image: url('https://mblogthumb-phinf.pstatic.net/MjAxODExMDFfMjAz/MDAxNTQxMDQyMDY5NTEx.FXtZtQMJrTxA5l4iaugmBbZsZSnqYr2P5mSD88sRGHEg.nCu_eIKCiFggIKRTGDLuENReCuX6JAKJ-P5kpEv-Rqcg.GIF.yellowouk2/1540993780381.GIF?type=w800');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	margin-left: 250px;
`;

const Input = styled.input`
	background-color: white;
	border: 1px solid gray;
	border-radius: 10px;
	font-size: 15px;
	padding: 8px;
	margin-top: 10px;
	margin-bottom: 10px;
	width: 80%;
`;

const Filter = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 2, 18, 0.568);
`;

const CheckButton = styled.button`
	background-color: white;
	border: 1px solid gray;
	padding: 5px;
	border-radius: 15px;
	margin-left: 10px;
	cursor: pointer;
`;

function CreateAccount() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [password, setPassword] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);
	const [idCheckResult, setIdCheckResult] = useState('');
	const [isValid, setIsValid] = useState(false);
	const { signUp, checkDuplicate } = useAuth();
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [recheck, setRecheck] = useState('');
	const [recheckText, setRecheckText] = useState(false);

	function handleRecheckPassword(e: any) {
		const newRecheckValue = e.target.value;
		setRecheck(newRecheckValue);
		setRecheckText(newRecheckValue === password);
	}

	const handleChange = (event: any) => {
		setQuestion(event.target.value);
	};

	const handleCheckId = async () => {
		const result = await checkDuplicate(API_URL as string, email);
		setIdCheckResult(result);
	};

	const handlePasswordChange = (event: any) => {
		const value = event.target.value;
		setPassword(value);
		setIsValid(REG.passwordReg.test(value));
	};

	// 회원가입 제출 함수
	const handleSubmit = async (event: any) => {
		event.preventDefault();

		if (!isValid) {
			alert('비밀번호가 올바르지 않습니다.');
			return;
		}
		const data = await {
			email: email,
			name: name,
			age: age,
			password: password,
			isAdmin: isAdmin,
			securityQuestion: question,
			securityAnswer: answer,
		};
		console.log(data);
		let ageTest = parseInt(age);
		if (ageTest <= 0 || ageTest >= 100) {
			alert('나이가 올바르지 않습니다.');
			return;
		}

		if (recheck !== password) {
			alert('비밀번호가 동일하지 않습니다.');
			return;
		}

		if (answer === '') {
			alert('보안답을 작성해 주세요.');
			return;
		}
		if (question === '') {
			alert('보안 질문을 선택해 주세요.');
			return;
		}

		if (!REG.emailRegex.test(email)) {
			alert('이메일 형식이 올바르지 않습니다.');
			return;
		}

		if (!isValid) {
			alert('비밀번호 형식이 올바르지 않습니다.');
			return;
		}

		if (password.includes(' ')) {
			setIsValid(false);
			alert('비밀번호에 공백이 포함되어 있습니다.');
			return;
		}
		const signupUrl =
			isAdmin === true
				? `${API_URL}/api/admin/signup`
				: `${API_URL}/api/users/signup`;

		signUp(signupUrl, data);
	};
	return (
		<FirstMainDiv>
			<Filter>
				<div style={{ paddingTop: '6vh' }}></div>
				<div
					style={{
						margin: 'auto',
						width: '600px',
						textAlign: 'center',
						backgroundColor: 'white',
						padding: '20px',
						borderRadius: '15px',
					}}
				>
					<h1 style={{ marginBottom: '30px' }}>회원가입</h1>
					<form id='signupForm' onSubmit={handleSubmit}>
						<div>
							<label htmlFor='userId'>E-mail:</label> <br />
							<Input
								type='email'
								id='userId'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								placeholder='E-mail을 입력하세요'
							/>
							<CheckButton type='button' onClick={handleCheckId}>
								아이디 중복 체크
							</CheckButton>
							<div>
								{idCheckResult && (
									<span
										style={{
											color:
												idCheckResult === '사용 가능한 아이디입니다.'
													? 'green'
													: 'red',
										}}
									>
										{idCheckResult}
									</span>
								)}
							</div>
						</div>
						<div>
							<label htmlFor='name'>이름:</label>
							<br />
							<Input
								type='text'
								id='name'
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								placeholder='이름을 입력하세요.'
							/>
						</div>
						<div>
							<label htmlFor='age'>나이:</label>
							<br />
							<Input
								type='number'
								id='age'
								value={age}
								onChange={(e) => setAge(e.target.value)}
								required
								placeholder='나이를 입력하세요'
							/>
						</div>
						<div>
							<label htmlFor='password'>비밀번호:</label>
							<br />
							<Input
								type='password'
								id='password'
								value={password}
								onChange={handlePasswordChange}
								required
								placeholder='비밀번호를 입력하세요. '
							/>

							<br />
							<p style={{ color: isValid ? 'green' : 'red' }}>
								{isValid
									? '비밀번호가 유효합니다.'
									: '비밀번호는 8-15자, 숫자, 특수문자 포함해야 합니다.'}
							</p>
							<br />
							<label htmlFor='password'>비밀번호 재확인:</label>
							<br />
							<Input
								type='password'
								id='password'
								value={recheck}
								onChange={handleRecheckPassword}
								required
								placeholder='비밀번호를 입력하세요. '
							/>
							<p
								style={{
									color: recheckText ? 'green' : 'red',
								}}
							>
								{recheckText
									? '동일한 비밀번호 입니다.'
									: '다른 비밀번호 입니다.'}
							</p>
							<br />
						</div>
						<div style={{ marginTop: '20px' }}>
							<label htmlFor='name'>보안 질문:</label>
							<br />
							<select
								id='security-question-select'
								style={{ marginBottom: '20px' }}
								value={question}
								onChange={handleChange}
							>
								<option value=''>보안 질문을 선택하세요.</option>
								<option value='어렸을 때 가장 친한 친구의 이름은?'>
									어렸을 때 가장 친한 친구의 이름은?
								</option>
								<option value='첫 번째 학교의 이름은?'>
									첫 번째 학교의 이름은?
								</option>
								<option value='어릴 때 살던 동네의 이름은?'>
									어릴 때 살던 동네의 이름은?
								</option>
								<option value='어린 시절 가장 좋아했던 영화는?'>
									어린 시절 가장 좋아했던 영화는?
								</option>
								<option value='첫 번째 애완동물의 이름은?'>
									첫 번째 애완동물의 이름은?
								</option>
							</select>
							<br />
							<label>보안 질문 답</label>
							<br />
							<Input onChange={(e) => setAnswer(e.target.value)} />
						</div>
						<div>
							<label>
								<input
									type='checkbox'
									checked={isAdmin}
									onChange={(e) => setIsAdmin(e.target.checked)}
								/>
								관리자 추가
							</label>
						</div>
						<button
							type='submit'
							style={{
								backgroundColor: '#007bff',
								color: 'white',
								border: 'none',
								padding: '10px',
								fontWeight: '600',
								width: '60%',
								borderRadius: '10px',
							}}
						>
							가입하기
						</button>
					</form>
					<button
						style={{
							backgroundColor: 'white',
							color: 'gray',
							border: 'none',
							padding: '10px',
							fontWeight: '600',
							width: '60%',
							borderRadius: '10px',
							cursor: 'pointer',
						}}
						onClick={() => (window.location.href = '/signin')}
					>
						이미 계정이 있으신가요? 로그인
					</button>
				</div>
			</Filter>
		</FirstMainDiv>
	);
}
export default CreateAccount;
