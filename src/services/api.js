import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
};

export async function createContact(id) {
    const { data } = await axios.post('/contacts', id);
    return data;

};

export async function removeContact(id) {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
};