import api from "./api.js";
import axios from "axios";

const sharingMgtEndpoint = "https://custos.scigap.org/apiserver/sharing-management/v1.0.0"

export default {

    createPermissionType(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = sharingMgtEndpoint + "/permission/type"
        return api().post(endpoint, params.body, {
            headers: authHeader
        })
    },

    deletePermissionType(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = sharingMgtEndpoint + "/permission/type"

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

    getPermissionTypes(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = sharingMgtEndpoint + "/permission/types"
        let par = {client_id: params.client_id}
        return api().get(endpoint, {
            params: par,
            headers: authHeader
        })
    },

    createEntityType(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = sharingMgtEndpoint + "/entity/type"
        return api().post(endpoint, params.body, {
            headers: authHeader
        })
    },

    deleteEntityType(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = sharingMgtEndpoint + "/entity/type"

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

    getEntityTypes(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = sharingMgtEndpoint + "/entity/types"
        let par = {client_id: params.client_id}
        return api().get(endpoint, {
            params: par,
            headers: authHeader
        })
    },

    createEntity(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = sharingMgtEndpoint + "/entity"
        return api().post(endpoint, params.body, {
            headers: authHeader
        })
    },

    deleteEntity(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = sharingMgtEndpoint + "/entity"

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

    getEntities(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = sharingMgtEndpoint + "/entities"
        return api().post(endpoint, params.body,{
            headers: authHeader
        })
    },

    getListOfSharedUsers(data) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(data.client_id + ':' + data.client_sec)}
        let endpoint = sharingMgtEndpoint + "/users/share"
        return api().get(endpoint, {
            params: data.params,
            headers: authHeader
        })
    },

    getListOfSharedGroups(data) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(data.client_id + ':' + data.client_sec)}
        let endpoint = sharingMgtEndpoint + "/groups/share"
        return api().get(endpoint, {
            params: data.params,
            headers: authHeader
        })
    },

    shareEntityWithUsers(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = sharingMgtEndpoint + "/users/share"
        return api().post(endpoint, params.body, {
            headers: authHeader
        })

    },

    shareEntityWithGroups(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = sharingMgtEndpoint + "/groups/share"
        return api().post(endpoint, params.body, {
            headers: authHeader
        })

    },

    revokeEntitySharingFromUsers(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = sharingMgtEndpoint + "/users/share"
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

    revokeEntitySharingFromGroups(params) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(params.client_id + ':' + params.client_sec)}
        let endpoint = sharingMgtEndpoint + "/groups/share"
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

    userHasAccess(data) {
        let authHeader = {'Authorization': 'Bearer ' + btoa(data.client_id + ':' + data.client_sec)}
        let endpoint = sharingMgtEndpoint + "/entity/user/access"
        return api().get(endpoint, {
            params: data.params,
            headers: authHeader
        })
    }

}