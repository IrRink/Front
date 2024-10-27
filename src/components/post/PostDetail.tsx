import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loginnavbar from '../navbar/Loginnavbar';
import Board from '../../api/board';
import Member from '../../api/member';

// 블로그 포스트 인터페이스
interface BlogPost {
	id: number;
	title: string;
	sub_title: string;
	writer: string;
	uptime: string;
	board_text: string;
}

// 댓글 데이터의 타입 정의
interface Comment {
	id: number;
	comment_text: string;
	writer_name: string;
	writer_email: string;
	board_id: number;
	uptime: string;
}

// 스타일링
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
	const { id } = useParams<{ id: string }>();
	const [post, setPost] = useState<BlogPost | null>(null);
	const [comment, setComment] = useState<Comment[]>([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		const PostOne = async () => {
			const data = await Board.fetchPost(id as string);
			setPost(data);
		};

		const commentView = async (id: string) => {
			try {
				const result = await Member.Viewcomment(id);
				setComment(result.comments);
				console.log(result.comments);
			} catch (error) {
				console.error('Error fetching comments:', error);
			}
		};

		PostOne();
		commentView(id as string);
	}, [id]);

	async function write() {
		const data = {
			comment_text: input,
		};
		await Member.CreateComment(id, data);
			

	}

	function handlechange(e: any) {
		setInput(e.target.value);
	}

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
						<div style={{ border: '1px solid black' }}></div>
						<div>
							<h2>댓글 작성하기</h2>
							<input type='text' onchnage={handlechange} />
							<button onclick={write}>작성하기</button>
						</div>
						<h2>댓글</h2>
						{comment.map((item) => (
							<ul
								key={item.id}
								style={{ listStyleType: 'none', margin: '30px' }}
							>
								<li
									style={{
										borderBottom: '1px solid gray',
										width: '80%',
										position: 'relative',
										marginBottom: '50px',
										paddingTop: '0 !important',
										paddingLeft: '50px',
										paddingBottom: '25px',
										left: '50%',
										transform: 'translate(-50%, 0)',
									}}
								>
									<strong>{item.writer_name}</strong>: {item.comment_text}
									<br />
									<span style={{ position: 'absolute', right: 0, top: '0' }}>
										{item.uptime.split(' ')[0]}
									</span>
								</li>
							</ul>
						))}
					</div>
				</div>
			</ScrollableContent>
		</FirstMainDiv>
	);
}

export default PostDetail;
