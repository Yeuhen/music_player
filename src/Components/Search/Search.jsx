/* eslint-disable*/
import React from 'react';
import Chart from '../Chart/Chart';
import Youtube from '../Youtube/Youtube';

import './Search.css';

const Search = ({value, onChange, handlerSearch, handlerYoutube, youtubeIsActive, videoId, showSidebar}) => {
    return (
        <div className='search'>
            {youtubeIsActive === true ? <Youtube handlerYoutube ={handlerYoutube} videoId={videoId}/> : null}
            <form
                action="#"
                method="post"
                className="search__form"
                onSubmit={handlerSearch}
            >
                <input type="text"
                       className="search__input"
                       placeholder="Search music"
                       value={value}
                       onChange={onChange}
                       name='searchValue'
                />
                <input type="submit"
                       value="search"
                       className="search__btn"/>
                <span className='threeLine' onClick={showSidebar}>&#9776;</span>
            </form>
            <Chart/>
        </div>
    );
};

Search.propTypes = {};
// Search.defaultProps = {};

export default Search;
