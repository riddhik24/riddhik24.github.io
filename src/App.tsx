import Expertise from "./components/Expertise";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import BlogProvider from "./components/BlogContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

export default function App() {

  const Blogs = lazy(()=>import('./components/Blogs'))
  const BlogDetails = lazy(()=>import('./components/BlogDetails'))
  return (
    <BlogProvider>
      <BrowserRouter>
          {/* Navigation*/}
          <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogdetail/:path" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </BlogProvider>
  );
}
