import axios from "axios";


const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
class RatingService{
    
    getAllRating()
    {
        return axios.get(BASE_API_URL + "/Rating");

    }
}

export default new RatingService();