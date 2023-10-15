import React from "react";
import MyBtn from "./UI/Button/MyBtn";
import './../styles/App.css';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    let navigate = useNavigate();
    const navigateToPost = () => {
        navigate(`/posts/${props.post.id}`)
    }

    return (
        <div>
            <div className='post' >
                <div className='post__content'>
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className='post__btns'>
                    <MyBtn onClick={navigateToPost} >Open</MyBtn>
                    <MyBtn onClick={() => props.remove(props.post)} >Delete</MyBtn>
                </div>

            </div>
        </div>
    )
};

export default PostItem;
