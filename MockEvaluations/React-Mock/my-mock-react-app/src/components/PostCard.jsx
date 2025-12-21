import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";
const PostCard = ({ post})=>{
    const {updatePost, deletePost}= useContext(PostsContext);
    const [edit, setEdit] = useState(false);
    const [title, setTitle]= useState(post.title)
}