import styled from 'styled-components';
import { useEffect } from 'react';
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
	function login() {
		if (localStorage.getItem('userName') || localStorage.getItem('id')) {
			console.log('로그인 성공');
		} else {
			localStorage.clear();
			alert('로그인이 되어있지 않습니다. 재 로그인 해주세요');
			window.location.href = '/signin';
		}
	}

	useEffect(() => {
		login();
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
