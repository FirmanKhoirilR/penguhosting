import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact, Domain, GameServer, Home, Login, VPSHosting, WebHosting } from "./pages";
import { Footer, Navbar, Sidebar } from "./components";

function App() {
  return (
    <main className="scroll-smooth hero__background">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vps-hosting" element={<VPSHosting />} />
        <Route path="/gameserver" element={<GameServer />} />
        <Route path="/webhosting" element={<WebHosting />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
