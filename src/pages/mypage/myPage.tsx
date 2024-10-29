import { useState } from 'react';
import Correctionmypage from './Correctionmypage';
import Viewpage from './Viewmypage';
import Auth from '../../api/auth';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root'); // 모달을 위한 루트 엘리먼트 설정

function MyPage() {
	const [toggle, setToggle] = useState(false);
	const [changeText, setChangeText] = useState('수정하기');
	const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

	function change() {
		setToggle(!toggle);
		setChangeText(toggle ? '수정하기' : '수정 마치기');
	}

	function openModal() {
		setIsModalOpen(true);
	}

	function closeModal() {
		setIsModalOpen(false);
	}

	function handleDeleteAccount() {
		Auth.memberDelete();
		closeModal();
	}

	return (
		<div
			style={{
				width: 'calc(100% - 250px)',
				marginLeft: '250px',
				textAlign: 'center',
			}}
		>
			{toggle ? <Correctionmypage /> : <Viewpage />}
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
				onClick={openModal} // 계정 삭제 버튼 클릭 시 모달 열기
			>
				계정 삭제하기
			</button>

			<ReactModal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				contentLabel='Account Delete Confirmation'
				style={{
					overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
					content: {
						top: '50%',
						left: '55%',
						transform: 'translate(-50%, -50%)',
						padding: '20px',
						width: '40vw',
						textAlign: 'center',
						borderRadius: '15px',
					},
				}}
			>
				<h2 style={{ marginTop: '50px' }}>계정을 삭제하시겠습니까?</h2>
				<p style={{ marginBottom: '150px' }}>삭제 시 복구가 불가능합니다.</p>

				<div
					style={{
						display: 'flex',
						marginTop: '20px',
					}}
				>
					<button
						onClick={handleDeleteAccount}
						style={{
							backgroundColor: '#ff1100',
							color: 'white',
							padding: '10px',
							width: '100px',
							fontWeight: '800',
							border: 'none',
							borderRadius: '15px',
							marginLeft: '250px',
						}}
					>
						삭제
					</button>
					<button
						onClick={closeModal}
						style={{
							backgroundColor: '#007bff',
							color: 'white',
							padding: '10px',
							width: '100px',
							fontWeight: '800',
							border: 'none',
							borderRadius: '15px',
							marginLeft: '50px',
						}}
					>
						취소
					</button>
				</div>
			</ReactModal>
		</div>
	);
}

export default MyPage;
