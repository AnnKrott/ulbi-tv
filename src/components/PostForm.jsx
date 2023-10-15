import React, { useState } from "react";
import MyInput from "./UI/Input/MyInput";
import MyBtn from "./UI/Button/MyBtn";

const PostForm = ({ create }) => {

    const [post, setPost] = useState({
        title: '',
        body: '',
    })

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost);
        setPost({
            title: '',
            body: '',
        });
    }

    return (
        <form>

            <MyInput
                type='text'
                placeholder='Post name'
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                type='text'
                placeholder='Post description'
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}

            />

            <MyBtn onClick={addNewPost} >Create</MyBtn>
        </form>
    )
};

export default PostForm;
