<template>
    <div class="container" align="left">
        <p class="heading">Sign Up</p>
        <p>Already have an account? <a class="link" href="#">Login</a></p>
        <br />
        <form>
            <CustomInput labelName="USERNAME" inputType="text" />
            <CustomInput labelName="EMAIL" inputType="email" />
            <CustomInput labelName="PASSWORD" inputType="password" />
            <br />
            <CustomButton color="coral" class="btn" labelName="SIGN UP" />      
        </form>
    </div>
</template>

<script>
import CustomButton from '../components/CustomButton.vue';
import CustomInput from '../components/CustomInput.vue';
export default {
    name: "LoginPage",
    components: {
        CustomButton,
        CustomInput
    }
}
</script>

<style scoped>

.container {
    width: 500px;
    height: 500px;
}
.heading {
    font-size: 50px;
    color: black;
    font-weight: bold;
}
.link {
    color: #ff6600;
    /* margin-left: -100px; */
}
.btn {
    margin-left: 0px;
}

</style>