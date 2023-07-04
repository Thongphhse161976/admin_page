import axios from "axios";


const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
class StoreService{
    
    getAllStores()
    {
        return axios.get(BASE_API_URL + "/Store");
    }
    
    /*getPagination(pageindex, pagesize) {
        return axios.get(`${BASE_API_URL}/Store/pagination?pageindex=${pageindex}&pagesize=${pagesize}`);
      }
    */
}

export default new StoreService();