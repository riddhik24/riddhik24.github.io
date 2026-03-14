/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BlogContext } from "./BlogContext";

export default function BlogDetails() {
  const { path } = useParams();
  const blogs = useContext(BlogContext);
  const [filteredBlog, setFilteredBlog] = useState<any>({});

  useEffect(() => {
    setFilteredBlog(blogs?.blogs.filter((blog: any) => blog.path == path)?.[0]);
  }, [blogs, path]);

  return (
    <section className="py-16 sm:py-20 md:py-28 min-h-screen bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-16 max-w-4xl">
        <div
          className="rounded-2xl animate-fade-in-up
            bg-light-surface dark:bg-dark-glass
            border border-light-glass-border dark:border-dark-glass-border
            shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-none overflow-hidden"
        >
          <div className="p-5 sm:p-6 md:p-8">
            <Link
              to="/blogs"
              className="inline-flex items-center text-accent font-semibold text-sm no-underline hover:text-accent-light transition-colors mb-4"
            >
              <i className="fas fa-arrow-left mr-2" />
              Back to Blogs
            </Link>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-light-text dark:text-dark-text mt-2 mb-4">
              {filteredBlog?.title}
            </h2>
          </div>
          <div className="px-5 sm:px-6 md:px-8 pb-6 sm:pb-8">
            {filteredBlog ? (
              <div>
                <h4 className="text-accent font-heading font-bold mb-3 text-base sm:text-lg">Answer</h4>
                <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                  {filteredBlog?.shortDesc}
                </p>
              </div>
            ) : (
              <h2 className="text-light-text dark:text-dark-text font-heading">Blog was not found</h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
