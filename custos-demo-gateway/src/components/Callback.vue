<template>
    <p></p>
</template>

<script>

    import config from "@/config";

    export default {
        name: "Callback",
        data: function () {
            return {
                username: "",
                password: "",
                custosId: null,
                custosSec: null,
                redirectURI: null,
                tokenEndpoint: null
            }
        },

        methods: {
            async authenticate() {
                let code = this.$route.query.code
                let params = {
                    client_id: this.custosId, client_sec: this.custosSec, code: code,
                    redirect_uri: this.redirectURI, token_endpoint: this.tokenEndpoint
                };
                await this.$store.dispatch('identity/authenticateUsingCode', params)

            }
        },

        computed: {
            isAuthenticated: function () {
                let data = {
                    client_id: this.custosId,
                    client_sec: this.custosSec
                }
                return this.$store.dispatch('identity/isAuthenticated', data)
            }
        },

        async mounted() {
            this.custosId = config.value('clientId')
            this.custosSec = config.value('clientSec')
            this.redirectURI = config.value('redirectURI')
            this.tokenEndpoint = "https://custos.scigap.org/apiserver/identity-management/v1.0.0/token"

            await this.authenticate()
            await this.$router.push('workspace')
        }
    }
</script>

<style scoped>

</style>