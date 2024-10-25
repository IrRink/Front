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
}

export default Member;
