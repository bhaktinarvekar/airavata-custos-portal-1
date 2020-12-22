<template>
    <div v-if="showHeader()">
        <div class="header p-3">
            <div class="custos-logo">
                <img src="../assets/custos-logo_custos-logo-color-v1.png" style="width: 140px;">
            </div>
            <div class="user-details" v-if="user">
                <div class="username">{{user.first_name + " "+ user.last_name}}</div>
                <div class="email">{{user.email}}</div>
            </div>

            <b-dropdown right class="ml-2" text="" no-caret toggle-class="user-avatar-button">
                <template v-slot:button-content v-if="user">
                    <b-icon icon="person-fill"></b-icon>
                </template>
                <template v-slot:button-content v-else>
                    <b-spinner small label="Spinning"></b-spinner>
                </template>

                <template v-slot:default v-if="user">
                    <b-dropdown-item href="#" v-on:click="$router.push('/workspace/profile')">Profile</b-dropdown-item>
                    <b-dropdown-item v-on:click="logout">Logout</b-dropdown-item>
                </template>
            </b-dropdown>

        </div>
        <div class="navigation text-left">
            <router-link to="/workspace">
                <b-icon icon="house-door-fill"></b-icon>
            </router-link>
            <router-link to="/workspace/users" v-if="this.isAdmin">Users</router-link>
            <router-link to="/workspace/groups">Groups</router-link>
            <router-link to="/workspace/agents" v-if="this.isAdmin">Service Accounts</router-link>
            <router-link to="/workspace/secrets">Secrets</router-link>
            <router-link to="/workspace/sharings">Sharing</router-link>
            <router-link to="/workspace/logs" v-if="this.isAdmin">logs</router-link>

            <!--            <b-button href="#" variant="link" v-on:click="$router.push('/workspace')">-->
            <!--                <b-icon icon="house-door-fill"></b-icon>-->
            <!--            </b-button>-->
            <!--            <b-button v-if="this.isAdmin" href="#" variant="link" v-on:click="$router.push('/workspace/users')">-->
            <!--                Users-->
            <!--            </b-button>-->
            <!--            <b-button href="#" variant="link" v-on:click="$router.push('/workspace/groups')">-->
            <!--                Groups-->
            <!--            </b-button>-->
            <!--            <b-button v-if="this.isAdmin" href="#" variant="link" v-on:click="$router.push('/workspace/agents')">-->
            <!--                Service Accounts-->
            <!--            </b-button>-->
            <!--            <b-button href="#" variant="link" v-on:click="$router.push('/workspace/secrets')">-->
            <!--                Secrets-->
            <!--            </b-button>-->
            <!--            <b-button href="#" variant="link" v-on:click="$router.push('/workspace/sharings')">-->
            <!--                Sharing-->
            <!--            </b-button>-->
            <!--            <b-button v-if="this.isAdmin" href="#" variant="link" v-on:click="$router.push('/workspace/logs')">-->
            <!--                Logs-->
            <!--            </b-button>-->
        </div>
    </div>
</template>

<script>
    import config from "@/config";

    export default {
        name: "Header",
        data: function () {
            return {
                isAdmin: false,
                user: null,
                authenticated: false
            }
        },
        methods: {
            showHeader() {
                return this.authenticated
            },
            async logout() {
                await this.$store.dispatch('identity/logout', {
                    client_id: config.value('clientId'),
                    client_sec: config.value('clientSec'),
                })

                await this.$router.push("/")
                await this.$store.dispatch('agent/reset')
                await this.$store.dispatch('group/reset')
                await this.$store.dispatch('secret/reset')
                await this.$store.dispatch('sharing/reset')
                await this.$store.dispatch('user/reset')
            },
            async validateAuthentication() {
                this.authenticated = await this.$store.dispatch('identity/isAuthenticated', {
                    client_id: config.value('clientId'),
                    client_sec: config.value('clientSec')
                }) === true

                return this.authenticated
            },
            async fetchAuthenticatedUser() {
                this.isAdmin = await this.$store.dispatch('identity/isLoggedUserHasAdminAccess')
                let currentUserName = await this.$store.dispatch('identity/getCurrentUserName')

                if (await this.validateAuthentication() && (!this.user || this.user.username !== currentUserName)) {
                    let resp = await this.$store.dispatch('user/users', {
                        offset: 0,
                        limit: 1,
                        client_id: config.value('clientId'),
                        client_sec: config.value('clientSec'),
                        username: currentUserName
                    })
                    if (Array.isArray(resp) && resp.length > 0) {
                        resp.forEach(obj => {
                            this.user = {
                                username: obj.username,
                                first_name: obj.first_name,
                                last_name: obj.last_name,
                                email: obj.email,
                                status: obj.state,
                                attributes: [],
                                roles: []
                            }
                        })
                    }
                }
            }
        },
        watch: {
            $route() {
                this.authenticated = false
                this.fetchAuthenticatedUser()
            }
        },
        async beforeMount() {
            this.fetchAuthenticatedUser()
        }
    }
</script>

<style>
    .header {
        display: flex;
    }

    .header .custos-logo {
        flex: 1;
        display: flex;
    }

    .header .custos-logo-icon {
        width: 25px;
        height: 25px;
        border-radius: 8px;
        border: solid 5px #203a43;
        background-color: #ffffff;
        transform: rotate(45deg);
    }

    .header .custos-logo-text {
        font-family: Avenir;
        font-size: 18px;
        font-weight: 900;
        text-align: left;
        color: #203a43;

    }

    .header .user-details .username {
        font-family: Avenir;
        font-size: 15px;
        font-weight: 900;
        text-align: right;
        color: #afafae;
    }

    .header .user-details .email {
        font-family: Avenir;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.07;
        text-align: right;
        color: #203a43;
    }

    .header .user-avatar-button {
        border-radius: 30px;
        width: 35px;
        height: 35px;
        padding: 0px;
        line-height: 0px;
        font-size: 15px;
        background-color: #4a4a4a;
    }

    .navigation {
        background: #fe8c00;
        background: -webkit-linear-gradient(to right, #f83600, #fe8c00);
        background: linear-gradient(to right, #f83600, #fe8c00);
    }

    .navigation a {
        font-family: Avenir;
        font-size: 15px;
        font-weight: 600;
        text-align: left;
        color: white;
        padding: 5px 15px;
        display: inline-block;
        transition: all 0.1s;
    }

    .navigation a:hover {
        color: white;
    }

    .navigation a:focus {
        color: white;
    }

    .navigation a.router-link-exact-active {
        background-color: #00000047;
    }
</style>