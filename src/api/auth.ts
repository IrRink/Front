import { API_URL } from './constants';
import { FetchForgotEmailRequest } from './dtos/auth/fetch-forgot-email.dto';

class Auth {
	static fetchSignup = async (signupUrl: string, data: any) => {
		let response = await fetch(signupUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		return response;
	};

	static fetchCheckDuplicatedEmail = async (url: string, email: string) => {
		const response = await fetch(`${url}/api/users/checkEmail?email=${email}`);
		const data = await response.json();
		return data;
	};

	static fetchSginIn = async (loginUrl: string, formData: any) => {
		console.log(formData);
		const response = await fetch(loginUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formData.toString(),
		});
		return response;
	};

	static fetchLogOut = async (apiUrl: string) => {
		const response = await fetch(`${apiUrl}/api/users/logout`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		});

		return response;
	};

	static fetchAuthority = async () => {
		const response = await fetch(`${API_URL}/api/info/auth`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		});
		return response;
	};

	static memberDelete = async () => {
		const response = await fetch(`${API_URL}/api/info/auth`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		});
		const data = await response.json();
		if (response.ok) {
			alert(data.message);
			window.location.href = '../signin';
			return;
		} else if (response.status === 400) {
			alert('유효하지 않은 토큰 입니다.');
			window.location.href = './signin';
		} else if (response.status === 403) {
			alert('유효하지 않은 토큰 입니다.');
			window.location.href = './signin';
		} else {
			alert('회원삭제를 실패하였습니다.');
		}
	};

	static fetchChangeAuth = async (data: any) => {
		const response = await fetch(`${API_URL}/api/info/auth`, {
			method: 'PUT',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		if (response.ok) {
			alert('변경되었습니다. 다시 로그인하세요');
			window.location.href = '../signin';
			localStorage.clear();
			return;
		} else {
			return alert('유효한 것을 입력하고 다시 도전하세요.');
		}
	};

	static fetchForgotPassword = async (data: any) => {
		const response = await fetch(`${API_URL}/api/info/auth`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const result = await response.json();
		return {
			response,
			result,
		};
	};

	static fetchForgotEmail = async (data: FetchForgotEmailRequest) => {
		const response = await fetch(`${API_URL}/api/info/forget`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const result = await response.json();
		return {
			response,
			result,
		};
	};
}

export default Auth;

// 객체 interface 써서 any로 되어있는 부분 줄이기,
// 단일 책임 원칙으로 수정하기
