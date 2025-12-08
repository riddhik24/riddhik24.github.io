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

  return (
    <>
      <div className="card m-4 page-section" id="blogDetails">
        <div className="card-body h-auto blogContentWrapper">
          <h2 className="card-title">{filteredBlog?.title}</h2>
          <Link to="/blogs">Back to Blogs</Link>
        </div>
        <div className="card-body">
          <div className="blogContentWrapper">
            {filteredBlog ? (
              <div className="blogContent">
                <h1 className="my-2">Answer:</h1>
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
