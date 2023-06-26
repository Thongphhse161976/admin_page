import axios from "axios";


const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
class PaymentService{
    
    getALlPayments()
    {
        return axios.get(BASE_API_URL + "/Payment");

    }
}

export default new PaymentService();