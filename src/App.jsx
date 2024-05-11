import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Layout from "./Layout";
import FlashCard from "./Pages/FlashCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flashcard" element={<FlashCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
