import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Layout from "./Layout";
import FlashCard from "./Pages/FlashCard/FlashCards";
import RelationAndFuntion from "./Pages/FlashCard/Math/Topics/RelationAndFuntion";
import Mathematics from "./Pages/FlashCard/Math/Mathematics";
import FAQ from "./Pages/FAQ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flashcard" element={<FlashCard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/flashcard/mathematics" element={<Mathematics />} />
          <Route
            path="/flashcard/mathematics/relation_and_function"
            element={<RelationAndFuntion />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
