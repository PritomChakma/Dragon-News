import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import LeatestNews from "./Components/Leatest/LeatestNews";
import LeftNav from "./Components/Main/LeftNav/LeftNav";
import RightNav from "./Components/Main/RightNav/RightNav";
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
        <aside className="col-span-3"><LeftNav></LeftNav></aside>
        <main className="col-span-6"><Outlet></Outlet></main>
        <aside className="col-span-3"><RightNav></RightNav></aside>
      </main>
      <footer></footer>
    </>
  );
}

export default Root;
