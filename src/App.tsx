import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AGB, About, Contact, Datenschutz, Domain, GameServer, Home, Impressium, Login, VPSHosting, WebHosting } from "./pages";
import { Footer, Navbar, Sidebar } from "./components";
import { AiOutlineArrowUp } from "react-icons/ai";

function App() {
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
        <Route path="/impressum" element={<Impressium />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
