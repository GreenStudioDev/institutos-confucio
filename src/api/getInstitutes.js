import axios from "axios";



export const getInstitutes = async () => {
    const response = await axios
    .get("https://fundacionandresbello.org/wp-json/fab/v1/institutes")
    .then((res) => res.data)
    .catch((err) => console.log(err));
    
      return response;
    };