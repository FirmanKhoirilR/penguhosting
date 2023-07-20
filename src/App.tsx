import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AGB, About, Blog, Contact, CreateBlog, Datenschutz, DetailBlog, Domain, GameServer, Home, Impressium, Login, VPSHosting, WebHosting } from "./pages";
import { Footer, Navbar, Sidebar } from "./components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  // Running AOS in entire/inside in children
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="scroll-smooth hero__background">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="buttonGames"
        className=" flex items-center justify-center p-3 rounded-full text-white fixed bottom-4 z-10 right-4 hover:bg-sky-500 transition duration-300 bg-sky-400"
      >
        <AiOutlineArrowUp size={25} />
      </button>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ueber-uns" element={<About />} />
        <Route path="/vps-hosting" element={<VPSHosting />} />
        <Route path="/gameserver" element={<GameServer />} />
        <Route path="/webhosting" element={<WebHosting />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<DetailBlog />} />
        <Route path="/impressum" element={<Impressium />} />
        <Route path="/post-blog" element={<CreateBlog />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
