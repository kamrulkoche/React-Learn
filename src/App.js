import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Sponsor from "./Components/Sponsor";
import Contacts from "./Components/Contacts";
import Error from "./BlogWebsite/Error";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/sponsor" element={<Sponsor />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
