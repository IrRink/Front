import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ADMIN_USER_KEY, API_URL } from '../../constants';
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

function UpdateDetail() {
	function verification() {
		console.log(localStorage.getItem('id'));
		console.log(ADMIN_USER_KEY);
		if (localStorage.getItem('id') === ADMIN_USER_KEY) {
			console.log('통과');
		} else {
			alert('현재 권한이 없습니다.');
			window.location.href = '/signin';
		}
	}

	useEffect(() => {
		verification();
	}, []);

	const { num } = useParams<{ num: any }>();

	const [post, setPost] = useState<BlogPost | null>(null);
	const titleRef = useRef<HTMLInputElement | null>(null);
	const subtitleRef = useRef<HTMLInputElement | null>(null);
	const [get, setGet] = useState('');

	async function fetchPost() {
		console.log(num);
		const response = await fetch(`${API_URL}/board/blogboard/${num}`);
		const data = await response.json();
		console.log(data);
		setPost(data);
	}

	async function yes() {
		const data2 = {
			title: titleRef.current?.value,
			subtitle: subtitleRef.current?.value,
			board_text: get,
		};
		try {
			const response2 = await fetch(`${API_URL}/board/update-post/${num}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data2),
			});

			const result = await response2.text();
			if (response2.ok) {
				alert(result);
				window.location.href = '../';
			} else {
				alert(result);
			}
		} catch (error) {
			console.log('cath 에러', error);
		}
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
						defaultValue={post.subtitle}
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
						<p style={{ textAlign: 'right' }}>작성자: {post.id}</p>
						<p style={{ textAlign: 'right' }}>날짜: {post.uptime}</p>
					</div>
				</div>

				<button onClick={yes}>수정하기</button>
			</ScrollableContent>
		</FirstMainDiv>
	);
}

export default UpdateDetail;
