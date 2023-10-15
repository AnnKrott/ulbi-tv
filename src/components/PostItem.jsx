import React from "react";
import MyBtn from "./UI/Button/MyBtn";

const PostItem = (props) => {
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
                    <MyBtn onClick={() => props.remove(props.post)} >Delete</MyBtn>
                </div>
            </div>
        </div>
    )
};

export default PostItem;
