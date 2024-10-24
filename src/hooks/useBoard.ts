import Board from '../api/board';

const useBoard = () => {
	const countPostLength = async (url: string) => {
		const data = await Board.viewAll(url);
		return parseInt(data.length);
	};

	return {
		countPostLength,
	};
};

export default useBoard;
