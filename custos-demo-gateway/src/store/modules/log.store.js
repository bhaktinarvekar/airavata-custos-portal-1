/*log.store.js*/

import log_management from "@/service/log_management";

const getDefaultState = () => {
    return {}
}

const state = getDefaultState()

const actions = {

    // eslint-disable-next-line no-unused-vars
    async getLogEvents({commit}, data) {
        let response = await log_management.getLogEvents(data)
        return response.data.events
    },


    // eslint-disable-next-line no-unused-vars
    async isLoggingEnabled({commit}, data) {
        let response = await log_management.isLoggingEnabled(data)
        return response.data.status
    },


    // eslint-disable-next-line no-unused-vars
    async enableLogging({commit}, data) {
        let response = await log_management.enableLogging(data)
        return response.data.status
    },


}

const mutations = {}

const getters = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}