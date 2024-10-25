import Board from '../api/board';
import { ADMIN_USER_KEY } from '../api/constants';

const useBoard = () => {
	const countPostLength = async () => {
		const data = await Board.viewAll();
		return parseInt(data.length);
	};

	const userCount = async () => {
		const data = await Board.UserCount();
		const num = Number(data.userCount);

		if (data.adminDate) {
			var getUserData = {
				adminDate: data.adminDate,
				num: num,
			};
			return getUserData;
		} else {
			alert('현재 관리자가 없습니다.');
			window.location.href = './signin';
		}
	};
	function verification() {
		console.log(localStorage.getItem('id'));
		console.log(ADMIN_USER_KEY);
		if (localStorage.getItem('id') === ADMIN_USER_KEY) {
			console.log('통과');
		} else {
			alert('현재 권한이 없습니다.');
			window.location.href = '/signin';
		}
	}

	return {
		countPostLength,
		userCount,
		verification,
	};
};

export default useBoard;
