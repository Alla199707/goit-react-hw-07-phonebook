import axios from 'axios';

axios.defaults.baseURL = 'https://644f91eab61a9f0c4d25c138.mockapi.io';

export async function fetchAll() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addContact(text) {
  const response = await axios.post('/contacts', text);
  return response.data;
}

export async function deleteContact(id) {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
}
