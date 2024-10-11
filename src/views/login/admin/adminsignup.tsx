import React, { useState } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../../constants';

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

function Signup() {
	const [userId, setUserId] = useState('');
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [password, setPassword] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);
	const [idCheckResult, setIdCheckResult] = useState<string | null>(null);

	// 아이디 중복 체크 함수
	const handleCheckId = async () => {
		if (!userId) {
			setIdCheckResult('아이디를 입력해주세요.');
			return;
		}

		try {
			const response = await fetch(`${API_URL}/process/checkid/${userId}`);
			const result = await response.json();
			console.log(result);

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

	// 회원가입 제출 함수
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
			adminId: userId,
			adminName: name,
			adminAge: age,
			password: password,
			isAdmin: isAdmin,
		};
		// 관리자 여부에 따라 URL 결정
		const signupUrl =
			isAdmin === true
				? `${API_URL}/process/adduseroradmin`
				: `${API_URL}/process/adduseroruser`;

		try {
			console.log(isAdmin);
			console.log(signupUrl);
			const response = await fetch(signupUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data), // URLSearchParams 대신 JSON 형식으로 데이터 전송
			});
			console.log(isAdmin);
			console.log(signupUrl);

			const result = await response.json();
			if (response.ok) {
				alert(result.message);
				window.location.href = '/signin';
			} else {
				alert('회원가입 실패: ' + result.message);
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
							<label htmlFor='userId'>아이디:</label> <br />
							<Input
								type='text'
								id='userId'
								value={userId}
								onChange={(e) => setUserId(e.target.value)}
								required
							/>
							<button
								type='button'
								onClick={handleCheckId}
								style={{
									backgroundColor: 'white',
									border: '1px solid gray',
									padding: '5px',
									borderRadius: '15px',
								}}
							>
								아이디 중복 체크
							</button>
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
							/>
						</div>
						<div>
							<label htmlFor='password'>비밀번호:</label>
							<br />
							<Input
								type='password'
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
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

export default Signup;
