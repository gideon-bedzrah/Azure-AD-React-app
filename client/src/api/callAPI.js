import axios from "axios";

export default async function callAPI(token) {

    try {
        var config = {
            method: 'get',
            url: '/api/hello',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const res = await axios(config);
        const result = await res.data;

        console.log(result);
        return result

    } catch (err) {
        console.log(err);
    }

    

}