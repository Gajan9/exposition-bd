import CardChap from "../components/CardChap";

export default function LandingFrancoBelge() {
  return (
    <div className="bg-[url('/img/fonds/fondFrancoBelge.png')] bg-cover h-screen flex justify-center">
      <div className="w-2/4 flex flex-col justify-center max-w-screen-sm">
        <h1 className="font-bangers text-6xl">La bd franco-belge</h1>
        <p>
          La bande dessinée européenne est un genre souvent plus long et plus
          complexe que la BD américaine. Elles couvrent un large éventail de
          sujets, allant de l'aventure à la science-fiction en passant par le
          satirique et la fiction historique. Les auteurs européens sont souvent
          considérés comme des artistes à part entière, et leurs œuvres sont
          respectées en tant qu'exemples de l'expression artistique. Ce
          continent a connu beaucoup de péripéties depuis la naissance de la BD,
          une révolution littéraire, la guerre, la liberté d’expression...
          Faisant d’elle une icône et un indispensable dans le monde du livre.
        </p>
      </div>
      <div className="w-2/4 max-w-screen-sm flex flex-col gap-4 justify-center items-center">
        <CardChap
          image="/img/francobelge/europe4.jpg"
          title="Le début du neuvième art"
        />
        <CardChap
          image="/img/francobelge/europe2.jpg"
          title="Un medium enfantin"
        />
        <CardChap
          image="/img/francobelge/europe3.jpg"
          title="La naissance en Europe"
        />
      </div>
    </div>
  );
}
