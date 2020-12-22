/*Secret.store.js*/

import secret_management from "@/service/secret_management";


const getDefaultState = () => {
    return {
        secrets: []
    }
}

const state = getDefaultState()

const actions = {

    async addSSHCredential({commit}, data) {
        let resp = await secret_management.addSSHCredential(data)
        commit('ADD_SECRET', resp.data.token)
        return resp.data
    },


    async addPasswordCredential({commit}, data) {
        let resp = await secret_management.addPasswordCredential(data)
        commit('ADD_SECRET', resp.data.token)
        return resp.data
    },


    // eslint-disable-next-line no-unused-vars
    async getSSHCredential({commit}, data) {
        let resp = await secret_management.getSSHCredential(data)
        return resp.data
    },


    // eslint-disable-next-line no-unused-vars
    async getPasswordCredential({commit}, data) {
        let resp = await secret_management.getPasswordCredential(data)
        return resp.data
    },

    async deleteSSHCredential({commit}, data) {
        let resp = await secret_management.deleteSSHCredential(data)
        if (resp.data.status) {
            commit('DELETE_SECRET', data.token)
        }
        return resp.data
    },

    async deletePassswordCredential({commit}, data) {
        let resp = await secret_management.deletePasswordCredential(data)
        if (resp.data.status) {
            commit('DELETE_SECRET', data.token)
        }
        return resp.data
    },

    // eslint-disable-next-line no-unused-vars
    async getAllCredentials({commit}, data) {
        let dat = {
            client_id: data.client_id, client_sec: data.client_sec, params: {
                client_id: data.client_id,
                accessible_tokens: data.accessible_tokens
            }
        }
        console.log(dat)
        let response = await secret_management.getAllCredentials(dat)
        return response.data.metadata
    },

    // eslint-disable-next-line no-unused-vars
    async reset({commit}, data){
        commit('RESET')
        return true
    }

}

const mutations = {

    ADD_SECRET(state, data) {
        state.secrets.push(data)
    },

    DELETE_SECRET(state, data) {
        let secrets = []
        state.secrets.forEach(sec => {
            if (sec != data) {
                secrets.push(sec)
            }
        })
        state.secrets = secrets
    },

    RESET(state) {
        Object.assign(state, getDefaultState())
    }

}

const getters = {

    getSecrets(state) {
        return state.secrets
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}