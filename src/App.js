import React, {Component} from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Search from './Components/Search/Search';
import ArtistPage from './Components/ArtistPage/ArtistPage';
import SongsPage from './Components/SongsPage/SongsPage';
import AlbumPage from './Components/AlbumPage/AlbumPage';
import Logo from './Components/Logo';
import {fetchData, getLocal, getYoutube} from './helpers/fetch'; // export не дефолтний
import {Switch, Route} from 'react-router-dom';
// import Youtube from './Components/Youtube/Youtube';
import Spinner from './ui-kit/Spinner';
import './App.css';


class App extends Component {

    state = {
        artistsData: [],
        songsData: [],
        albumsData: [],
        searchValue: '',
        isLoading: true,
        favoriteArtists: [],
        favoriteAlbums: [],
        favoriteSongs: [],
        intrestingArtists: [],
        intrestingAlbums: [],
        intrestingSongs: [],
        youtubeIsActive: false,
        videoId: '',
        showAside: false,
    };


    componentDidMount() {
        fetchData('https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e900a41307805d11c3527e8aeebf5d4b&limit=48&format=json').then(data => (
            this.setState({
                artistsData: data.artists.artist.sort((a, b) => (+b.listeners) - (+a.listeners)),
                isLoading: false,
                favoriteArtists: getLocal('favoriteArtists'),
                intrestingArtists: getLocal('intrestingArtists'),
            })
        ));

        fetchData('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e900a41307805d11c3527e8aeebf5d4b&limit=48&format=json').then(data => (
            this.setState({
                songsData: data.tracks.track,
                isLoading: false,
                favoriteSongs: getLocal('favoriteSongs'),
                intrestingSongs: getLocal('intrestingSongs'),
            })
        ));

        fetchData('https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rock&api_key=e900a41307805d11c3527e8aeebf5d4b&limit=48&format=json').then(data => (
            this.setState({
                albumsData: data.albums.album,
                isLoading: false,
                favoriteAlbums: getLocal('favoriteAlbums'),
                intrestingAlbums: getLocal('intrestingAlbums'),

            })
        ));


    }

    addFavorite = ({target}) => {
        const index = target.dataset.index;
        const arrForAdd = target.dataset.arrForAdd;
        const check = target.dataset.check;
        const currentItem = this.state[check][index];
        if (!this.state[arrForAdd].includes(currentItem)) {
            this.setState(prev => ({
                [arrForAdd]: [currentItem, ...prev[arrForAdd]]
            }), () => {
                localStorage.setItem(`${arrForAdd}`, JSON.stringify(this.state[arrForAdd]))
            })
        }
    };

    inputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value.toLowerCase();
        this.setState({
            [name]: value,
        })
    };

    searchData = (e) => {
        e.preventDefault();
        if (this.state.searchValue === '') {
            return
        }
        fetchData(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&limit=28&format=json`)
            .then(({results}) => (
                this.setState({
                    artistsData: results.artistmatches.artist
                })));

        fetchData(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&limit=28&format=json`)
            .then(({results}) => (
                this.setState({
                    albumsData: results.albummatches.album
                })));

        fetchData(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&limit=28&format=json`)
            .then(({results}) => (
                this.setState({
                    songsData: results.trackmatches.track
                })));
    };

    handlerYoutube = ({target}) => {
        if (target.className === 'close') {
            this.setState({
                youtubeIsActive: false
            })
        } else {
            const query = target.dataset.query;
            console.log(query);
            getYoutube(query).then(data => {
                this.setState({
                    youtubeIsActive: true,
                    videoId: data,
                })
            });
        }
    };

    showSidebar = () => {
        this.setState({
            showAside: !this.state.showAside,
        })
    };


    render() {
        const {artistsData, songsData, albumsData, searchValue, isLoading, favoriteArtists, favoriteSongs, favoriteAlbums, intrestingArtists, intrestingAlbums, intrestingSongs, videoId, showAside} = this.state;
        return (
            <div className='wrapper'>
                <div className='container'>
                    <Sidebar showAside={showAside}/>
                    <Logo/>
                    <main className='main'>
                        <Search value={searchValue}
                                onChange={this.inputChange}
                                handlerSearch={this.searchData}
                                handlerYoutube={this.handlerYoutube}
                                youtubeIsActive={this.state.youtubeIsActive}
                                videoId={videoId}
                                showSidebar={this.showSidebar}
                        />
                        {isLoading ? <div className='loader'>
                                <Spinner/>
                            </div>
                            :
                            <div>
                                <Switch>
                                    <Route exact path='/'
                                           render={() => <ArtistPage artistsData={artistsData}
                                                                     addFavorite={this.addFavorite}
                                                                     handlerYoutube={this.handlerYoutube}

                                           />}/>
                                    <Route exact path='/FavouriteArtists'
                                           render={() => <ArtistPage artistsData={favoriteArtists}
                                                                     addFavorite={this.addFavorite}
                                                                     handlerYoutube={this.handlerYoutube}
                                           />}/>
                                    <Route exact path='/IntrestingArtists'
                                           render={() => <ArtistPage artistsData={intrestingArtists}
                                                                     addFavorite={this.addFavorite}
                                                                     handlerYoutube={this.handlerYoutube}
                                           />}/>

                                    <Route exact path='/songs'
                                           render={() => <SongsPage songsData={songsData}
                                                                    addFavorite={this.addFavorite}
                                                                    handlerYoutube={this.handlerYoutube}
                                           />}/>
                                    <Route exact path='/FavouriteSongs'
                                           render={() => <SongsPage songsData={favoriteSongs}
                                                                    handlerYoutube={this.handlerYoutube}
                                           />}/>
                                    <Route exact path='/IntrestingSongs'
                                           render={() => <SongsPage songsData={intrestingSongs}
                                                                    handlerYoutube={this.handlerYoutube}
                                           />}/>

                                    <Route exact path='/albums'
                                           render={() => <AlbumPage albumsData={albumsData}
                                                                    addFavorite={this.addFavorite}
                                                                    handlerYoutube={this.handlerYoutube}
                                           />}/>
                                    <Route exact path='/FavouriteAlbums'
                                           render={() => <AlbumPage albumsData={favoriteAlbums}
                                                                    handlerYoutube={this.handlerYoutube}
                                           />}/>
                                    <Route exact path='/IntrestingAlbums'
                                           render={() => <AlbumPage albumsData={intrestingAlbums}
                                                                    handlerYoutube={this.handlerYoutube}
                                           />}/>
                                </Switch>
                            </div>
                        }
                    </main>
                </div>
            </div>
        )
    }
}

export default App;