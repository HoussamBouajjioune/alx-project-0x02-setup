import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Getting Started", content: "This card explains how to begin working with the project setup." },
    { title: "Why TypeScript?", content: "TypeScript helps catch errors early and improves code maintainability." },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <>
      <Header />
      <main className="p-8 space-y-4">
        <h1 className="text-3xl font-bold">Home Page</h1>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded shadow"
        >
          Add New Post
        </button>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        {modalOpen && (
          <PostModal
            onClose={() => setModalOpen(false)}
            onSubmit={handleAddPost}
          />
        )}
      </main>
    </>
  );
}
