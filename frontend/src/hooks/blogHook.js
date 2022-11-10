import { BlogContext } from "../contexts/blogContext";
import { useContext } from "react";

export const BlogContextHooks = ()=>{
 const context = useContext(BlogContext)
 if (!context) {
    throw Error('BlogContext must be in BlogContextHooks')
 }
 return context;
}