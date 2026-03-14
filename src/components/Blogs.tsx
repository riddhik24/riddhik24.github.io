/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { BlogContext } from "./BlogContext";
import { Link } from "react-router-dom";

export default function Blogs() {
  const blogs = useContext(BlogContext);
  const [filteredBlogs, setFilteredBlogs] = useState<any>({ blogs: [], tags: [] });
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => { setFilteredBlogs(blogs); }, [blogs]);

  function filterByTag(tag: string) {
    if (!blogs) return;
    if (activeTag === tag) {
      setActiveTag(null);
      setFilteredBlogs(blogs);
      return;
    }
    setActiveTag(tag);
    setFilteredBlogs({
      blogs: blogs.blogs.filter((b: any) => b.tags?.includes(tag)),
      tags: blogs.tags,
    });
  }

  return (
    <section className="py-20 md:py-28 min-h-screen bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4 md:px-8 pt-16">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase text-light-text dark:text-dark-text mb-2">
            Blogs
          </h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary italic">
            Thoughts, tutorials, and interview prep
          </p>
        </div>

        {/* Tags */}
        <div className="text-center mb-10 flex flex-wrap justify-center gap-2 animate-fade-in-up delay-1">
          {filteredBlogs?.tags?.map((tag: any, i: number) => (
            <button
              key={i}
              onClick={() => {
                filterByTag(tag);
                document.getElementById("questions")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-5 py-2 rounded-full text-sm font-heading font-semibold cursor-pointer
                border transition-all duration-200
                ${activeTag === tag
                  ? "bg-accent/15 border-accent text-accent -translate-y-0.5"
                  : "bg-light-glass dark:bg-dark-glass border-light-glass-border dark:border-dark-glass-border text-light-text-secondary dark:text-dark-text-secondary hover:bg-accent/10 hover:border-accent hover:text-accent hover:-translate-y-0.5"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div id="questions">
          {filteredBlogs?.blogs?.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredBlogs.blogs.map((blg: any, index: number) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl flex flex-col animate-fade-in-up delay-${(index % 6) + 1}
                    bg-light-surface dark:bg-dark-glass
                    border border-light-glass-border dark:border-dark-glass-border
                    shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none
                    hover:-translate-y-1 hover:border-accent/15
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]
                    transition-all duration-500`}
                >
                  <h5 className="font-heading font-bold text-lg text-light-text dark:text-dark-text mb-3">
                    {blg?.title}
                  </h5>
                  {blg?.shortDesc && (
                    <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed flex-grow mb-4">
                      {blg.shortDesc}
                    </p>
                  )}
                  <Link
                    to={"/blogdetail/" + blg?.path}
                    className="mt-auto text-accent font-semibold text-sm no-underline hover:text-accent-light transition-colors"
                  >
                    Read more <i className="fas fa-arrow-right ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-light-text-muted dark:text-dark-text-muted">No blogs found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
