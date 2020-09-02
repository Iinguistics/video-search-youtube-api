import axios from 'axios';

const KEY = 'AIzaSyCJ79hoRweConjBhY7yv4eOaqySDoEUokw';

export default  axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});