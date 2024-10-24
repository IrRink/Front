// export const fetchSignUp = async (url: string, data: any) => {
// 	await fetch(`${url},`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(data),
// 	});
// };

class Info {
	static adminName = async (signupUrl: string) => {
		let response = await fetch(`${signupUrl}/api/info/adminname`);
		let data = await response.text();
		data = data.replaceAll('"', '');
		return data;
	};
}

export default Info;
