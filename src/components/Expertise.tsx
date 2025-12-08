import { TbBrandAngularFilled } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";
import  { FaReact } from "react-icons/fa";

export default function Expertise() {
    return (
        <>
        <section className="page-section mx-5 my-2" id="services">
        <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Expertise</h2>
                    <h3 className="section-subheading text-muted">Jr. Web Developer</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <TbBrandAngularFilled size={120}/>
                        <h4 className="my-3">Angular</h4>
                        <p className="text-muted">Passionate Angular developer creating dynamic, responsive, and user-friendly web applications.</p>
                    </div>
                    <div className="col-md-4">
                        <DiResponsive size={125} />
                        <h4 className="my-3">Responsive Design</h4>
                        <p className="text-muted">Creating responsive designs that provide an optimal viewing experience across a wide range of devices.</p>
                    </div>
                    <div className="col-md-4">
                        <FaReact size={120} />
                        <h4 className="my-3">React</h4>
                        <p className="text-muted">Building user interfaces with React, leveraging component-based architecture for scalable web applications.</p>
                    </div>
                </div>
            </div>
            </section>
        </>
    )

}
