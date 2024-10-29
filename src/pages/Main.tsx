import styled from 'styled-components';
import { useEffect } from 'react';
import Loginnavbar from '../components/navbar/Loginnavbar';
import FirstMainPage from '../components/firstpage';
import Second from '../components/Second';
import Third from '../components/Third';
import Footer from '../components/footer/footer';
import Navber from '../components/navbar/navbar';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function Main() {
	function login() {
		if (localStorage.getItem('userName') || localStorage.getItem('id')) {
		} else {
			localStorage.clear();
			alert('로그인이 되어있지 않습니다. 재 로그인 해주세요');
			window.location.href = '../signin';
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
