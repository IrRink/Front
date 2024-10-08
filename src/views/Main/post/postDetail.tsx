import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loginnavbar from "../../login/loginnavbar";

interface BlogPost {
  num: number;
  title: string;
  subtitle: string;
  id: string;
  uptime: string;
  bord_text: string;
}

function PostDetail() {
  const { num } = useParams<{ num: any }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  async function fetchPost() {
    const response = await fetch(`http://localhost:4000/post/${num}`);
    const data = await response.json();
    console.log(data.post)
    setPost(data.post);
  }

  useEffect(() => {
    fetchPost();
  }, [num]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
        <Loginnavbar />
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <p>{post.bord_text}</p>
      <p>작성자: {post.id}</p>
      <p>날짜: {post.uptime}</p>
    </div>
  );
}

export default PostDetail;
