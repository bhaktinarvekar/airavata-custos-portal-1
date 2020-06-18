<template>
   <div>
       <CustomAppBar />
       <h1 class="heading" align="left">Create New Tenant</h1>
       <div class="stepper">
           <div v-bind:class="[step===1 ? 'stepActive' : 'step']">Step 1</div>
           <div v-bind:class="[step===2 ? 'stepActive' : 'step']">Step 2</div>
           <div v-bind:class="[step>=3 ? 'stepActive' : 'step']">Step 3</div>
       </div>
       <div v-if="step===1" class="section" >
           <TenantStepOne />
        </div> 
        <div v-if="step===2" class="section" >
           <TenantStepTwo />
        </div> 
        <div v-if="step>=3" class="section" >
           <TenantStepThree />
        </div> 
        <div class="btn">
            <CustomButton v-on:click="nextStep" color="coral" labelName="NEXT" /> 
        </div>
    </div> 
</template>

<script>
import CustomAppBar from '../components/CustomAppBar.vue';
import TenantStepOne from './TenantStepOne.vue';
import CustomButton from '../components/CustomButton.vue';
import TenantStepTwo from './TenantStepTwo.vue';
import TenantStepThree from './TenantStepThree.vue';

export default {
    name: "NewTenant",
    components: {
        CustomAppBar,
        TenantStepOne,
        CustomButton,
        TenantStepTwo,
        TenantStepThree
    },
    data() {
        return {
            step: 1,
            totalSteps: 3,
        }
    },
    methods: {
       nextStep() {
           this.step++;
       } 
    }
}
</script>

<style scoped>
.heading {
    color: black;
    font-size: 30px;
    margin-left: 50px;
    font-weight: bold;
    margin-top: 15px;
}
.section {
    margin-top: 50px;;
}
.stepper {
    width: 100%;
    height: 50px;
    border: 2px black solid;
    margin-top: 15px;;
    display: flex
}
.btn {
    margin-left: 1300px;
}
.step {
    flex: 1;
    background-color: white;
    color: black;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    border: 1px solid black;
}
.stepActive{
    flex: 1;
    background-color: black;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    border: 1px solid black;
}
</style>