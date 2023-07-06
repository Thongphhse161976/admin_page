import axios from "axios";


const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
class StoreService{
    
    getAllStores()
    {
        return axios.get(BASE_API_URL + "/Store");
    }
    
    async saveStore(store) {
        const response = axios.post(BASE_API_URL + "/Store", store, {
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

    getStoreById(id){
        return axios.get(BASE_API_URL + "/Store/"+ id);
    }
}

export default new StoreService();