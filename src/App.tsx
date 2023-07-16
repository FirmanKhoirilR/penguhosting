import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Domain, GameServer, Home, Login, VPSHosting, WebHosting } from "./pages";
import { Footer, Navbar, Sidebar } from "./components";

function App() {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vps-hosting" element={<VPSHosting />} />
        <Route path="/gameserver" element={<GameServer />} />
        <Route path="/webhosting" element={<WebHosting />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
