import { SiAngular } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { DiDocker } from "react-icons/di";

const skills = [
  { Icon: SiJavascript, name: "JavaScript", desc: "Building efficient, interactive, and scalable web applications with clean, modern code.", color: "#f7df1e" },
  { Icon: FaReact, name: "React", desc: "Building user interfaces with React, leveraging component-based architecture for scalable web applications.", color: "#61dafb" },
  { Icon: SiTypescript, name: "TypeScript", desc: "Writing clean, scalable, and type-safe code that enhances reliability and maintainability.", color: "#3178c6" },
  { Icon: SiAngular, name: "Angular", desc: "Creating dynamic, responsive, and user-friendly web applications with Angular framework.", color: "#dd0031" },
  { Icon: FaNodeJs, name: "Node.js", desc: "Building scalable server-side applications using Node.js with fast, non-blocking backend services.", color: "#339933" },
  { Icon: SiExpress, name: "Express.js", desc: "Developing RESTful APIs and backend services using Express.js with structured routing and middleware.", color: "#888" },
  { Icon: SiPostgresql, name: "PostgreSQL", desc: "Designing and managing relational databases with complex queries and reliable data storage.", color: "#336791" },
  { Icon: DiDocker, name: "Docker", desc: "Containerizing applications to ensure consistent development and deployment environments.", color: "#2496ed" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", desc: "Crafting sleek, responsive, and visually consistent interfaces with utility-first CSS.", color: "#06b6d4" },
  { Icon: FaBootstrap, name: "Bootstrap", desc: "Creating clean, responsive, and scalable interfaces with modern UI components.", color: "#7952b3" },
  { Icon: SiGit, name: "Git", desc: "Managing version control efficiently through organized workflows and collaborative practices.", color: "#f05032" },
  { Icon: DiResponsive, name: "Responsive Design", desc: "Creating responsive designs providing optimal experience across all devices.", color: "#00d4aa" },
];

export default function Expertise() {
  return (
    <section
      className="py-20 md:py-28 border-t border-light-glass-border dark:border-dark-glass-border
        bg-light-bg dark:bg-dark-bg"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase text-light-text dark:text-dark-text mb-2 animate-fade-in-up">
            Expertise
          </h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary italic font-body animate-fade-in-up delay-1">
            Jr. Full Stack Developer
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group p-6 text-center rounded-2xl cursor-default relative overflow-hidden
                animate-fade-in-up delay-${(index % 6) + 1}
                bg-light-surface dark:bg-dark-glass
                border border-light-glass-border dark:border-dark-glass-border
                shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none
                hover:-translate-y-2 hover:border-accent/20
                hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_30px_rgba(0,212,170,0.08)]
                transition-all duration-500`}
            >
              <skill.Icon
                size={48}
                style={{ color: skill.color }}
                className="mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(0,212,170,0.4)]"
              />
              <h4 className="font-heading font-bold text-sm md:text-base text-light-text dark:text-dark-text mb-2">
                {skill.name}
              </h4>
              <p className="text-light-text-secondary dark:text-dark-text-secondary text-xs md:text-sm leading-relaxed mb-0">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
