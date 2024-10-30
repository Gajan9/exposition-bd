import Link from "next/link";

function BookLink({ href, closedImage, openImage }) {
  return (
    <Link href={href} className="text-black">
      <div className="relative w-[800px] h-[200px] hover:h-[400px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 group">
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          style={{ backgroundImage: `url(${closedImage})` }}
        ></div>

        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:animate-shake"
          style={{ backgroundImage: `url(${openImage})` }}
        ></div>
      </div>
    </Link>
  );
}

export default BookLink;
