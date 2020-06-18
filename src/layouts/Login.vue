<template>
    <div class="row">
        <div class="column1" align="left">
            <h1>Welcome to Custos</h1>
            <p>Sign up and start authenticating.</p>
            <!-- <img src='https://securityintelligence.com/wp-content/uploads/2018/10/si-advanced-authentication-feature-630x330.jpg' /> -->
            <!-- <img src="D:/Airavata/custos-admin/custos-admin/src/assets/images/auth.jpg" /> -->
            <img :src="require('D:/Airavata/custos-admin/custos-admin/src/assets/images/auth.jpg')" />
        </div>
        <div class="column2">
            <LoginPage />
        </div>
    </div>
</template>

<script>
import LoginPage from '../components/LoginPage.vue';

export default {
    name: "Login",
    components: {
        LoginPage
    }
}
</script>

<style scoped>
.row {
    display: flex
}
.column1 {
    flex: 1;
    width: 500px;
    height: 500px;
    margin: 100px;
}
.column2 {
    flex: 1
}
p {
    font-size: 18px;
}

h1 {
    font-size: 40px;
    font-weight: bold;
    color: black;
}
</style>