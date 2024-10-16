import styled from 'styled-components';

import { useEffect } from 'react';
import { API_URL } from '../constants';
import Loginnavbar from './login/Loginnavbar';
import Navber from './navbar';
import FirstMainPage from './firstpage';
import Second from './Second';
import Third from './Third';
import Footer from './footer/footer';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function Main() {
	if (localStorage.getItem('userName')) {
		console.log('로그인 성공');
	} else {
		alert('세션이 만료되었거나 로그인을 하지 않으셨습니다. 재 로그인 해주세요');
		window.location.href = '/signin';
	}

	async function session() {
		try {
			const response = await fetch(`${API_URL}/session`, {
				method: 'GET',
				credentials: 'include',
			});

			if (response.ok) {
				alert('세션이 연결되었습니다');
				const resultname = response.text();
				console.log('dataName', resultname);
			}
		} catch {
			alert('세션 확인중 오류 발생');
		}
	}

	useEffect(() => {
		session();
	}, []);

	return (
		<>
			<Container>
				<div style={{ display: 'flex' }} id='goRoot'>
					<Loginnavbar />
					<Navber />
					<FirstMainPage />
				</div>
				<div></div>
				<div style={{ marginLeft: '250px', height: '60vh' }} id='section1'>
					<Second />
				</div>
				<div style={{ marginLeft: '250px' }} id='section1'>
					<Third />
					<Footer />
				</div>
			</Container>
		</>
	);
}

export default Main;
