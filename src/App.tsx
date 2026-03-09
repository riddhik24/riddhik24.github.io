import Expertise from "./components/Expertise";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import BlogProvider from "./components/BlogContext";
import { HashRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

export default function App() {
  const Blogs = lazy(() => import("./components/Blogs"));
  const BlogDetails = lazy(() => import("./components/BlogDetails"));
  return (
    <BlogProvider>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          </div>
        }
      >
        <HashRouter>
          {/* Navigation*/}
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogdetail/:path" element={<BlogDetails />} />
          </Routes>
        </HashRouter>
        <Footer />
      </Suspense>
    </BlogProvider>
  );
}
