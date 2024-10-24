import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loginnavbar from '../navbar/Loginnavbar';
import Board from '../../api/board';

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

function PostDetail() {
	const { id } = useParams<{ id: any }>();
	const [post, setPost] = useState<BlogPost | null>(null);

	useEffect(() => {
		const PostOne = async () => {
			const data = await Board.fetchPost(id);
			setPost(data);
		};
		PostOne();
	}, []);

	if (!post) return <div>Loading...</div>;

	return (
		<FirstMainDiv>
			<Filter />
			<Loginnavbar />
			<ScrollableContent>
				<div style={{ padding: '50px' }}>
					<h1 style={{ textAlign: 'center' }}>{post.title}</h1>
					<h2 style={{ textAlign: 'center' }}>{post.sub_title}</h2>
					<div
						style={{ textAlign: 'left', paddingTop: '80px' }}
						dangerouslySetInnerHTML={{
							__html: post.board_text.replace(/\n/g, '<br />'),
						}}
					/>

					<div style={{ bottom: '20px', right: '40px' }}>
						<p style={{ textAlign: 'right' }}>작성자: {post.writer}</p>
						<p style={{ textAlign: 'right' }}>
							날짜: {post.uptime.split(' ')[0]}
						</p>
					</div>
				</div>
			</ScrollableContent>
		</FirstMainDiv>
	);
}

export default PostDetail;
