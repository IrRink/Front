import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ADMIN_USER_KEY, API_URL } from '../../api/constants';
import Loginnavbar from '../navbar/Loginnavbar';
import Board from '../../api/board';
import useBoard from '../../hooks/useBoard';
import useAuth from '../../hooks/useAuth';

interface BlogPost {
	id: number;
	title: string;
	sub_title: string;
	writer: string;
	uptime: string;
	board_text: string;
}

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

function UpdateDetail() {
	const [post, setPost] = useState<BlogPost | null>(null);
	const { id } = useParams<{ id: any }>();
	const titleRef = useRef<HTMLInputElement | null>(null);
	const subtitleRef = useRef<HTMLInputElement | null>(null);
	const [get, setGet] = useState('');
	const { authority } = useAuth();

	useEffect(() => {
		authority();

		const viewall = async () => {
			const data = await Board.fetchPost(id);
			setPost(data);
		};
		viewall();
	}, []);

	const yes = async () => {
		const data = {
			title: titleRef.current?.value || '',
			sub_title: subtitleRef.current?.value || '',
			board_text: get,
		};
		console.log(data);
		await Board.fetchUpdate(id, data);
	};

	if (!post) return <div>Loading...</div>;

	return (
		<FirstMainDiv>
			<Filter />
			<Loginnavbar />
			<ScrollableContent>
				<div style={{ padding: '50px', textAlign: 'center' }}>
					<label htmlFor=''>제목:</label>
					<br />
					<input
						type='text'
						defaultValue={post.title}
						style={{ width: '70%', height: '30px', padding: '5px' }}
						ref={titleRef}
					/>
					<br />
					<label htmlFor=''>부제목:</label>
					<br />
					<input
						type='text'
						defaultValue={post.sub_title}
						style={{ width: '70%', height: '30px', padding: '5px' }}
						ref={subtitleRef}
					/>
					<br />
					<label htmlFor=''>내용:</label>
					<br />
					<textarea
						defaultValue={post.board_text}
						style={{
							width: '70%',
							height: '200px',
							padding: '5px',
							resize: 'vertical',
						}}
						onChange={(e) => setGet(e.target.value)}
					/>
					<div style={{ bottom: '20px ', right: '40px' }}>
						<p style={{ textAlign: 'right' }}>작성자: {post.writer}</p>
						<p style={{ textAlign: 'right' }}>날짜: {post.uptime}</p>
					</div>
				</div>

				<button onClick={yes}>수정하기</button>
			</ScrollableContent>
		</FirstMainDiv>
	);
}

export default UpdateDetail;
