import axios from "axios";

const KEY = "AIzaSyAvE7v-mImOeo_-toxpMgJrd3ZdLT1WHAA";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key: KEY
    },
})