import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-center space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/home" className="hover:underline">/home</Link>
        <Link href="/about" className="hover:underline">/about</Link>
      </nav>
    </header>
  );
}
