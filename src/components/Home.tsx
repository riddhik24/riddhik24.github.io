import { Link } from "react-router-dom";
import Expertise from "./Expertise";
import About from "./About";
import Contact from "./Contact";
import Resume from "../assets/Resume.pdf";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-24 pb-16
          bg-light-bg dark:bg-dark-bg"
      >
        {/* Floating orbs — solid colors */}
        <div className="absolute -top-1/2 -right-[20%] w-[600px] h-[600px] rounded-full bg-accent/[0.05] animate-float pointer-events-none dark:bg-accent/[0.07]" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[500px] h-[500px] rounded-full bg-accent-purple/[0.03] animate-float pointer-events-none dark:bg-accent-purple/[0.05]"
          style={{ animationDirection: "reverse", animationDuration: "10s" }}
        />

        <div className="container mx-auto px-5 sm:px-6 relative z-10">
          <p className="text-accent uppercase tracking-[0.15em] font-heading font-medium text-sm sm:text-base md:text-lg mb-4 animate-fade-in-up">
            Hello, I'm Riddhik
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black uppercase leading-tight mb-6 animate-fade-in-up delay-1
            text-light-text dark:!text-white"
            style={{ animationDelay: "0.1s" }}
          >
            Full Stack<br />Developer
          </h1>

          <p className="max-w-xl mx-auto text-light-text-secondary dark:text-dark-text-secondary text-base sm:text-lg mb-10 animate-fade-in-up delay-2 px-2">
            Building dynamic, responsive, and user-friendly web applications
            with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up delay-3 px-4 sm:px-0">
            <Link
              to="/blogs"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-heading font-bold text-sm uppercase tracking-wider text-center
                bg-accent text-dark-bg
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,212,170,0.25)] hover:bg-accent-light
                transition-all duration-500"
            >
              Read My Blogs
            </Link>
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-heading font-semibold text-sm uppercase tracking-wider text-center
                border-2 border-accent text-accent
                hover:bg-accent hover:text-dark-bg hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,212,170,0.2)]
                transition-all duration-500"
            >
              <i className="fas fa-download mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <Expertise />
      <About />
      <Contact />
    </>
  );
}
