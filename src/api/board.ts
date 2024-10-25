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

class Board {
	static viewAll = async () => {
		const response = await fetch(`${API_URL}/api/boards`);
		const data = await response.json();

		return data;
	};

	static UserCount = async () => {
		const response = await fetch(`${API_URL}/api/info/adminAndUserCount`);
		const data = await response.json();
		return data;
	};

	static fetchPost = async (id: string) => {
		const response = await fetch(`${API_URL}/api/boards/${id}`);
		const data = await response.json();
		return data;
	};

	static fetchUpdate = async (id: number, data: any) => {
		const response = await fetch(`${API_URL}/api/boards/${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			body: JSON.stringify(data),
		});
		const result = await response.text();
		try {
			if (response.ok) {
				alert(result);
				window.location.href = '../';
				return;
			} else if (response.status === 403) {
				alert('토큰이 만료되었습니다 다시 로그인 해주세요.');
				window.location.href = '/signin';
				return;
			} else {
				alert(result);
				return;
			}
		} catch (error) {
			alert(error);
			return;
		}
	};
}

export default Board;
