// export const fetchSignUp = async (url: string, data: any) => {
//     await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
// }

class Auth {
	static fetchSignup = async (url: string, data: any) => {
		await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	};

	static fetchCheckDuplicatedEmail = async (url: string, email: string) => {
		const response = await fetch(`${url}/user/checkEmail?email=${email}`);
		const data = await response.json();
		return data;
	};
}

export default Auth;
