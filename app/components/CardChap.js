function CardChap({ image, title }) {
  return (
    <div className="relative w-[25rem] h-[40rem] rounded-lg overflow-hidden shadow-xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute bottom-0 w-full bg-black/50 p-4">
        <h2 className="text-white font-bangers text-2xl">{title}</h2>
      </div>
    </div>
  );
}

export default CardChap;
