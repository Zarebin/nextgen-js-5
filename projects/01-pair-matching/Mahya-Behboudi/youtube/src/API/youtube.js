import axios from  'axios';
const keyvalue = "AIzaSyA1EaNPmyS9Rf_pAJyR45zVH1onIrTJSXg";
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part:'snippet',
        maxResults:15,
        key:keyvalue
    },
    headers:{}
})