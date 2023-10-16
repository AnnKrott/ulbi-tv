import React from "react"
import MyLoader from "./UI/Loader/MyLoader";
import './../styles/App.css'

const PostWithComments = ({ post, comments, isLoading, isComLoading }) => {
    return (
        <>

            {isLoading
                ? <MyLoader />
                :
                <div className='post__content'>
                    <h2 className='post__title'>Post {post.id}</h2>
                    <strong>{post.title}</strong>
                    <div>{post.body}</div>

                </div >
            }

            {isComLoading
                ? ''
                :
                <>
                    <hr className='divider' />
                    <h2 className='post__title'>Comments</h2>

                    <div className='post__comments' >
                        {comments.map((com, i) =>
                            <div className='comment' key={i}>
                                <h4>{com.email}</h4>
                                <span>{com.body}</span>
                            </div>
                        )}
                    </div>
                </>

            }

        </>
    )
};

export default PostWithComments;
