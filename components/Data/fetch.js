import axios from "axios";

const Data = {
getAll: () => axios.get("https://restcountries.com/v3.1/all"),
getbySearch: (params) => axios.get(`https://restcountries.com/v3.1/name/${params.name}`),
getbyFilter: (params) => axios.get(`https://restcountries.com/v3.1/region/${params.region}`),
getByName : (name) => axios.get(`https://restcountries.com/v2/name/${name}`),
}

export default Data

