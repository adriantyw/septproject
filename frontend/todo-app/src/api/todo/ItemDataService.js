import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class EventDataService 
{
    retrieveAllItems() 
    {
        return axios.get(`${JPA_API_URL}/users/marketplace`);
    }

    retrieveAllUserItems(name) 
    {
        return axios.get(`${JPA_API_URL}/users/${name}/marketplace`);
    }

    retrieveItem(name, id) 
    {
        return axios.get(`${JPA_API_URL}/users/${name}/marketplace/${id}`);
    }

    deleteItem(name, id) 
    {
        return axios.delete(`${JPA_API_URL}/users/${name}/marketplace/${id}`);
    }

    updateItem(name, id, item) 
    {
        return axios.put(`${JPA_API_URL}/users/${name}/marketplace/${id}`, item);
    }

    createItem(name, item) 
    {
        return axios.post(`${JPA_API_URL}/users/${name}/marketplace/`, item);
    }
}

export default new ItemDataService()