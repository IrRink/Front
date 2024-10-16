import styled from 'styled-components';
const FirstMainDiv = styled.div`
	width: calc(100% - 250px);
	height: 100vh;
	background-image: url('404.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	margin-left: 250px;
`;

const Button = styled.button`
	background-color: rgba(255, 255, 255, 0);
	border: 1px solid red;
	font-size: 20px;
	font-weight: 700;
	padding: 15px;
	border-radius: 100px;
	margin-top: 60px;
`;

function NotFound() {
	return (
		<>
			<FirstMainDiv style={{ position: 'relative' }}>
				<div>
					<div
						style={{
							width: '50vw',
							margin: 'auto',
							position: 'absolute',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%, -50%)',
						}}
					>
						<h1
							style={{
								textAlign: 'center',
								backgroundColor: ' rgba(255, 255, 255, 0.568)',
								padding: '100px',
								borderRadius: '15px',
							}}
						>
							권한이 없거나 존재하지 않는 페이지입니다.
							<br />
							<Button onClick={() => (window.location.href = '/')}>
								돌아가기
							</Button>
						</h1>
					</div>
				</div>
			</FirstMainDiv>
		</>
	);
}

export default NotFound;
