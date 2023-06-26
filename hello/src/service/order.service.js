import axios from "axios";


const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
class OrderService{
    
    getAllOrders()
    {
        return axios.get(BASE_API_URL + "/Order");

    }
}

export default new OrderService();