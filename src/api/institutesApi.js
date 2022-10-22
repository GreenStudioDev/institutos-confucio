import axios from "axios";

const institutesApi = axios.create({
    baseURL: 'https://fundacionandresbello.org/wp-json/fab/v1',
})

export default institutesApi;