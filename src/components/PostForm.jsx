import React, { useState } from "react";
import MyInput from "./UI/Input/MyInput";
import MyBtn from "./UI/Button/MyBtn";
import './../styles/App.css'
import axios from "axios";

const PostForm = ({ create }) => {

    const [post, setPost] = useState({
        title: '',
        body: '',
    })

    const addNewPost = async (e) => {
        e.preventDefault();

        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
        console.log(response.data);

        const newPost = {
            ...response.data,
        };
        create(newPost);
        setPost({
            title: '',
            body: '',
            id: '',
        });

    }

    return (
        <form className="form">

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
