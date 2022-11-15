import axios from "axios";
import { useEffect, useState } from "react";



const UseInstitutes = () => {
    const [institutes, setInstitutes] = useState([]);

useEffect(() => {
    const getInstitute = async () => {
        const response = await axios
        .get("https://fundacionandresbello.org/wp-json/fab/v1/institutes")
        .then((res) => res.data)
        .catch((err) => console.log(err));
        setInstitutes(response)
        
          return institutes
        };
        getInstitute()
}, [institutes]);

console.log("🚀 ~ file: getInstitutes.js ~ line 25 ~ useInstitutes", institutes)
    return  institutes;
}
 
export default UseInstitutes;