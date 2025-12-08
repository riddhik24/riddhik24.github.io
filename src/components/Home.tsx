import { Link } from "react-router-dom";
import Expertise from "./Expertise";
import About from "./About";
import Contact from "./Contact";
import Resume from "../assets/Resume.pdf"

export default function Home() {
  return (
    <>
      <section className="masthead">
        <div className="container" id="page-top">
          <div className="masthead-subheading">Welcome To My Resume</div>
          <div className="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
          <button className={"btn btn-primary btn-xl text-uppercase"}>
            <Link className="nav-link" to="/blogs">
              Read My Blogs
            </Link>
          </button>
          <a href={Resume} target="_blank"><h2 className="my-3">Read My Resume</h2></a>
        </div>
      </section>
      <Expertise />
      <About />
      <Contact />
    </>
  );
}
