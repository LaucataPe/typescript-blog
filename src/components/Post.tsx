import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/postSlice";

function Post() {
  const posts = useSelector(selectAllPosts)

  return (
    <>
      <h3>Bienvenido a mi Blog</h3>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </article>
      ))}
    </>
  );
}

export default Post;