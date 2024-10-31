import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ADMIN_USER_KEY, API_URL } from '../../api/constants';
import Loginnavbar from '../navbar/Loginnavbar';
import Board from '../../api/board';
import useBoard from '../../hooks/useBoard';
import useAuth from '../../hooks/useAuth';

const FirstMainDiv = styled.div`
	width: calc(100% - 250px);
	height: 100vh;
	background-image: url('https://tistory1.daumcdn.net/tistory/4939852/skin/images/allLogo2.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	margin-left: 250px;
	position: fixed;
`;

const Filter = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 2, 18, 0.568);
`;

const ScrollableContent = styled.div`
	z-index: 999;
	background-color: white;
	position: absolute;
	top: 17%;
	width: 85%;
	left: 50%;
	transform: translate(-50%, 0%);
	overflow-y: auto;
	height: 75vh;
`;

interface BlogPost {
	id: number;
	title: string;
	sub_title: string;
	name: string;
	uptime: string;
	board_text: string;
}

function Update() {
	const { authority } = useAuth();

	const [posts, setPosts] = useState<BlogPost[]>([]);

	const viewPosts = async () => {
		const data = await Board.viewAll();
		setPosts(data);
	};

	useEffect(() => {
		authority();
		viewPosts();
	}, []);

	return (
		<FirstMainDiv>
			<Filter />
			<Loginnavbar />
			<ScrollableContent>
				<div style={{ padding: '50px', textAlign: 'center' }}>
					<h1 style={{ marginBottom: '30px' }}>
						수정하고 싶은 글을 선택하세요.
					</h1>
					{posts.map((item) => (
						<div key={item.id} style={{ color: 'black' }}>
							<li
								style={{
									listStyleType: 'none',
									marginBottom: '50px',
									borderBottom: '1px solid rgb(128, 128, 128)',
									borderRadius: '5px',
									width: '100%',
									padding: '10px 0',
								}}
							>
								<h2>{item.title}</h2>
								<h3>{item.sub_title}</h3>
								<p style={{ textAlign: 'right' }}>작성자: {item.name}</p>
								<p style={{ textAlign: 'right' }}>
									날짜: {item.uptime.split(' ')[0]}
								</p>
								<button
									style={{
										backgroundColor: 'green',
										color: 'white',
										border: 'none',
										padding: '10px',
										borderRadius: '5px',
										fontWeight: '800',
									}}
									onClick={() =>
										(window.location.href = `/postdetail/${item.id}`)
									}
								>
									수정하기
								</button>
							</li>
						</div>
					))}
				</div>
			</ScrollableContent>
		</FirstMainDiv>
	);
}

export default Update;
