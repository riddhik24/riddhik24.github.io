import Expertise from "./components/Expertise";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import BlogProvider from "./components/BlogContext";
import ThemeProvider from "./components/ThemeContext";
import { HashRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

export default function App() {
  const Blogs = lazy(() => import("./components/Blogs"));
  const BlogDetails = lazy(() => import("./components/BlogDetails"));
  return (
    <ThemeProvider>
      <BlogProvider>
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen bg-light-bg dark:bg-dark-bg">
              <div className="w-12 h-12 border-3 border-light-glass-border dark:border-dark-glass-border border-t-accent rounded-full animate-spin-slow"></div>
            </div>
          }
        >
          <HashRouter>
            <Nav />
            <ScrollToTop />
            <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogdetail/:path" element={<BlogDetails />} />
            </Routes>
            </main>
          </HashRouter>
          <Footer />
        </Suspense>
      </BlogProvider>
    </ThemeProvider>
  );
}
