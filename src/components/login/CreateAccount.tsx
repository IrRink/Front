import React, { useState } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../constants';

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
	const [idCheckResult, setIdCheckResult] = useState<string | null>(null);
	const [isValid, setIsValid] = useState(false);

	// 아이디 중복 체크 함수
	const handleCheckId = async () => {
		if (!email) {
			setIdCheckResult('아이디를 입력해주세요.');
			return;
		}

		try {
			const response = await fetch(
				`${API_URL}/process/checkEmail?email=${email}`
			);
			const result = await response.json();

			if (result.message !== '이미 사용 중인 아이디입니다.') {
				setIdCheckResult('사용 가능한 아이디입니다.');
			} else {
				setIdCheckResult('이미 사용 중인 아이디입니다.');
			}
		} catch (error) {
			console.error('아이디 중복 체크 중 오류 발생:', error);
			setIdCheckResult('아이디 중복 체크 오류 발생.');
		}
	};

	const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
	const emailRegex =
		/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setPassword(value);
		setIsValid(reg.test(value)); // 비밀번호가 변경될 때마다 유효성 검사
	};

	// 회원가입 제출 함수
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!isValid) {
			alert('비밀번호가 올바르지 않습니다.');
			return;
		}
		const data = {
			email: email,
			adminName: name,
			adminAge: age,
			password: password,
			isAdmin: isAdmin,
		};

		const signupUrl =
			isAdmin === true
				? `${API_URL}/process/adduseroradmin`
				: `${API_URL}/process/adduseroruser`;

		try {
			let ageTest = parseInt(age);
			if (ageTest <= 0 || ageTest >= 100) {
				alert('나이가 올바르지 않습니다.');
				return;
			}

			if (!emailRegex.test(email)) {
				alert('이메일 형식이 올바르지 않습니다.');
				return;
			}

			if (!isValid) {
				alert('비밀번호 형식이 올바르지 않습니다.');
				return;
			}

			if (password.includes(' ')) {
				alert('비밀번호에 공백이 포함되어 있습니다.');
				return;
			}

			const response = await fetch(signupUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const result = await response.text();
			if (response.ok) {
				alert(result);
				window.location.href = '/signin';
			} else {
				alert('회원가입 실패: ' + result);
				console.log(data);
			}
		} catch (error) {
			console.error('회원가입 요청 중 오류 발생:', error);
			alert('회원가입 요청 중 오류가 발생했습니다.');
		}
	};

	return (
		<FirstMainDiv>
			<Filter>
				<div style={{ paddingTop: '25vh' }}></div>
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
							/>{' '}
							<br />
							<p style={{ color: isValid ? 'green' : 'red' }}>
								{isValid
									? '비밀번호가 유효합니다.'
									: '비밀번호는 8-15자, 숫자, 특수문자 포함해야 합니다.'}
							</p>
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
