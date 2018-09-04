/* eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import cardImg from './music_with_skull.jpg'
import youtube from './youtube.svg';
import add from './add.svg';
import favorite from './favorite.svg'
import './ArtistCard.css';

const ArtistCard = ({name, info, url, addFavorite, index, type, checkArr, typeIntresting, handlerYoutube}) => {

    return (
        <div className="artist-card">
            <figure>
                <div className="img-container">
                    <img src={url !== '' ? url : cardImg} alt="artist" className="artist-card__img"/>
                    <div className="card__overlay">
                        <div className="svg-container">
                            <img src={youtube}
                                 alt="youtube"
                                 className='card__svg'
                                 onClick={handlerYoutube}
                                 data-query={`${typeof info === 'object' ? info.name : ''} ${name}`}
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
                    </div>
                </div>

                <figcaption>
                    <p className="artist-card__name">{name}</p>
                    <p className="artist-card__number-albums">{typeof info === 'object' ? info.name : info}</p>
                </figcaption>

            </figure>

        </div>
    );
};

export default ArtistCard;
