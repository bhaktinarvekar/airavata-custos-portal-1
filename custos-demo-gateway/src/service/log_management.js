import api from "./api.js";


const logMgtEndpoint = "https://custos.scigap.org/apiserver/log-management/v1.0.0"

export default {

    getLogEvents(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = logMgtEndpoint + "/logs"
        return api().get(endpoint,  {
            params:params.params,
            headers: authHeader
        })
    },

    isLoggingEnabled(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = logMgtEndpoint + "/status"
        return api().get(endpoint, {
            headers: authHeader
        })

    },

    enableLogging(params) {
        let authHeader = {'Authorization': 'Bearer ' + params.user_token}
        let endpoint = logMgtEndpoint + "/status"
        return api().post(endpoint, {}, {
            headers: authHeader
        })

    }


}