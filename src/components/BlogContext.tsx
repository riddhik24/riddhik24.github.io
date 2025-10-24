/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {createContext,useState, useEffect, type ReactNode} from "react";


export const BlogContext = createContext<any>(null);

export default function BlogProvider({children}:{children:ReactNode}){
    const [blogs, setBlogs] = useState([]);
    const [tags,setTags] = useState<any[]>([]);
    const [err,setErr] = useState<any>(null);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(()=>{
        setLoading(true);
        fetch("/blogs.json")
        .then(res=>res.json())
        .then((data:any)=>{
            setLoading(false);
            console.log(data);
            setBlogs(data?.blogs || []);  
            const tags = [...new Set(data?.blogs?.flatMap((blog:any)=>blog.tags))];
            console.log("Extracted tags:", tags);
            setTags(tags);
        }).catch((error:any)=>{
            console.log(error);
            setErr(error);
            setLoading(false);
        });
    },[])

    return(
        <BlogContext.Provider value={{blogs,tags,err,loading}}>
            {children}
        </BlogContext.Provider>
    )
}
