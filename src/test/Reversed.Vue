<template>
    <div>
      <p>原字符串:{{msg}}</p>
      <p>计算反转过后的字符串:{{reversedmsg}}</p>
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
            return {
               msg: '这个是Home模板页',


            }
        },
      computed:{
        reversedmsg:function () {
          return this.msg.split('').reverse().join('')
        }
      }
    }
</script>
