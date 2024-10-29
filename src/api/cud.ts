import { API_URL } from './constants';

class Cud {
	static create = async (data: string) => {
		try {
			const response = await fetch(`${API_URL}/api/boards`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
				body: data,
			});

			if (response.ok) {
				alert('정상적으로 작성되었습니다.');
				// window.location.href = '../';
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

	static delete = async (id: string) => {
		const response = await fetch(`${API_URL}/api/boards/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		});
		if (response.ok) {
			alert('삭제가 완료되었습니다.');
			window.location.href = '../';
			return;
		} else if (response.status === 403) {
			alert('토큰이 만료되었습니다. 다시 로그인 해주세요.');
			window.location.href = '/signin';
			return;
		} else {
			alert('삭제 중 오류가 발생했습니다.');
			return;
		}
	};
}

export default Cud;
