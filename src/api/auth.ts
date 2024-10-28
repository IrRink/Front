// export const fetchSignUp = async (url: string, data: any) => {
//     await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
// }

import { API_URL } from './constants';

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
		const response = await fetch(`${API_URL}/api/info/profile`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		});
		const data = response.json();
		if (response.status === 403) {
			alert('토큰이 만료되었습니다 다시 로그인 해주세요.');
			window.location.href = './signin';
			return;
		}
		return data;
	};
}

export default Auth;
