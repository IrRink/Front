import { useState } from 'react';
import Correctionmypage from './Correctionmypage';
import Viewpage from './Viewmypage';
import Auth from '../../api/auth';

function MyPage() {
	const [toggle, setToggle] = useState(false);
	const [changeText, setChangeText] = useState('수정하기');

	function change() {
		toggle === true ? setToggle(false) : setToggle(true);
		toggle === false ? setChangeText('수정 마치기') : setChangeText('수정하기');
	}
	return (
		<div
			style={{
				width: 'calc(100% -250px)',
				marginLeft: '250px',
				textAlign: 'center',
			}}
		>
			{toggle === true ? <Correctionmypage /> : <Viewpage />}
			<button
				style={{
					backgroundColor: '#007bff',
					color: 'white',
					padding: '10px',
					width: '100px',
					fontWeight: '800',
					border: 'none',
					borderRadius: '15px',
					marginRight: '20px',
				}}
				onClick={change}
			>
				{changeText}
			</button>
			<button
				style={{
					backgroundColor: '#ff1100',
					color: 'white',
					padding: '10px',
					width: '120px',
					fontWeight: '800',
					border: 'none',
					borderRadius: '15px',
				}}
				onClick={() => Auth.memberDelete()}
			>
				계정 삭제하기
			</button>
		</div>
	);
}

export default MyPage;
