import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", message: "",
  });

  const clearForm = () => setForm({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:riddhik.work@gmail.com?subject=New Message from ${form.name}&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AMessage:%0D%0A${form.message}`;
    window.location.href = mailto;
    clearForm();
  };

  const inputClasses = `w-full px-5 py-4 rounded-xl font-body transition-all duration-200
    bg-light-glass dark:bg-dark-glass
    border border-light-glass-border dark:border-dark-glass-border
    text-light-text dark:text-dark-text
    placeholder:text-light-text-muted dark:placeholder:text-dark-text-muted
    focus:outline-none focus:border-accent focus:ring-3 focus:ring-accent/12
    focus:bg-white dark:focus:bg-white/5`;

  return (
    <section
      className="py-20 md:py-28 border-t border-light-glass-border dark:border-dark-glass-border
        bg-light-bg dark:bg-dark-surface"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase text-light-text dark:text-dark-text mb-2">
            Get In Touch
          </h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary italic">
            Have a question or want to work together? Drop me a message.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="animate-fade-in-up delay-2">
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="flex flex-col gap-5">
              <input className={inputClasses} id="name" type="text" placeholder="Your Name *" value={form.name} onChange={handleChange} required />
              <input className={inputClasses} id="email" type="email" placeholder="Your Email *" value={form.email} onChange={handleChange} required />
              <input className={inputClasses} id="phone" type="tel" placeholder="Your Phone *" value={form.phone} onChange={handleChange} required />
            </div>
            <textarea
              className={`${inputClasses} min-h-[180px] md:min-h-full resize-vertical`}
              id="message" placeholder="Your Message *" value={form.message} onChange={handleChange} required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-4 rounded-full font-heading font-bold text-sm uppercase tracking-wider cursor-pointer
                bg-gradient-to-r from-accent to-accent-purple text-dark-bg
                hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,212,170,0.25)]
                transition-all duration-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
