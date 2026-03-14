import profile from "../assets/profile.jpg";

const skills = [
  "HTML & CSS", "JavaScript/TypeScript", "React.js", "Angular.js",
  "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS",
  "Bootstrap", "Redux", "Git",
];

export default function About() {
  return (
    <section
      className="py-16 sm:py-20 md:py-28 border-t border-light-glass-border dark:border-dark-glass-border
        bg-light-elevated dark:bg-dark-surface"
    >
      <div className="container mx-auto px-5 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3 flex justify-center animate-fade-in-up">
            <div className="relative inline-block">
              <img
                src={profile}
                alt="Riddhik Mohite"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover
                  border-4 border-accent
                  shadow-lg"
              />
              <div className="absolute -inset-2 rounded-full bg-accent opacity-15 -z-10 animate-pulse-glow" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3 text-center lg:text-left animate-fade-in-up delay-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold uppercase text-light-text dark:!text-white mb-4 sm:mb-6">
              About Me
            </h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-4 text-sm sm:text-base">
              Hi, I'm Riddhik Mohite, an Angular & React developer with a passion
              for building dynamic, responsive, and user-friendly web
              applications. I enjoy transforming ideas into clean and interactive
              interfaces, and I'm constantly learning to keep up with the latest
              web technologies.
            </p>
            <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
              Over the years, I've worked on various projects ranging from
              portfolio websites to e-commerce platforms. I value clean code,
              collaboration, and creating solutions that make an impact.
            </p>

            <h5 className="font-heading font-bold text-light-text dark:!text-white mb-3">
              Skills
            </h5>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-heading font-semibold
                    bg-light-glass dark:bg-dark-glass
                    border border-light-glass-border dark:border-dark-glass-border
                    text-accent
                    hover:bg-accent/10 hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,212,170,0.15)]
                    transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}