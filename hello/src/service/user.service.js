import axios from "axios";
import UserAuth from "../components/login/AuthContext";

const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
const userToken = JSON.parse(localStorage.getItem('dataKey'));

class UserService {

    getAllUsers() {
        return axios.get(BASE_API_URL + "/User",{
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Authorization" : `Bearer ${userToken.stsTokenManager.accessToken}`,
            }
        });

    }

    async saveUser(user) {
        
        const response = axios.post(BASE_API_URL + "/User", user, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Authorization" : `Bearer ${userToken.stsTokenManager.accessToken}`,
                
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

export default new UserService();