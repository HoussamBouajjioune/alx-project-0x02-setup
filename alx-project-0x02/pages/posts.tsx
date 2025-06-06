import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data: PostProps[] = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>

        {loading && <p>Loading posts...</p>}

        {!loading && posts.length === 0 && <p>No posts found.</p>}

        <div>
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} body={post.body} userId={post.userId} />
          ))}
        </div>
      </main>
    </>
  );
}
