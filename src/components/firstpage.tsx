/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useRef } from 'react';

const FirstMainDiv = styled.div`
	width: calc(100% - 250px);
	height: 100vh;
	background-image: url('https://tistory1.daumcdn.net/tistory/4939852/skin/images/allLogo2.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	margin-left: 250px;
`;

const Filter = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 2, 18, 0.568);
`;

const Down = styled.h2`
	margin: 50px auto;
	text-align: center;
	border: 1px solid white;
	width: 30px;
	padding: 20px;
	border-radius: 50%;
	color: white;
`;

function FirstMainPage() {
	const writtext = useRef<HTMLSpanElement | null>(null);
	const list = [' Math', ' Science', ' english', ' Korean', ' Social'];
	let num: number = 0;
	function running() {
		if (writtext.current) {
			writtext.current.innerText = list[num];
			num += 1;
			if (num > 4) {
				num = 0;
			}
		}
		setTimeout(running, 2000);
	}

	running();

	return (
		<FirstMainDiv>
			<Filter>
				<h1
					style={{
						textAlign: 'center',
						color: 'white',
						fontSize: '4vw',
						paddingTop: '30vh',
					}}
				>
					Hello World !<br />
					Let’s Get it
					<span ref={writtext} style={{ color: 'rgb(255, 201, 64)' }}>
						&nbsp;history
					</span>
				</h1>
				<div
					style={{
						borderBottom: '1px solid white',
						width: '40vw',
						margin: '50px auto',
					}}
				></div>
				<h2 style={{ color: 'white', textAlign: 'center' }}>
					안녕 세계! 나에게 프로그래밍 세상을 보여줘서 고마워
				</h2>
				<Down>v</Down>
			</Filter>
		</FirstMainDiv>
	);
}

export default FirstMainPage;
