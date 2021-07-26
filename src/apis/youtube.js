import axios from 'axios'

const KEY = 'AIzaSyABR6gFEiZC8FnLptXtRymbFxMBmhnt_6U'
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})