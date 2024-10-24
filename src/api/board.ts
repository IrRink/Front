// export const fetchSignUp = async (url: string, data: any) => {
//     await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
// }

class Board {
	static viewAll = async (apiUrl: string) => {
		const response = await fetch(`${apiUrl}/api/board`);
		const data = await response.json();

		return data;
	};

	static UserCount = async();
}

export default Board;
