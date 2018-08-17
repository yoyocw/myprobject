<template>
    <div>
      <p>原字符串:{{msg}}</p>
      <p>计算过后的:{{reversedmsg}}</p>
      <p>使用方法过后的:{{reversedmsg2()}}</p>
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
            return {msg: '这个是Home模板页'}
        },
         computed:{
           reversedmsg:function () {
             return this.msg.split('').reverse().join()
           }
        },
         methods:{
           reversedmsg2:function(){
              return this.msg.split('').reverse().join()
           }
         }
    }
</script>
