import { useEffect, useState } from 'react';

function Loginnavbar() {
	var name = localStorage.getItem('name');
	console.log(name);

	const [adname, setAdname] = useState('');
	async function adminName() {
		const res = await fetch('http://localhost:5500/process/adminname');
		const data = await res.json();
		setAdname(data.adminName);
	}
	// localStorage.setItem('adName', adname);

	useEffect(() => {
		adminName();
	}, []);

	async function logout() {
		try {
			const response = await fetch('http://localhost:5500/process/logout', {
				method: 'POST',
				credentials: 'include',
			});

			if (response.ok) {
				alert('로그아웃 성공');
				localStorage.clear();
				window.location.href = '/signin';
			} else {
				alert('로그아웃 실패');
			}
		} catch (error) {
			alert('로그아웃 요청 중 오류 발생');
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
						{localStorage.getItem('userName')}님 반가워요.
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
