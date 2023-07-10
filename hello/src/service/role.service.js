import axios from "axios";


const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
class RoleService{
    
    getAllRole()
    {
        return axios.get(BASE_API_URL + "/Role");

    }
}

export default new RoleService();