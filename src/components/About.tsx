import profile from "../assets/profile.jpg"

export default function About() {
    return (
        <>
        <section className="page-section mx-5 my-2" id="about">
        <div className="row align-items-center">
          <div className="col-lg-4 text-center mb-4">
            <img
              src={profile}
              alt="My Profile"
              className="rounded-circle img-fluid"
            />
          </div>

          <div className="col-lg-8">
            <h2 className="section-heading text-uppercase">About Me</h2>
            <p>
              Hi, I'm Riddhik Mohite, an Angular & React developer with a passion
              for building dynamic, responsive, and user-friendly web
              applications. 
              I enjoy transforming ideas into clean and
              interactive interfaces, and I’m constantly learning to keep up
              with the latest web technologies.
            </p>
            <p>
              Over the years, I’ve worked on various projects ranging from
              portfolio websites to e-commerce platforms. I value clean code,
              collaboration, and creating solutions that make an impact.
            </p>

            <h5 className="mt-4">Skills:</h5>
            <ul className="list-inline">
              <li className="list-inline-item badge bg-primary m-1">Angular</li>
              <li className="list-inline-item badge bg-primary m-1">React</li>
              <li className="list-inline-item badge bg-primary m-1">JavaScript/TypeScript</li>
              <li className="list-inline-item badge bg-primary m-1">HTML & CSS</li>
              <li className="list-inline-item badge bg-primary m-1">Bootstrap</li>
              <li className="list-inline-item badge bg-primary m-1">Firebase</li>
            </ul>
          </div>
        </div>
        </section>
      </>
    )
    
}