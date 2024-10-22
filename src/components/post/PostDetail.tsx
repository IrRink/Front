import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from '../../constants';
import Loginnavbar from '../login/Loginnavbar';

interface BlogPost {
	num: number;
	title: string;
	subtitle: string;
	id: string;
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

function PostDetail() {
	const { num } = useParams<{ num: any }>();
	const [post, setPost] = useState<BlogPost | null>(null);

	async function fetchPost() {
		const response = await fetch(`${API_URL}/board/blogboard/${num}`);
		const data = await response.json();
		console.log(data);
		setPost(data);
	}

	useEffect(() => {
		fetchPost();
	});

	if (!post) return <div>Loading...</div>;

	return (
		<FirstMainDiv>
			<Filter />
			<Loginnavbar />
			<ScrollableContent>
				<div style={{ padding: '50px' }}>
					<h1 style={{ textAlign: 'center' }}>{post.title}</h1>
					<h2 style={{ textAlign: 'center' }}>{post.subtitle}</h2>
					<div
						style={{ textAlign: 'left', paddingTop: '80px' }}
						dangerouslySetInnerHTML={{
							__html: post.board_text.replace(/\n/g, '<br />'),
						}}
					/>

					<div style={{ bottom: '20px', right: '40px' }}>
						<p style={{ textAlign: 'right' }}>작성자: {post.id}</p>
						<p style={{ textAlign: 'right' }}>날짜: {post.uptime}</p>
					</div>
				</div>
			</ScrollableContent>
		</FirstMainDiv>
	);
}

export default PostDetail;
