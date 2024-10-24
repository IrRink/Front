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
	static viewAll = async (apiUrl: string) => {
		const response = await fetch(`${apiUrl}/api/board`);
		const data = await response.json();

		return data;
	};

	static UserCount = async () => {
		const response = await fetch(`${API_URL}/api/info/adminAndUserCount`);
		const data = await response.json();
		return data;
	};

	static fetchPost = async (id: string) => {
		const response = await fetch(`${API_URL}/api/board/${id}`);
		const data = await response.json();
		return data;
	};
}

export default Board;
