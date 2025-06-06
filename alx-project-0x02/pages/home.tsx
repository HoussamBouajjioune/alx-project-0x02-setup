import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <p className="mt-2 text-gray-700">Welcome to the Home Page!</p>
      </main>
    </>
  );
}
