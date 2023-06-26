import axios from "axios";


const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
class CategoryService{
    
    getAllCategories()
    {
        return axios.get(BASE_API_URL + "/Category");

    }
}

export default new CategoryService();