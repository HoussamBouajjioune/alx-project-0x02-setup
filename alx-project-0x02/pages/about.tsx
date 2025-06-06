import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p className="mt-2 text-gray-700">This is the About Page of our Next.js project.</p>
      </main>
    </>
  );
}
