import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto bg-black text-white p-4 w-full border-b-4 border-gray-700 fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          TestApp
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
