/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BlogContext } from "./BlogContext";

export default function BlogDetails() {
  const { path } = useParams();
  const blogs = useContext(BlogContext);
  const [filteredBlog, setFilteredBlog] = useState<any>({});
  // const [content, setContent] = useState("");
  useEffect(() => {
    setFilteredBlog(blogs?.blogs.filter((blog: any) => blog.path == path)?.[0]);
  }, [blogs, path]);

  // useEffect(() => {
  //   if (filteredBlog?.path) {
  //     fetch("/blogs.json")
  //       .then((res) => {
  //         if (!res.ok) throw new Error("Response was not found");
  //         return res.text();
  //       })
  //       .then((text) => setContent(text))
  //       .catch((err) => console.error("Error fetching blog content:", err));
  //   }
  // }, [filteredBlog]);



  return (
    <>
      <div className="card mt-4 page-section" id="blogDetails">
        <div className="card-body">
          <Link to="/blogs">Back to Blogs</Link>
          <h2 className="card-title">{filteredBlog?.title}</h2>
        </div>
      </div>
      <div className="card mt-2">
        <div className="card-body">
          <div className="blogContentWrapper">
            {filteredBlog ? (
              <div className="blogContent">
                  <h2>{filteredBlog?.shortDesc}</h2>
                </div>    
            ) : (
              <div className="blogContent">
                <h2>Blog was not found</h2>
                
              </div>
            )}
            </div>
          </div>
        </div>
    </>
  );
}
