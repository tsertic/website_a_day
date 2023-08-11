import { BlogPostList } from "./_components/BlogPosts/BlogPostList";
import { ThemeSwitcher } from "./_components/UI/ThemeSwitcher";

export default function Home() {
  return (
    <main className="pt-[100px]">
      <BlogPostList />
    </main>
  );
}
