import { useEffect, useState } from 'react';
import { API_URL } from '../../api/constants';
import Info from '../../api/info';
import useAuth from '../../hooks/useAuth';

function Loginnavbar() {
	const [adname, setAdname] = useState('');
	useEffect(() => {
		const fetchAdminName = async () => {
			const data = await Info.adminName(API_URL as string);
			setAdname(data);
		};
		fetchAdminName();
	}, []);

	const { logOut } = useAuth();

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
						{localStorage.getItem('userName') || adname} 님 반가워요.
					</div>
					<div style={{ flex: '1', textAlign: 'center', marginTop: '25px' }}>
						{adname} 블로그
					</div>
					<div style={{ flex: '1', textAlign: 'center', marginTop: '25px' }}>
						<p
							style={{ cursor: 'pointer' }}
							onClick={() => logOut(API_URL as string)}
						>
							로그아웃
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Loginnavbar;
