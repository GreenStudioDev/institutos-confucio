import axios from "axios";
import { useEffect, useState } from "react";



const UseInstitutes = () => {
    const [institutes, setInstitutes] = useState([]);

useEffect(() => {
    const getInstitute = async () => {
        const response = await axios
        .get("https://fab.local/wp-json/fab/v1/institutes")
        .then((res) => res.data)
        .catch((err) => console.error(err));
        setInstitutes(response)
        
          return institutes
        };
        getInstitute()
}, [institutes]);

    return  institutes;
}
 
export default UseInstitutes;