import React, { useState } from 'react';
import styled from 'styled-components';
import { ADMIN_USER_KEY, API_URL } from '../../api/constants';
import useAuth from '../../hooks/useAuth';

// Styled components for design
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

// ResultMessage를 위한 styled-components에서 props를 처리하는 방법 수정
interface ResultMessageProps {
	success: boolean;
}

const ResultMessage = styled.div<ResultMessageProps>`
	margin-top: 10px;
	font-size: 14px;
	color: ${(props) => (props.success ? 'green' : 'red')};
`;

function Signin() {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);
	const [result, setResult] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);
	const { signIn } = useAuth();
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const loginUrl = isAdmin
			? `${API_URL}/api/admin/login`
			: `${API_URL}/api/user/login`;

		const formData = new URLSearchParams();
		formData.append('email', userId);
		formData.append('password', password);
		formData.append('isAdmin', isAdmin.toString());
		console.log(password);
		signIn(loginUrl, formData, isAdmin);
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
					<h1 style={{ marginBottom: '30px' }}>로그인</h1>
					<form id='loginForm' onSubmit={handleSubmit}>
						<Input
							type='email'
							name='userId'
							placeholder='사용자 ID'
							value={userId}
							onChange={(e) => setUserId(e.target.value)}
							required
							autoComplete='username'
						/>
						<br />
						<Input
							type='password'
							name='password'
							placeholder='비밀번호'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							autoComplete='current-password'
						/>
						<br />
						<label>
							<input
								type='checkbox'
								checked={isAdmin}
								onChange={(e) => setIsAdmin(e.target.checked)}
							/>
							관리자 로그인
						</label>
						<br />
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
								marginTop: '15px',
							}}
						>
							로그인
						</button>
					</form>

					{result && <ResultMessage success={success}>{result}</ResultMessage>}

					<button
						id='signupButton'
						style={{
							backgroundColor: 'white',
							color: 'gray',
							border: 'none',
							padding: '10px',
							fontWeight: '600',
							width: '60%',
							borderRadius: '10px',
							cursor: 'pointer',
							marginTop: '15px',
						}}
						onClick={() => (window.location.href = '/createAccount')}
					>
						회원이 아니신가요? 회원가입
					</button>
				</div>
			</Filter>
		</FirstMainDiv>
	);
}

export default Signin;
