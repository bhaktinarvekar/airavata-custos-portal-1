import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: 'https://custos.scigap.org/apiserver/',
        withCredentials: false,
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        }
    })
}
