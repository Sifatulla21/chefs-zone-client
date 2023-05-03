import React from 'react';
import error from '../../../public/404-error-template-3.webp';
const Error = () => {
    return (
        <div>
            <img className="img-fluid w-100 h-100" src={error} alt="" />
        </div>
    );
};

export default Error;