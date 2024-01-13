import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <h2>This is Dashboard top</h2>
            {children}
            <h2>This is Dashboard Bottom</h2>
        </div>
    );
};

export default layout;