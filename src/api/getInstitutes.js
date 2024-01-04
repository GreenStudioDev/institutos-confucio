import axios from "axios";



export const getInstitutes = async () => {
    const response = await axios
    .get("https://fab.local/wp-json/fab/v1/institutes")
    .then((res) => res.data)
    .catch((err) => console.error(err));
    
      return response;
    };