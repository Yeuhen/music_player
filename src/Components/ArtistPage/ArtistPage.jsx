/* eslint-disable*/
import React from 'react';
// import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import ArtistCard from '../ArtistCard/ArtistCard';

import './ArtistPage.css';


const ArtistPage = ({artistsData, addFavorite, handlerYoutube}) => {
    return (
        <div className='content'>
            {artistsData.map((el, index) => <ArtistCard url={el.image[2]['#text']}
                                                        name={el.name}
                                                        info={`listeners: ${(+el.listeners).toLocaleString('uk-UK')}`}
                                                        key={el.name + el.url}
                                                        addFavorite={addFavorite}
                                                        index={index}
                                                        type='favoriteArtists'
                                                        checkArr='artistsData'
                                                        typeIntresting='intrestingArtists'
                                                        handlerYoutube={handlerYoutube}
            />)
            }
        </div>
    )
};

export default ArtistPage;
