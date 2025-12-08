/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { BlogContext } from "./BlogContext";
import { Link } from "react-router-dom";

export default function Blogs() {
  const blogs = useContext(BlogContext);
  const [filteredBlogs, setFilteredBlogs] = useState<any>({
    blogs: [],
    tags: [],
  });

  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  useEffect(() => {
    console.log("Filtered Blogs updated:", filteredBlogs);
  }, [filteredBlogs]);

  function filterByTag(tag: string) {
    console.log("Filtering by tag:", tag);
    if (!blogs) return;
    const filtered = {
      blogs: blogs.blogs.filter((b: any) => b.tags?.includes(tag)),
      tags: blogs.tags,
    };
    setFilteredBlogs(filtered);
  }

  return (
    <section className="page-section" id="blogs">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9 mb-4">
            <h2>Blogs</h2>
            <div className="blogsContainer">
              {filteredBlogs?.blogs?.length > 0 ? (
                filteredBlogs.blogs.map((blg: any, index: number) => (
                  <div key={index} className="card mt-4">
                    <div className="card-body">
                      <h5 className="card-title">{blg?.title}</h5>
                      {blg?.shortDesc && (
                        <p className="card-text">{blg.shortDesc}</p>
                      )}
                      <Link to={"/blogdetail/" + blg?.path}>Read more</Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>No blogs found.</p>
              )}
              </div>
          <div className="col-md-3 mb-4 position-realtive">
              <h2 className="mt-4">Tags</h2>
              <div className="blogsContainer">
                {filteredBlogs?.tags?.length > 0 && (
                  <ul className="mt-3 list-group">
                    {filteredBlogs.tags.map((tag: any, index: number) => (
                      <li
                      key={index}
                      onClick={() => filterByTag(tag)}
                      className="list-group-item list-group-item-action"
                      style={{ cursor: "pointer" }}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
                </div>
              </div>
          </div>
          </div>
      </div>
    </section>
  );
}
