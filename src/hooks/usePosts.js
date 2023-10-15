import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log('Function getSortedPosts invoked');
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(
            post => post.title.toLowerCase().includes(query.toLowerCase())
        )
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;
}

export const usePagination = (totalCountPages) => {

    const pagesArray = useMemo(() => {

        let resultArray = [];
        console.log('function usePagination invoked');
        for (let i = 0; i < totalCountPages; i++) {
            resultArray.push(i + 1)
        }

        return resultArray;

    }, [totalCountPages])

    return pagesArray;
}