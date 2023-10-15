import React from "react";
import { usePagination } from "../../../hooks/usePosts";


const MyPagination = ({ totalPages, page, changePage }) => {
    let pagesArray = usePagination(totalPages);
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    key={p}
                    className={p === page ? 'page page__current' : 'page'}
                    onClick={() => changePage(p)}
                >
                    {p}
                </span>
            )}
        </div>
    )
};

export default MyPagination;
