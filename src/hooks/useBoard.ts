import Board from '../api/board';

const useBoard = () => {
	const countPostLength = async (url: string) => {
		const data = await Board.viewAll(url);
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

	return {
		countPostLength,
		userCount,
	};
};

export default useBoard;
