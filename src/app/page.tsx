import AlgorithInfo from "./algorithInfo";
import AlgorithVisualizer from "./algorithmVisualizer";
import Nav from "./nav";

export default function Home() {
  return (
    <>
      <main>
        <div className="sticky top-0 lg:h-24 w-full border-b border-b-stone-700 bg-transparent z-10 backdrop-blur-lg ">
          <Nav />
        </div>
        <AlgorithVisualizer />
        <AlgorithInfo />
      </main>
    </>
  );
}
