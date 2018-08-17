<template>
    <div>
        {{msg}}
      <button v-on:click="reverseMsg">反转字符</button>
    </div>
</template>

<style>
    body {
        background-color: #fff6f9;
    }
</style>

<script>
    export default {
        data() {
            return {msg: 'helloworld'}
        },
      methods:{
           reverseMsg:function () {
             this.msg = this.msg.split('').reverse().join('')
           }
      }
    }
</script>
