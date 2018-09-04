/* eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import songImg from './skeleton-pixel-chimp.jpg';
import add from './add.svg';
import youtube from './youtube.svg';
import favorite from './favorite.svg';
import './Song.css';

const Songs = ({url, info, name, addFavorite, index, type, checkArr, typeIntresting, handlerYoutube}) => {
    return (
        <div className="songs-item">
            <figure className="songs-item__figure">
                <img className="songs-item__img" src={url !== "" ? url : songImg} alt="image"/>
                <figcaption className="songs-item__discription" >
                    <p className="songs-item__music-name">{name}</p>
                    <p className="songs-item__singer">{typeof info === 'object' ? info.name : info}</p>
                    <div className="svg-song-container">
                        <img src={youtube}
                             alt="youtube"
                             className='card__svg'
                             onClick={handlerYoutube}
                             data-query={`${info.name} ${name}`}
                        />
                        <img src={favorite}
                             alt="favorite"
                             className='card__svg'
                             onClick={addFavorite}
                             data-index={index}
                             data-arr-for-add={type}
                             data-check={checkArr}
                        />
                        <img src={add} alt="add"
                             className='card__svg'
                             onClick={addFavorite}
                             data-index={index}
                             data-arr-for-add={typeIntresting}
                             data-check={checkArr}
                        />
                    </div>
                </figcaption>
            </figure>
        </div>
    );
};

export default Songs;
