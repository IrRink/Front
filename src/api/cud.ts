import { API_URL } from './constants';

class Cud {
	static create = async (data: string) => {
		try {
			const response = await fetch(`${API_URL}/api/board`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
				body: data,
			});

			if (response.ok) {
				alert('정상적으로 작성되었습니다.');
				window.location.href = '../';
			} else if (response.status === 403) {
				alert('현재 토큰이 만료되었습니다.');
				alert('다시 로그인 해주세요');
				localStorage.clear();
				window.location.href = '/signin';
			} else {
				alert('에러 발생');
			}
		} catch (error) {
			alert(`요청 중 오류발생`);
		}
	};
}

export default Cud;
