import axios from "axios";

const institutesApi = axios.create({
    baseURL: 'https://fab.local/wp-json/fab/v1',
})

export default institutesApi;