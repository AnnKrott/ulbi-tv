import React from "react";
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({ filter, setFilter }) => {

    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder='Search'
                style={{ width: '90vw' }}
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='Sort'
                options={[
                    { value: 'title', title: 'by name' },
                    { value: 'body', title: 'by body' }
                ]}
            />
        </div>
    )
};

export default PostFilter;
