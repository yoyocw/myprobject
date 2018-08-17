<template>
    <div>
      <p>{{msg}}</p>
      <input v-model="msg"/>
    </div>
</template>

<style>
    body {
        background-color: #f9fbff;
    }
</style>

<script>
    export default {
        data() {
            return {msg: '这是一个双向绑定'}
        }
    }
</script>
