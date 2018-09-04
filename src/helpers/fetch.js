import axios from 'axios';

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