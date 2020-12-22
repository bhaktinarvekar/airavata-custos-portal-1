import api from "./api.js";
import axios from "axios";


const agentMgtEndpoint = "https://custos.scigap.org/apiserver/agent-management/v1.0.0"

export default {

    enableAgents(params) {
        let authHeader = {'Authorization': 'Bearer ' + params.user_token}
        let endpoint = agentMgtEndpoint + "/enable"
        return api().post(endpoint, {}, {
            headers: authHeader
        })
    },

    registerAgent(params) {
        let authHeader = {'Authorization': 'Bearer ' + params.user_token}
        let endpoint = agentMgtEndpoint + "/agent"
        return api().post(endpoint, params.body, {
            headers: authHeader
        })
    },

    getAgent(params) {
        let authHeader = {'Authorization': 'Bearer ' + params.user_token}
        let endpoint = agentMgtEndpoint + "/agent/" + params.agent_id
        return api().get(endpoint, {
            headers: authHeader
        })
    },

    activateAgent(params) {
        let authHeader = {'Authorization': 'Bearer ' + params.user_token}
        let endpoint = agentMgtEndpoint + "/agent/activation/" + params.agent_id
        return api().post(endpoint, {}, {
            headers: authHeader
        })
    },

    deactivateAgent(params) {
        let authHeader = {'Authorization': 'Bearer ' + params.user_token}
        let endpoint = agentMgtEndpoint + "/agent/deactivation/" + params.agent_id
        return api().post(endpoint, {}, {
            headers: authHeader
        })
    },


    addAttributesToAgent(params) {
        let authHeader = {'Authorization': 'Bearer ' + params.user_token}
        let endpoint = agentMgtEndpoint + "/agent/attributes"
        return api().post(endpoint, params.body, {
            headers: authHeader
        })

    },

    deleteAttributesFromAgent(params) {
        let authHeader = {'Authorization': 'Bearer ' + params.user_token}
        let endpoint = agentMgtEndpoint + "/agent/attributes"

        return new Promise((resolve, reject) => {
            axios({
                method: 'delete',
                url: endpoint,
                data: params.body,
                headers: authHeader
            }).then((resp) => {
                resolve(resp)
            }).catch(errr => {
                reject(errr)
            })
        })
    },


    getAllAgents(params) {
        let authHeader = {'Authorization': 'Bearer ' + params.user_token}
        let endpoint = agentMgtEndpoint + "/agents"
        return api().get(endpoint, {
            headers: authHeader
        })

    },

    addRolesToAgent(params) {
        let authHeader = {'Authorization': 'Bearer ' + params.user_token}
        let endpoint = agentMgtEndpoint + "/agent/roles"

        return api().post(endpoint, params.body, {
            headers: authHeader
        })
    },

    deleteRolesFromAgent(params) {
        let authHeader = {'Authorization': 'Bearer ' + params.user_token}
        let endpoint = agentMgtEndpoint + "/agent/roles"

        return new Promise((resolve, reject) => {
            axios({
                method: 'delete',
                url: endpoint,
                data: params.body,
                headers: authHeader
            }).then((resp) => {
                resolve(resp)
            }).catch(errr => {
                reject(errr)
            })
        })
    },



}