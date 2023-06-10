import Post from "./Post";
import Counter from "./Counter";
import Edit from "./Edit";

function Home() {
  return (
    <>
      <h1>This is my blog</h1>
      <Edit />
      <hr />
      <Post />
      {/* <Counter/> */}
    </>
  );
}

export default Home;