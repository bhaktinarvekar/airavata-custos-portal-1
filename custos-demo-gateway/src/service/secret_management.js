import api from "./api.js";
import axios from "axios";

var qs = require('qs');

const secretMgtEndpoint = "https://custos.scigap.org/apiserver/resource-secret-management/v1.0.0"

export default {

    addSSHCredential(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = secretMgtEndpoint + "/secret/ssh"
        return api().post(endpoint, params.body, {
            headers: authHeader
        })
    },

    addPasswordCredential(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = secretMgtEndpoint + "/secret/password"
        return api().post(endpoint, params.body, {
            headers: authHeader
        })
    },

    getSSHCredential(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = secretMgtEndpoint + "/secret/ssh"
        return api().get(endpoint, {
            params: {
                token: params.token,
                client_id: params.client_id
            },
            headers: authHeader
        })
    },

    getPasswordCredential(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = secretMgtEndpoint + "/secret/password"
        return api().get(endpoint, {
            params: {
                token: params.token,
                client_id: params.client_id
            },
            headers: authHeader
        })
    },
    deleteSSHCredential(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = secretMgtEndpoint + "/secret/ssh"
        return new Promise((resolve, reject) => {
            axios({
                method: 'delete',
                url: endpoint,
                headers: authHeader,
                params: {client_id: params.client_id, token: params.token}
            }).then((resp) => {
                resolve(resp)
            }).catch(errr => {
                reject(errr)
            })
        })
    },

    deletePasswordCredential(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = secretMgtEndpoint + "/secret/password"
        return new Promise((resolve, reject) => {
            axios({
                method: 'delete',
                url: endpoint,
                headers: authHeader,
                params: {client_id: params.client_id, token: params.token}
            }).then((resp) => {
                resolve(resp)
            }).catch(errr => {
                reject(errr)
            })
        })
    },

    getAllCredentials(par) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(par.client_id + ':' + par.client_sec)}
        let endpoint = secretMgtEndpoint + "/secret/summaries"
        console.log(par)
        return api().get(endpoint, {
            params: par.params,
            headers: authHeader,
            paramsSerializer: params => {
                return qs.stringify(params, {indices: false})
            }
        })

    }


}