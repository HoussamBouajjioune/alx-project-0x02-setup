import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-8 space-y-4">
        <h1 className="text-3xl font-bold">About Page</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button label="Small Rounded" size="small" shape="rounded-sm" />
          <Button label="Medium Rounded" size="medium" shape="rounded-md" />
          <Button label="Large Pill" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
