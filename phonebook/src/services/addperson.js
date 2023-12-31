import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(res => res.data);
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject);
    return request.then(res => res.data);
}

const deleteEntry = (id) => {
    const request = axios.delete(baseUrl + '/' + id);
    return request.then(res => res.data);
}

const update = (personObject) => {
    const request = axios.put(baseUrl + '/' + personObject.id, personObject);
    return request.then(res => res.data);
}

export default { 
    getAll,
    create,
    deleteEntry,
    update
}