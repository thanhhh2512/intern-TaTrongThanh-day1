import Link from "next/link";

export default function PlaygroundLayout({ children }) {
  return (
    <div className="p-6">
      <nav className="mb-4 text-gray-500 text-sm">
        <Link href="/">Home</Link> / <span>Playground</span>
      </nav>
      <div>{children}</div>
    </div>
  );
}
