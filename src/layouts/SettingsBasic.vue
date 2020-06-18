<template>
    <div>
        <CustomInputText labelName="Name" /><br>
        <CustomInputText labelName="Domain" /><br>
        <CustomInputText labelName="ClientID" /><br>
        <CustomInputPassword labelName="Client Secret" /><br>
        <CustomTextArea labelName="Description" inputRows="3"/><br>
        <CustomButton class="btn" color="coral" labelName="Save Changes" />
    </div>
</template>

<script>
import CustomInputText from '../components/CustomInputText.vue';
import CustomButton from '../components/CustomButton.vue';
import CustomTextArea from '../components/CustomTextArea.vue';
import CustomInputPassword from '../components/CustomInputPassword.vue';

export default {
    name: "SettingsBasic",
    components: {
        CustomInputText,
        CustomButton,
        CustomTextArea,
        CustomInputPassword
    }
}
</script>

<style scoped>
.btn {
    margin-left: 460px;
}
</style>