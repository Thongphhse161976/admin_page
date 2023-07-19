import axios from "axios";
import UserAuth from "../components/login/AuthContext";

const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
const user = JSON.parse(localStorage.getItem('dataKey'));
class StoreService{
    
    getAllStores()
    {
        return axios.get(BASE_API_URL + "/Store",{
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Authorization" : `Bearer ${user.stsTokenManager.accessToken}`,
            }
        });
    }
    
    async saveStore(store) {
        const response = axios.post(BASE_API_URL + "/Store", store, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Authorization" : `Bearer ${user.stsTokenManager.accessToken}`,
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