import { SiAngular } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import  { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { DiDocker } from "react-icons/di";

export default function Expertise() {
    return (
        <>
        <section className="page-section mx-5 my-2" id="services">
        <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Expertise</h2>
                    <h3 className="section-subheading text-muted">Jr. Full Stack Developer</h3>
                </div>
                <div className="row w-100 text-center">
                    <div className="col-md-3">
                        <SiJavascript size={120}/>
                        <h4 className="my-3">JavaScript</h4>
                        <p className="text-muted">Cedicated JavaScript developer building efficient, interactive, and scalable web applications with clean, modern code.</p>
                    </div>
                    <div className="col-md-3">
                        <FaReact size={120} />
                        <h4 className="my-3">React</h4>
                        <p className="text-muted">Building user interfaces with React, leveraging component-based architecture for scalable web applications.</p>
                    </div>
                    <div className="col-md-3">
                        <SiTypescript size={120}/>
                        <h4 className="my-3">TypeScript</h4>
                        <p className="text-muted">Proficient in TypeScript, writing clean, scalable, and type-safe code that enhances reliability and maintainability.</p>
                    </div>
                    <div className="col-md-3">
                        <SiAngular size={120}/>
                        <h4 className="my-3">Angular</h4>
                        <p className="text-muted">Passionate Angular developer creating dynamic, responsive, and user-friendly web applications.</p>
                    </div>
                    
                    <div className="col-md-3">
                        <FaNodeJs size={125} />
                        <h4 className="my-3">Node.js</h4>
                        <p className="text-muted">Building scalable and efficient server-side applications using Node.js, enabling fast and non-blocking backend services.</p>
                    </div>
                    <div className="col-md-3">
                        <SiExpress size={125} />
                        <h4 className="my-3">Express.js</h4>
                        <p className="text-muted">Developing RESTful APIs and backend services using Express.js, ensuring structured routing, middleware management, and efficient server logic.</p>
                    </div>
                    <div className="col-md-3">
                        <SiPostgresql size={125} />
                        <h4 className="my-3">PostgreSQL</h4>
                        <p className="text-muted">Designing and managing relational databases using PostgreSQL, handling complex queries, structured data, and reliable data storage.</p>
                    </div>
                    <div className="col-md-3">
                        <DiDocker size={125} />
                        <h4 className="my-3">Docker</h4>
                        <p className="text-muted">Containerizing applications using Docker to ensure consistent development, testing, and deployment environments across different systems.</p>
                    </div>
                    <div className="col-md-3">
                        <SiTailwindcss size={120}/>
                        <h4 className="my-3">Tailwind CSS</h4>
                        <p className="text-muted">Creative Tailwind developer crafting sleek, responsive, and visually consistent interfaces with precision.</p>
                    </div>
                    <div className="col-md-3">
                        <FaBootstrap size={120}/>
                        <h4 className="my-3">Bootstrap</h4>
                        <p className="text-muted">Experienced in Bootstrap, creating clean, responsive, and scalable interfaces with modern UI components.</p>
                    </div>
                    <div className="col-md-3">
                        <SiGit size={120}/>
                        <h4 className="my-3">Git</h4>
                        <p className="text-muted">Experienced with Git, managing version control efficiently through organized workflows, branching, and collaborative practices.</p>
                    </div>
                    <div className="col-md-3">
                        <DiResponsive size={125} />
                        <h4 className="my-3">Responsive Design</h4>
                        <p className="text-muted">Creating responsive designs that provide an optimal viewing experience across a wide range of devices.</p>
                    </div>
                </div>
            </div>
            </section>
        </>
    )

}
