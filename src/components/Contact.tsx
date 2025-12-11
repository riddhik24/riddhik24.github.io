import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const clearForm = () =>{
    setForm({
        name:"",
        email:"",
        phone:"",
        message:""
    });
  }

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const mailto = `mailto:riddhik.work@gmail.com
        ?subject=New Message from ${form.name}
        &body=
        Name: ${form.name}%0D%0A
        Email: ${form.email}%0D%0A
        Phone: ${form.phone}%0D%0A
        Message:%0D%0A${form.message}
        `;

        window.location.href = mailto;

        clearForm();
  };

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
        </div>

        <form id="contactForm" onSubmit={(e) => handleSubmit(e)}>
          <div className="row align-items-stretch mb-5">
            {/* Left column */}
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  value={form.email}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>

              <div className="form-group mb-md-0">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone *"
                  value={form.phone}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={(e) => handleChange(e)}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center text-white mb-3">
              <div className="fw-bolder">Form submission successful!</div>
            </div>
          </div>

          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>

          <div className="text-center">
            <button
              className="btn btn-primary btn-xl text-uppercase"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
