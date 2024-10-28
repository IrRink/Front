// export const fetchSignUp = async (url: string, data: any) => {
// 	await fetch(`${url},`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(data),
// 	});
// };

import { API_URL } from './constants';

class Member {
	static Viewcomment = async (id: string) => {
		let response = await fetch(`${API_URL}/api/comments/${id}`);
		let data = await response.json();
		return data;
	};

	static CreateComment = async (id: string, data: any) => {
		try {
			let response = await fetch(`${API_URL}/api/comments/${id}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify(data),
			});
			let result = await response.text();
			if (response.ok) {
				return alert(result);
			} else if (response.status === 403) {
				window.location.href = '../signin';
				return alert(result);
			} else {
				return alert(result);
			}
		} catch (error) {
			return console.log(error);
		}
	};

	static deleteComments = async (commentId: number) => {
		try {
			const response = await fetch(`${API_URL}/api/comments/${commentId}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			});
			const data = await response.text();
			if (response.ok) {
				return alert(data);
			} else if (response.status === 403) {
				window.location.href = '../signin';
				return alert('현재 토큰이 만료되었습니다. 다시 로그인 해주세요');
			} else {
				return alert(data);
			}
		} catch (error) {
			console.log(error);
		}
	};
}

export default Member;
