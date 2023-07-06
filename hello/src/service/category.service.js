import axios from "axios";


const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
class CategoryService{
    
    getAllCategories()
    {
        return axios.get(BASE_API_URL + "/Category");

    }

    async saveCategory(category) {
        const response = axios.post(BASE_API_URL + "/Category", category, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        });
        response.headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, OPTION",
        };

        return response;
    }
}

export default new CategoryService();