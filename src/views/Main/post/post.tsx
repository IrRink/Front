

function Post() {


    const data = [
        {
          id: 1,
          title: "React의 기초",
          subtitle: "React를 처음 배우는 사람들을 위한 가이드",
          author: "홍길동",
          date: "2024-10-01",
        },
        {
          id: 2,
          title: "상태 관리의 중요성",
          subtitle: "상태 관리 라이브러리 비교",
          author: "김영희",
          date: "2024-10-02",
        },
        {
          id: 3,
          title: "Hooks의 이해",
          subtitle: "React Hooks를 사용하는 방법",
          author: "이철수",
          date: "2024-10-03",
        },
        {
          id: 4,
          title: "리액트와 TypeScript",
          subtitle: "TypeScript와 함께 사용하는 React",
          author: "박지민",
          date: "2024-10-04",
        },
        {
          id: 5,
          title: "REST API와 React",
          subtitle: "REST API를 사용하여 데이터를 가져오는 방법",
          author: "최강수",
          date: "2024-10-05",
        },
        {
          id: 6,
          title: "React Router의 사용",
          subtitle: "React 애플리케이션에서 라우팅 구현하기",
          author: "김민주",
          date: "2024-10-06",
        },
        {
          id: 7,
          title: "모바일 앱 개발",
          subtitle: "React Native로 모바일 앱 만드는 법",
          author: "이영호",
          date: "2024-10-07",
        },
        {
          id: 8,
          title: "컴포넌트 최적화",
          subtitle: "React 컴포넌트 성능 개선 팁",
          author: "정수빈",
          date: "2024-10-08",
        },
        {
          id: 9,
          title: "테스트 주도 개발",
          subtitle: "TDD와 React 테스트 기법",
          author: "김하나",
          date: "2024-10-09",
        },
        {
          id: 10,
          title: "배포 및 호스팅",
          subtitle: "React 애플리케이션을 배포하는 방법",
          author: "박상혁",
          date: "2024-10-10",
        },
      ];

  return (
<div style={{ marginTop: '30px' }}>
    <ul style={{
        margin: '0 auto',
        padding: '0', // 패딩 제거
        width: '80%', // 너비를 설정
    }}>
        {data.map((item) => (
            <li key={item.id} style={{
                listStyleType: 'none',
                marginBottom: '50px',
                borderBottom: '1px solid rgb(128, 128, 128)',
                borderRadius: '5px',
                width: '100%', // li가 ul의 너비에 맞춰지도록 설정
                padding: '10px 0', // 상하 여백 추가
            }}>
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
                <p style={{ textAlign: 'right' }}>작성자: {item.author}</p>
                <p style={{ textAlign: 'right' }}>날짜: {item.date}</p>
            </li>
        ))}
    </ul>
</div>

  );
}

export default Post;
