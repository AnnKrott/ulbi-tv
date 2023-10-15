import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import ErrorMessage from "../components/ErrorMessage";
import PostWithComments from "../components/PostWithComments";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState('');
    const [comments, setComments] = useState([]);
    const [fetchById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchById(params.id);
        fetchComments(params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <PostWithComments
                post={post}
                comments={comments}
                isLoading={isLoading}
                isComLoading={isComLoading}
            />
            <ErrorMessage error={error} />
            <ErrorMessage error={comError} />

        </div >
    )
};

export default PostIdPage;
