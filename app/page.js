// app/page.js
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[url('/img/bg-accueil.png')] bg-cover bg-center h-screen w-screen flex flex-col items-center">
      <h1 className="text-black text-5xl flex flex-col uppercase items-center font-bangers my-8">
        <div className="flex mb-2">
          <span className="border-4 border-black p-3 mr-2">La</span>
          <span className="border-4 border-black p-3">bande</span>
        </div>
        <div className="flex w-full justify-center">
          <span className="border-4 border-black p-3 w-full text-center">
            dessinée
          </span>
        </div>
      </h1>

      <div className="mx-4 max-w-screen-xl">
        <video controls src="/video/videoBD.mp4"></video>
      </div>

      <div className="relative w-[700px] h-[400px] group overflow-hidden transition-all duration-500 ease-in-out">
        <Image
          src="/img/europeFerme.png"
          alt="Livre fermé"
          width={700}
          height={200} // Plus petite hauteur pour l'image fermée
          className="object-contain transition-all duration-500 ease-in-out group-hover:opacity-0"
        />
        <Image
          src="/img/europeOuvert.png"
          alt="Livre ouvert"
          width={800}
          height={400} // Plus grande hauteur pour l'image ouverte
          className="absolute inset-0 object-contain transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
        />
      </div>

      <Link href="/asiatique" className="text-black">
        asiatique
      </Link>
      <Link href="/comics" className="text-black">
        comics
      </Link>
      <Link href="/franco-belge" className="text-black">
        franco-belge
      </Link>
    </div>
  );
}
