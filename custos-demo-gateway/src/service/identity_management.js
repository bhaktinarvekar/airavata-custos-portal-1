import api from "./api.js";


const identityMgtEndpoint = "/identity-management/v1.0.0"

export default {

    getOpenIdConfig(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        return api().get(identityMgtEndpoint + '/.well-known/openid-configuration',
            {params: {client_id: params.client_id}, headers: authHeader})
    },

    getToken(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let tokenEnpoint = params.token_endpoint
        let code = params.code
        let redirect_uri = params.redirect_uri
        let body = {'code': code, 'redirect_uri': redirect_uri, 'grant_type': 'authorization_code'}
        return api().post(tokenEnpoint,
            body, {headers: authHeader})
    },

    localLogin(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let tokenEnpoint = params.token_endpoint
        let username = params.username
        let password = params.password
        let body = {'grant_type': 'password', 'username': username, 'password': password}
        return api().post(tokenEnpoint,
            body, {headers: authHeader})
    },


    logout(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endSessionEndpoint = identityMgtEndpoint + "/user/logout"
        let data = {
            refresh_token: params.refresh_token
        }
        return api().post(endSessionEndpoint,
            data, {headers: authHeader})
    },


    getTokenUsingRefreshToken(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let tokenEndpoint = identityMgtEndpoint + "/token"
        let body = {'refresh_token': params.refresh_token, 'grant_type': 'refresh_token'}
        return api().post(tokenEndpoint,
            body, {headers: authHeader})
    }


}