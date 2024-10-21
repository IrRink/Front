import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { API_URL } from '../constants';

const Box = styled.div`
	margin: 0 auto;
	background-color: rgb(249, 249, 254);
	padding: 20px;
	height: 80px;
	box-shadow: 0px 15px 4px 2px rgba(180, 180, 180, 0.24);
	border-radius: 15px;
`;

function Second() {
	const [member, setMember] = useState(0);

	const [date, setDate] = useState('');
	const [getdays, setGetdays] = useState(0);
	const box1Ref = useRef<HTMLHeadingElement>(null);
	const box2Ref = useRef<HTMLHeadingElement>(null);
	const [length, setLength] = useState(0);
	async function view() {
		const response = await fetch(`${API_URL}/board/blogboard`);
		const data = await response.json();
		setLength(parseInt(data.length));
		localStorage.setItem('postingCount', length.toString());
	}

	async function info() {
		const response = await fetch(`${API_URL}/process/adminAndUserCount`);
		const data = await response.json();

		const num = Number(data.userCount);
		setMember(num);
		if (data.adminDate) {
			setDate(data.adminDate);
		} else {
			alert('현재 관리자가 없습니다.');
			window.location.href = './signin';
		}
	}

	const getDateDiff = (d1: string, d2: string) => {
		const date1 = new Date(d1);
		const date2 = new Date(d2);

		const diffDate = date1.getTime() - date2.getTime();

		return Math.abs(diffDate / (1000 * 60 * 60 * 24));
	};

	useEffect(() => {
		info();
	}, []);
	console.log('asdf', length);
	useEffect(() => {
		if (date) {
			const today = new Date();
			const year = today.getFullYear();
			const month = String(today.getMonth() + 1).padStart(2, '0');
			const day = String(today.getDate()).padStart(2, '0');

			const nowDay = `${year}-${month}-${day}`;
			const dats = getDateDiff(date, nowDay);
			setGetdays(dats);
		}
	}, [date]);

	const counting = () => {
		for (let i = 0; i <= member; i++) {
			setTimeout(() => {
				if (box1Ref.current) {
					box1Ref.current.innerText = i.toString();
				}
			}, i * 30);
		}
	};

	const counting2 = () => {
		let postingcount = localStorage.getItem('postingCount') || '0';
		const count: number = parseInt(postingcount, 10); // 숫자로 변환하여 저장

		for (let i = 0; i <= count; i++) {
			setTimeout(() => {
				if (box2Ref.current) {
					box2Ref.current.innerText = i.toString();
				}
			}, i * 30);
		}
	};
	view();
	useEffect(() => {}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				counting();
				counting2();
				window.removeEventListener('scroll', handleScroll);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [member]);

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ flex: '1', marginTop: '15vh' }}>
				<div style={{ margin: '0 auto', width: '70%' }}>
					<Box style={{ borderBottom: '10px solid rgb(54, 85, 255)' }}>
						총 회원수
						<h1 id='box1' style={{ textAlign: 'center' }} ref={box1Ref}></h1>
					</Box>
					<div style={{ display: 'flex', marginTop: '30px' }}>
						<Box
							style={{
								flex: '1',
								borderBottom: '10px solid rgb(55, 168, 120)',
								borderRadius: '15px',
								width: '48%',
								marginRight: '4%',
							}}
						>
							총 포스팅
							<h1
								style={{ textAlign: 'center', marginTop: '15px' }}
								ref={box2Ref}
							></h1>
						</Box>

						<Box
							style={{
								flex: '1',
								borderBottom: '10px solid rgb(246, 86, 96)',
								width: '48%',
							}}
						>
							블로그 운영
							<h2 style={{ textAlign: 'center', marginTop: '15px' }}>{date}</h2>
						</Box>
					</div>
				</div>
			</div>

			<div
				style={{
					flex: '1',
					textAlign: 'center',
					marginTop: '25vh',
					position: 'relative',
				}}
			>
				<img
					src='img/bomb.gif'
					alt=''
					style={{ position: 'absolute', left: '0' }}
				/>
				<img
					src='img/bomb.gif'
					alt=''
					style={{
						position: 'absolute',
						right: '0',
						transform: 'rotateY(180deg)',
					}}
				/>
				<h1 style={{ fontSize: '45px' }}>
					여러분들의 방문을
					<br />
					진심으로 환영 합니다!
				</h1>
				<p style={{ color: '#535353', fontWeight: '100' }}>
					WEB 개발에 있어 다양한 개발 지식을 다루는 전문적인 블로그가 <br />{' '}
					되기 위해 노력하겠습니다. 😃
				</p>
			</div>
		</div>
	);
}

export default Second;
