import React from "react"

const ErrorMessage = (props) => {
    return (
        <div>
            {
                props.error &&
                <h3 style={{ textAlign: 'center', color: 'teal', marginTop: '15px' }}>{props.error}</h3>
            }
        </div>
    )
};

export default ErrorMessage;
