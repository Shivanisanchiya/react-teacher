import axios from "axios";


 const BASE_URL = "http://localhost:8085/teachers";

class helper {

    getteachers(){
        return axios.get(BASE_URL);
    }
}

export default new helper()