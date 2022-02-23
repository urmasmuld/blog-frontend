import React from 'react';
import './view.css';

interface Props {
    children: React.ReactNode;
}

const View = (props: Props) => {
    

    return(
        <div className='view' {...props} />
    );
}

export default View;