import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";

export default function Home() {
  // console.log(allBlogs);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
    </main>
  );
}
