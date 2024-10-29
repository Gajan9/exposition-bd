// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[url('/img/bg-accueil.png')] bg-cover bg-center h-screen w-screen flex flex-col items-center">
      <h1 className="text-black text-4xl flex flex-col uppercase items-center">
        <div className="flex font-bangers">
          <span className="border-2 border-black px-4 py-2 mx-1 font-bangers">
            La
          </span>
          <span className="border-2 border-black px-4 py-2 mx-1 font-bangers">
            bande
          </span>
        </div>
        <div className="flex">
          <span className="border-2 border-black px-4 py-2 mx-1 font-bangers">
            dessinée
          </span>
        </div>
      </h1>

      <div className="mx-4 max-w-screen-xl">
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
