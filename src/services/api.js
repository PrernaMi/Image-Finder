import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KRY = '20259577-c93c75abc878a636931b34317';
export const getImages = async(text , count) => {
    try{
        return await axios.get(`${API_URL}/?key=${API_KRY}&q=${text}&image_type=photo&per_page=${count}&safe_search=true`);

    }catch(error) {
        console.log('Error while calling the api' , error.message);
    }
}