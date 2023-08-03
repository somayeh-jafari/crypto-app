import React from 'react';

import spinner from "../gif/spinner.gif"

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='loading'/>
        </div>
    );
};

export default Loader;