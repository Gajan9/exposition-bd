// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Bienvenue !</h1>
      <Link href="/about">À propos</Link>
      <Link href="/blog">Blog</Link>
    </div>
  );
}
