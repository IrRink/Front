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
		try {
			let response = await fetch(`${signupUrl}/api/info/adminname`);
			if (response.ok) {
				let data = await response.text();
				data = data.replaceAll('"', '');
				return data;
			} else {
				alert('관리자가 없습니다.');
				window.location.href = './signin';
				return;
			}
		} catch (error) {
			alert('관리자가 없습니다.');
			window.location.href = './signin';
			return;
		}
	};
}

export default Info;
