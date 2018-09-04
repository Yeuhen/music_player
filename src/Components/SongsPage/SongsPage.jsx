/* eslint-disable*/
import React from 'react';
import FlipMove from 'react-flip-move';
// import PropTypes from 'prop-types';
import Song from '../Song/Song';
import './SongsPage.css';


const SongsPage = ({songsData, addFavorite, handlerYoutube}) => {
    return (
        <FlipMove>
            <div className='content'>
                {songsData.map((el, index) => <Song url={el.image[1]['#text']}
                                                    name={el.name}
                                                    info={el.artist}
                                                    key={el.name + el.url}
                                                    addFavorite={addFavorite}
                                                    index={index}
                                                    type='favoriteSongs'
                                                    checkArr='songsData'
                                                    typeIntresting='intrestingSongs'
                                                    handlerYoutube={handlerYoutube}
                />)}
            </div>
        </FlipMove>

    )
};

export default SongsPage;
