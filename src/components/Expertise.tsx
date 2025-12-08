import { SiAngular } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import  { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiGit } from "react-icons/si";

export default function Expertise() {
    return (
        <>
        <section className="page-section mx-5 my-2" id="services">
        <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Expertise</h2>
                    <h3 className="section-subheading text-muted">Jr. Web Developer</h3>
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
