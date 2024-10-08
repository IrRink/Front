import { useEffect, useState } from "react";
import Footer from "../../../components/footer/footer";
import { Link } from "react-router-dom";

interface BlogPost {
  num: number;
  title: string;
  subtitle: string;
  id: string;
  uptime: string;
  bord_text: string;
}

function Post() {
  const [json, setJson] = useState<BlogPost[]>([]);

  async function view() {
    const response = await fetch('http://localhost:4000/blogbord')
    const data = await response.json();
    console.log(data)
    setJson(data)
  }

  useEffect(() => {
    view()
  }, []);

  
return (
<div style={{ paddingTop: '30px'}}>
    <ul style={{
        margin: '0 auto',
        padding: '0', // 패딩 제거
        width: '80%', // 너비를 설정
    }}>
        {json.map((item) => (
          <Link to={`/post/${item.num}`} style={{color : 'black'}}>
              <li key={item.num} style={{
                  listStyleType: 'none',
                  marginBottom: '50px',
                  borderBottom: '1px solid rgb(128, 128, 128)',
                  borderRadius: '5px',
                  width: '100%',
                  padding: '10px 0',
              }}>
                  <h2>{item.title}</h2>
                  <h3>{item.subtitle}</h3>
                  <p style={{ textAlign: 'right' }}>작성자: {item.id}</p>
                  <p style={{ textAlign: 'right' }}>날짜: {item.uptime}</p>
              </li>
            </Link>
        ))}
    </ul>
</div>

  );
}

export default Post;
