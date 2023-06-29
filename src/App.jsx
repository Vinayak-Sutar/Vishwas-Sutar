import { Route, Routes } from "react-router-dom";

import Home  from "./pages/Home";
import Music from "./pages/Music";
import Books from "./pages/Books";
import BookSynopsis from "./pages/BookSynopsis";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/home" index element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/music" element={<Music />} />
      <Route path="/books/:title" element={<BookSynopsis />} />

    </Routes>
  );
}

export default App;
