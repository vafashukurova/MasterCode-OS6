import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import CourseInner from "./pages/CourseInner";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<h1>hello world</h1>}  /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:name" element={<CourseInner/>}/> */}

        <Route path="/courses">
          <Route index element={<Courses />} />

          <Route path="coding">
              <Route index element={<h1>Coding</h1>}/>
              <Route path=":name" element={<h1>Inner Coding</h1>}/>
              <Route path="html" element={<h1>HTML</h1>}/>
          </Route>

          <Route path=":name" element={<CourseInner />} />
        </Route>


        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
