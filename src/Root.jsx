import Header from "./Components/Header/Header";
import LeatestNews from "./Components/Leatest/LeatestNews";
import NavBar from "./Components/NavBar/NavBar";

function Root() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <section>
        <LeatestNews></LeatestNews>
      </section>
      <nav>
        <NavBar></NavBar>
      </nav>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <aside className="col-span-3">Left</aside>
        <main className="col-span-6">Main</main>
        <aside className="col-span-3">Right</aside>
      </main>
      <footer></footer>
    </>
  );
}

export default Root;
