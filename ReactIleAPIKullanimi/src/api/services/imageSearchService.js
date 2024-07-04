import axios from 'axios';


const BASE_URL = 'https://api.unsplash.com/';

export const  searchImages = async (term) =>{
    let response;
    try {
        console.log(`${BASE_URL}/search/photos`);
      response =  await axios.get(`${BASE_URL}/search/photos`,{
        headers:{
          Authorization:'-'
        },
        params:{
          query:term
        }
      });
      return response.data.results;
    } catch (error) {
      console.log(error)
      throw error;
    }
};
