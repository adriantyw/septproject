import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class EventDataService 
{
    retrieveAllEvents(name) 
    {
        return axios.get(`${JPA_API_URL}/users/${name}/calendar/event`);
    }

    retrieveEvent(name, id) 
    {
        return axios.get(`${JPA_API_URL}/users/${name}/calendar/event/${id}`);
    }

    deleteEvent(name, id) 
    {
        return axios.delete(`${JPA_API_URL}/users/${name}/calendar/event/${id}`);
    }

    updateEvent(name, id, event) 
    {
        return axios.put(`${JPA_API_URL}/users/${name}/calendar/event/${id}`, event);
    }

    createEvent(name, event) 
    {
        return axios.post(`${JPA_API_URL}/users/${name}/calendar/event/`, event);
    }
}

export default new EventDataService()