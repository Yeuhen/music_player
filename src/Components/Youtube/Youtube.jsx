import React from 'react';
import './Youtube.css';

const Youtube = ({videoId, handlerYoutube}) => {
    console.log(`https://www.youtube.com/embed/${videoId}?feature=oembed`);
    return (
        <div className='player'>
            <p className='close' onClick = {handlerYoutube}>&#10006;</p>
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className='iframe'>
            </iframe>
        </div>
    );
};

export default Youtube;