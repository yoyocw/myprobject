<template>
    <div>
        <input type="radio" id="runoob" value="Runnoob" v-model="picked">
        <label for="runoob" >Runnoob</label>

        <input type="radio" id="google" value="Google" v-model="picked"/>
        <label for="google">Google</label>
       <br/>
       <span>选择的值为:{{picked}}</span>

    </div>
</template>

<style>
    body {
        background-color: #fefdff;
    }
</style>

<script>
    export default {
        data() {
            return {picked: 'Runnoob'}
        }
    }
</script>
