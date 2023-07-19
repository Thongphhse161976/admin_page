import axios from "axios";
import UserAuth from "../components/login/AuthContext";

const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
const user = JSON.parse(localStorage.getItem('dataKey'));
class UserService {

    getAllUsers() {
        return axios.get(BASE_API_URL + "/User",{
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Authorization" : `Bearer ${user.stsTokenManager.accessToken}`,
            }
        });

    }

    async saveUser(user) {
        const response = axios.post(BASE_API_URL + "/User", user, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization' : `Bearer ${user.accessToken}`,
            }
        });
        response.headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, OPTION",
        };

        return response;
    }

    getAllRoles() {
        return axios.get(BASE_API_URL + "/Role");
    }
}

export default new UserService();