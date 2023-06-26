import axios from "axios";


const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
class StoreService{
    
    getAllStores()
    {
        return axios.get(BASE_API_URL + "/Store");

    }
}

export default new StoreService();