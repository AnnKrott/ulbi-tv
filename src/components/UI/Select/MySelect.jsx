import React from "react"

const MySelect = ({ defaultValue, options, value, onChange }) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
            style={{ fontSize: '14px', fontFamily: 'inherit' }}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option => {
                return <option key={option.value} value={option.value}>{option.title}</option>
            })}
        </select>
    )
};

export default MySelect;
