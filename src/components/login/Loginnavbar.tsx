import { useEffect, useState } from 'react';
import { API_URL } from '../../constants';

function Loginnavbar() {
	var name = localStorage.getItem('name');
	console.log(name);

	const [adname, setAdname] = useState('');
	async function adminName() {
		const res = await fetch(`${API_URL}/process/adminname`);
		let data = await res.text();
		data = data.replace('"', '');
		data = data.replace('"', '');
		setAdname(data);
	}
	localStorage.setItem('adName', adname);

	useEffect(() => {
		adminName();
	}, []);

	async function logout() {
		try {
			const response = await fetch(`${API_URL}/process/logout`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			});

			if (response.ok) {
				alert('로그아웃 성공');
				localStorage.clear();
				window.location.href = '/signin';
			} else {
				alert('로그아웃 성공');
				localStorage.clear();
				window.location.href = '/signin';
			}
		} catch (error) {
			alert('로그아웃 성공');
			localStorage.clear();
			window.location.href = '/signin';
		}
	}

	return (
		<>
			<div
				style={{
					marginTop: '20px',
					width: 'calc(100% - 500px )',
					marginLeft: '375px',
					position: 'fixed',
					left: '0',
					top: '0',
					zIndex: '999',
					height: '6vh',
				}}
			>
				<div
					style={{
						backgroundColor: ' rgba(255, 255, 255, 0.929)',
						height: '70px',
						borderRadius: '15px',
						display: 'flex',
						boxShadow: '0px 0px 15px 4px rgba(134, 134, 134, 0.411)',
					}}
				>
					<div style={{ flex: '1', textAlign: 'center', marginTop: '25px' }}>
						{localStorage.getItem('userName') || localStorage.getItem('adName')}
						님 반가워요.
					</div>
					<div style={{ flex: '1', textAlign: 'center', marginTop: '25px' }}>
						{adname} 블로그
					</div>
					<div style={{ flex: '1', textAlign: 'center', marginTop: '25px' }}>
						<p style={{ cursor: 'pointer' }} onClick={logout}>
							로그아웃
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Loginnavbar;
