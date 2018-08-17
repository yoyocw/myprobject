<template>
    <div>
        {{msg | capitalize}}
    </div>
</template>

<style>
    body {
        background-color: #fdf8ff;
    }
</style>

<script>
    export default {
        data() {
            return {msg: '这是参数自定义过滤器'}
        },
       filters:{
         capitalize:function (value) {
           if(!value) return ''
           value=value.toString()
           return value.charAt(0).toUpperCase()+value.slice(1)
         }

       }
    }
</script>
