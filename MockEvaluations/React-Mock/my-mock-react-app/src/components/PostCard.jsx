import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";
const PostCard = ({ post})=>{
    const {updatePost, deletePost}= useContext(PostsContext);
    const [edit, setEdit] = useState(false);
    const [title, setTitle]= useState(post.title)
    const [body, setBody] = useState(post.body);
    const save = () => {
        updatePost(post.id , { ...post, title, body});
        setEdit(false);
    };
    return(
        <div className="card">
            {edit ? (
                <>
                <input value = {title} onChange={e =>setBody(e.target.value)}/>
                <textarea value = {body} onChange={e => setBody(e.target.value)}/>
                <button onClick={save}>Save</button>
                </>
            ) : (
                <>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={()=> setEdit(true)}>Edit</button>
                <button onClick={()=> deletePost(post.id)}>Delete</button>
                </>
            )}
        </div>
    );
};