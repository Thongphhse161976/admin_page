import axios from "axios";


const BASE_API_URL = "https://vinhomesecommercewebapi.azurewebsites.net/api/v1"
class UserService{
    
    getAllUsers()
    {
        return axios.get(BASE_API_URL + "/User");

    }

    saveUser(user)
    {
        return axios.post(BASE_API_URL + "/User", user);
    }

    getAllRoles() {
        return axios.get(BASE_API_URL + "/Role");
      }
}

export default new UserService();