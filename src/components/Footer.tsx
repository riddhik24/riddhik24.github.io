import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="py-6 sm:py-8 text-center font-heading text-xs sm:text-sm border-t
        bg-light-elevated dark:bg-dark-surface
        border-light-glass-border dark:border-dark-glass-border
        text-light-text-secondary dark:text-dark-text-secondary"
    >
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:gap-5 lg:flex-row lg:justify-between">
          <div className="order-2 lg:order-1">Copyright &copy; Riddhik Mohite 2025</div>

          <div className="flex items-center gap-3 order-1 lg:order-2">
            <a
              href="https://www.linkedin.com/in/riddhik-mohite-689354259/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full inline-flex items-center justify-center
                bg-light-glass dark:bg-dark-glass
                border border-light-glass-border dark:border-dark-glass-border
                text-light-text-secondary dark:text-dark-text-secondary
                hover:bg-accent/12 hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(0,212,170,0.2)]
                active:scale-95
                transition-all duration-500 no-underline"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://www.github.com/riddhik24/"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full inline-flex items-center justify-center
                bg-light-glass dark:bg-dark-glass
                border border-light-glass-border dark:border-dark-glass-border
                text-light-text-secondary dark:text-dark-text-secondary
                hover:bg-accent/12 hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(0,212,170,0.2)]
                active:scale-95
                transition-all duration-500 no-underline"
            >
              <FaGithub />
            </a>
          </div>

          <div className="flex gap-4 sm:gap-6 order-3">
            <a
              href="#!"
              className="text-light-text-secondary dark:text-dark-text-secondary no-underline hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#!"
              className="text-light-text-secondary dark:text-dark-text-secondary no-underline hover:text-accent transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
