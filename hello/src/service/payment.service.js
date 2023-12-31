import axios from "axios";
import UserAuth from "../components/login/AuthContext";

const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
const user = JSON.parse(localStorage.getItem('dataKey'));
class PaymentService{
    
    getALlPayments()
    {
        return axios.get(BASE_API_URL + "/Payment",{
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Authorization" : `Bearer ${user.stsTokenManager.accessToken}`,
            }
        });

    }
}

export default new PaymentService();