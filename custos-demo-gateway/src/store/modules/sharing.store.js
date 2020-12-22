import sharing_management from "@/service/sharing_management";

const getDefaultState = () => {
    return {
        entities: [],
        permissionTypes: [],
        entityTypes: [],
        sharings: []
    }
}

const state = getDefaultState()

const actions = {

    async createPermissionType({commit}, data) {
        let response = await sharing_management.createPermissionType(data)
        if (response.data.status) {
            commit('ADD_PERMISSION_TYPE', data.body.permission_type)
        }
        return state.permissionTypes
    },

    async deletePermissionType({commit}, data) {
        let response = await sharing_management.deletePermissionType(data)
        if (response.data.status) {
            commit('REMOVE_PERMISSION_TYPE', data.body.permission_type)
        }
        return state.permissionTypes
    },

    async createEntityType({commit}, data) {
        let response = await sharing_management.createEntityType(data)
        if (response.data.status) {
            commit('ADD_ENTITY_TYPE', data.body.entity_type)
        }
        return state.entityTypes
    },

    async deleteEntityType({commit}, data) {
        let response = await sharing_management.deleteEntityType(data)
        if (response.data.status) {
            commit('REMOVE_ENTITY_TYPE', data.body.entity_type)
        }
        return state.entityTypes
    },

    async createEntity({commit}, data) {
        let response = await sharing_management.createEntity(data)
        if (response.data.status) {
            commit('ADD_ENTITY', data.body.entity)
        }
        return state.entities
    },

    async deleteEntity({commit}, data) {
        let response = await sharing_management.deleteEntity(data)
        if (response.data.status) {
            commit('REMOVE_ENTITY', data.body.entity)
        }
        return state.entities
    },

    async getPermissionTypes({commit}, data) {
        let response = await sharing_management.getPermissionTypes(data)
        commit('SET_PERMISSION_TYPES', response.data.types)
        return response.data.types
    },

    async getEntityTypes({commit}, data) {
        let response = await sharing_management.getEntityTypes(data)
        commit('SET_ENTITY_TYPES', response.data.types)
        return response.data.types
    },

    async getEntities({commit}, data) {
        let response = await sharing_management.getEntities(data)
        commit('SET_ENTITIES', response.data.entity_array)
        return response.data.entity_array
    },

    // eslint-disable-next-line no-unused-vars
    async getListOfSharedUsers({commit}, data) {
        let response = await sharing_management.getListOfSharedUsers(data)
        return response.data.owner_ids
    },

    // eslint-disable-next-line no-unused-vars
    async getListOfSharedGroups({commit}, data) {
        let response = await sharing_management.getListOfSharedGroups(data)
        return response.data.owner_ids
    },


    // eslint-disable-next-line no-unused-vars
    async shareEntityWithUsers({commit}, data) {
        let response = await sharing_management.shareEntityWithUsers(data)
        return response.data.status
    },


    // eslint-disable-next-line no-unused-vars
    async shareEntityWithGroups({commit}, data) {
        let response = await sharing_management.shareEntityWithGroups(data)
        return response.data.status
    },

    // eslint-disable-next-line no-unused-vars
    async revokeEntitySharingFromUsers({commit}, data) {
        let response = await sharing_management.revokeEntitySharingFromUsers(data)
        return response.data.status
    },

    // eslint-disable-next-line no-unused-vars
    async revokeEntitySharingFromGroups({commit}, data) {
        let response = await sharing_management.revokeEntitySharingFromGroups(data)
        return response.data.status
    },

    // eslint-disable-next-line no-unused-vars
    async userHasAccess({commit}, data) {
        let response = await sharing_management.userHasAccess(data)
        return response.data.status
    },

    // eslint-disable-next-line no-unused-vars
    async reset({commit}, data){
        commit('RESET')
        return true
    }
}

const mutations = {

    ADD_PERMISSION_TYPE(state, data) {
        state.permissionTypes.push(data)
    },

    REMOVE_PERMISSION_TYPE(state, data) {
        let permTypes = []
        state.permissionTypes.forEach(perm => {
            if (perm.id != data.id) {
                permTypes.push(perm)
            }
        })
        state.permissionTypes = permTypes
    },

    ADD_ENTITY_TYPE(state, data) {
        state.entityTypes.push(data)
    },

    REMOVE_ENTITY_TYPE(state, data) {
        let permTypes = []
        state.entityTypes.forEach(perm => {
            if (perm.id != data.id) {
                permTypes.push(perm)
            }
        })
        state.entityTypes = permTypes
    },

    ADD_ENTITY(state, data) {
        state.entities.push(data)
    },

    REMOVE_ENTITY(state, data) {
        let permTypes = []
        state.entities.forEach(perm => {
            if (perm.id !== data.id) {
                permTypes.push(perm)
            }
        })
        state.entities = permTypes
    },

    SET_PERMISSION_TYPES(state, data) {
        state.permissionTypes = data
    },

    SET_ENTITY_TYPES(state, data) {
        state.entityTypes = data
    },

    SET_ENTITIES(state, data) {
        state.entities = data
    },

    SET_SHARING(state, data) {
        state.sharings = data
    },

    RESET(state) {
        Object.assign(state, getDefaultState())
    }


}

const getters = {

    getEntities(state) {
        return state.entities
    },
    getPermissionTypes(state) {
        return state.permissionTypes
    },
    getEntityTypes(state) {
        return state.entityTypes
    },

    getSharings(state) {
        return state.sharings
    },



}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}