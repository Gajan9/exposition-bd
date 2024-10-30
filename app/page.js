import BookLink from "./components/BookLink";

export default function HomePage() {
  return (
    <div className="bg-[url('/img/bg-accueil.png')] bg-cover bg-center flex flex-col items-center h-auto">
      <h1 className="text-black text-6xl flex flex-col uppercase items-center font-bangers my-8">
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

      <div className="mx-4 max-w-screen-3xl">
        <video controls src="/video/videoBD.mp4"></video>
      </div>

      <div className="flex flex-col items-center h-[70vh] justify-center gap-5">
        <BookLink
          href="/franco-belge"
          closedImage="/img/europeFerme.png"
          openImage="/img/europeOuvert.png"
        />
        <BookLink
          href="/asiatique"
          closedImage="/img/mangaFerme.png"
          openImage="/img/mangaOuvert.png"
        />
        <BookLink
          href="/comics"
          closedImage="/img/comicsFerme.png"
          openImage="/img/comicsOuvert.png"
        />
      </div>
    </div>
  );
}
