import axios from "axios";


const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
class ReviewService{
    
    getAllReviews()
    {
        return axios.get(BASE_API_URL + "/Review");

    }
}

export default new ReviewService();