import axios from 'axios';
import {API_URL_BASE} from '../../configs/backendAPI';

export const fetchAllData = () => axios.get(`${API_URL_BASE}/`);
export function fetchData(url) {
    return axios.get(url).then(({data, status}) => {
            if (status === 200) {
                return data;
            }
        }
    )
}

export function getLocal(key) {
    return JSON.parse(localStorage.getItem(key)) !== null ? JSON.parse(localStorage.getItem(key)) : []
}

export function getYoutube(query) {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAecHJZnOuuNBUl4UaHRSqJEot9xHIuNXI&part=snippet&maxResults=1&type=video&q=${query}`).then(({data, status}) => {
        if (status === 200) {
            return data.items[0].id.videoId || data.items[0].id.cannelId
        }
    })
}





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