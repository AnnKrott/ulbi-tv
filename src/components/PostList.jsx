import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './../styles/App.css'

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{ margin: '10px', textAlign: 'center', fontSize: '20px' }}>
                Posts are not found
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'teal' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={200}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div >
    )
};

export default PostList;
