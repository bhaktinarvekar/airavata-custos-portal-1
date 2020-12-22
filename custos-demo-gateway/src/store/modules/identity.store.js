/*Identity.store.js*/

import identity_management from "@/service/identity_management";
import auth from "@/service/auth";


const state = {
    authorizationEndpoint: null,
    idToken: localStorage.getItem('id_token') || '',
    accessToken: localStorage.getItem('access_token') || '',
    refreshToken: localStorage.getItem('refresh_token') || '',
    currentUserName: null
}
const actions = {

    async fetchAuthorizationEndpoint({commit}, data) {
        let resp = await identity_management.getOpenIdConfig(data)
        let baseURL = resp.data.authorization_endpoint
        this.authorizartionURL = baseURL + "?response_type=code&client_id=" + data.client_id + "&" +
            "redirect_uri="+data.redirect_uri+"&scope=openid&kc_idp_hint=oidc"
        commit('SET_AUTH_ENDPOINT', this.authorizartionURL)

    },

    async authenticateUsingCode({commit}, data) {
        let resp = await identity_management.getToken(data)
        commit('SET_AUTH_TOKEN', resp.data)
    },

    async authenticateLocally({commit}, data) {
        try {
            let resp = await identity_management.localLogin(data)
            commit('SET_AUTH_TOKEN', resp.data)
        }catch (e) {
            return false
        }
    },

    async logout({commit}, data) {
        let dat = {
            client_id: data.client_id,
            client_sec: data.client_sec,
            refresh_token: auth.getRefreshToken()
        }
        await identity_management.logout(dat)
        commit('CLEAR_AUTH_TOKEN', data)
    },

    // eslint-disable-next-line no-unused-vars
    async isAuthenticated({commit}, data) {
        try {
            let resp = auth.isLoggedIn()
            if (!resp) {
                let dat = {
                    client_id: data.client_id,
                    client_sec: data.client_sec,
                    refresh_token: auth.getRefreshToken()
                }
                let response = await identity_management.getTokenUsingRefreshToken(dat)
                commit('SET_AUTH_TOKEN', response.data)
                return auth.isLoggedIn()
            }
            return true
        } catch (e) {
            commit('CLEAR_AUTH_TOKEN')
        }

    },


    // eslint-disable-next-line no-unused-vars
    async isLoggedUserHasAdminAccess({commit, data}){
        return auth.isUserHasAdminAccess()
    },

    // eslint-disable-next-line no-unused-vars
      async getCurrentUserName({commit}, data){
          return auth.getLoggedUsername()
      }

}


const mutations = {

    SET_AUTH_ENDPOINT(state, data) {
        state.authorizationEndpoint = data
    },

    SET_AUTH_TOKEN(state, data) {
        auth.clearIdToken()
        auth.clearAccessToken()
        auth.clearRefreshToken()
        auth.setIdToken(data.id_token)
        auth.setAccessToken(data.access_token)
        auth.setRefreshToken(data.refresh_token)
        state.token = data.id_token
        state.accessToken = data.access_token
        state.refreshToken = data.refresh_token
    },

    // eslint-disable-next-line no-unused-vars
    CLEAR_AUTH_TOKEN(state, data) {
        auth.clearIdToken()
        auth.clearAccessToken()
        auth.clearRefreshToken()
        state.idToken = ''
        state.accessToken = ''
        state.refreshToken = ''
    }
}

const getters = {
    getAuthorizationEndpoint(state) {
        return state.authorizationEndpoint
    },
    isAuthenticated() {
        return auth.isLoggedIn()
    },

    getAccessToken(state) {
        return state.accessToken;
    },


}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}