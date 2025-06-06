import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-8 space-y-4">
        <h1 className="text-3xl font-bold">Home Page</h1>

        <Card
          title="Getting Started"
          content="This card explains how to begin working with the project setup."
        />
        <Card
          title="Why TypeScript?"
          content="TypeScript helps catch errors early and improves code maintainability."
        />
        <Card
          title="Tailwind CSS Power"
          content="Tailwind allows for rapid and responsive UI development using utility classes."
        />
      </main>
    </>
  );
}
