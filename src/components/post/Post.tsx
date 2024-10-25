import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './New.css';
import { API_URL } from '../../api/constants';
import Board from '../../api/board';
interface BlogPost {
	id: number;
	title: string;
	sub_title: string;
	writer: string;
	uptime: string;
	board_text: string;
}

function Post() {
	const [json, setJson] = useState<BlogPost[]>([]);
	const [currentPage, setCurrentPage] = useState(0);
	const postsPerPage = 10; // 한 페이지에 표시할 게시물 수
	const viewall = async () => {
		const data = await Board.viewAll();
		setJson(data);
	};

	// 현재 페이지에 따라 보여줄 게시물 결정
	const offset = currentPage * postsPerPage;
	const currentPosts = json.slice(offset, offset + postsPerPage);

	// 페이지 변경 핸들러
	const handlePageChange = (selectedPage: { selected: number }) => {
		setCurrentPage(selectedPage.selected);
	};

	// 총 페이지 수 계산
	const pageCount = Math.ceil(json.length / postsPerPage);
	useEffect(() => {
		viewall();
	}, []);

	return (
		<div style={{ paddingTop: '30px', position: 'relative' }}>
			<ul
				style={{
					margin: '0 auto',
					padding: '0',
					width: '80%',
				}}
			>
				{currentPosts.map((item) => (
					<Link
						to={`/post/${item.id}`}
						style={{ color: 'black' }}
						key={item.id}
					>
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
							<p style={{ textAlign: 'right' }}>작성자: {item.writer}</p>
							<p style={{ textAlign: 'right' }}>
								날짜: {item.uptime.split(' ')[0]}
							</p>
						</li>
					</Link>
				))}
			</ul>
			<ReactPaginate
				containerClassName={'pagination'}
				pageClassName={'pagination__item'} // 각 페이지의 클래스
				pageLinkClassName={'pagination__link'} // 페이지 링크의 클래스
				activeClassName={'active'} // 현재 활성 페이지 클래스
				previousClassName={'pagination__item'} // 이전 버튼 클래스
				nextClassName={'pagination__item'} // 다음 버튼 클래스
				previousLinkClassName={'pagination__link'} // 이전 버튼 링크 클래스
				nextLinkClassName={'pagination__link'} // 다음 버튼 링크 클래스
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={handlePageChange}
				breakLabel={'...'}
				nextLabel={'>'}
				previousLabel={'<'} // 수정된 부분
			/>
		</div>
	);
}

export default Post;
