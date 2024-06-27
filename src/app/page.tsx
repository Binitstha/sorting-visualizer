import AlgorithInfo from "./algorithInfo";
import Nav from "./nav";

export default function Home() {
  return (
    <>
      <main className="dark:bg">
        <div className="sticky top-0 h-24 w-full border-b border-b-stone-700">
          <Nav />
        </div>
        <AlgorithInfo />
      </main>
    </>
  );
}
