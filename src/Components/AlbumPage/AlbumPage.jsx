/* eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import ArtistCard from '../ArtistCard/ArtistCard';
// import FlipMove from 'react-flip-move';
import './AlbumPage.css';


const AlbumPage = ({albumsData, addFavorite, handlerYoutube}) => {
    return (
        <div className='content'>
            {albumsData.map((el, index) => <ArtistCard url={el.image[2]['#text']}
                                                       name={el.name}
                                                       info={el.artist}
                                                       key={el.name + el.url}
                                                       addFavorite={addFavorite}
                                                       index={index}
                                                       type='favoriteAlbums'
                                                       checkArr='albumsData'
                                                       typeIntresting='intrestingAlbums'
                                                       handlerYoutube={handlerYoutube}

            />)}
        </div>
    )
};

export default AlbumPage;
