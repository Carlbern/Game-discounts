import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home.tsx";
import Game from "./pages/Game.tsx";
import Search from "./pages/Search.tsx";
import Omoss from "./pages/Omoss.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter
  //basename="/game-discounts"
  >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="game/:id" element={<Game />} />
      <Route path="/omoss" element={<Omoss />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search/:title" element={<Search />} />
    </Routes>
  </BrowserRouter>,
);
