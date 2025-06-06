// pages/index.tsx
import Header from "@/components/layout/Header";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h2 className="text-2xl font-semibold">Hello, this is the homepage!</h2>
        <p className="mt-4 text-gray-700">
          This project is a setup for learning Next.js, TypeScript, and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}
