import BookLink from "./components/BookLink";

export default function HomePage() {
  return (
    <div className="bg-[url('/img/fonds/bg-accueil.png')] bg-cover bg-center flex flex-col items-center h-auto">
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

      <div className="mx-4 max-w-screen-2xl">
        <video controls src="/video/videoBD.mp4"></video>
      </div>

      <div className="flex flex-col items-center h-[70vh] justify-center gap-5">
        <BookLink
          href="/franco-belge"
          closedImage="/img/books/europeFerme.png"
          openImage="/img/books/europeOuvert.png"
        />
        <BookLink
          href="/asiatique"
          closedImage="/img/books/mangaFerme.png"
          openImage="/img/books/mangaOuvert.png"
        />
        <BookLink
          href="/comics"
          closedImage="/img/books/comicsFerme.png"
          openImage="/img/books/comicsOuvert.png"
        />
      </div>
    </div>
  );
}
