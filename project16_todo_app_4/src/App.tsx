import { useSelector } from "react-redux";
import { IPosts } from "./types/posts.t";
function App() {
  const posts = useSelector((state: { posts: IPosts }) => state.posts.posts);
  console.log(posts);
  return (
    <main className="min-h-screen w-full bg-slate-200">
      <p>{posts && posts.length}</p>
    </main>
  );
}

export default App;
