// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[url('/img/bg-accueil.png')] bg-cover bg-center h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-black text-4xl flex uppercase">
        <span className="border-2 border-black px-4 py-2 mx-1">La</span>
        <span className="border-2 border-black px-4 py-2 mx-1">bande</span>
        <span className="border-2 border-black px-4 py-2 mx-1">dessinée</span>
      </h1>

      <div className="">
        <video controls src="/video/videoBD.mp4"></video>
      </div>
      <Link href="/asiatique" className="text-white">
        asiatique
      </Link>
      <Link href="/comics" className="text-white">
        comics
      </Link>
      <Link href="/franco-belge" className="text-white">
        franco-belge
      </Link>
    </div>
  );
}
