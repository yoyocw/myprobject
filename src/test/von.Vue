<template>
    <div>
        <button v-on:click="counter +=1">增加一次</button>
        <p>这个按钮被点击了{{counter}}</p>
        <button v-on:click="say('yes')">say yes</button>
        <button v-on:click="say('no')">say no</button>
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
            return {counter: 0}
        },
         methods:{
          say:function (value) {
             alert(value)
          }
         }
    }
</script>
