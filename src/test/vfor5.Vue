<template>
    <div>
        {{msg}}
        <ul >
         <li v-for="n in 50">{{n}}</li>
        </ul>

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
            return {msg: '这个是for循环迭代模板页'}
        }
    }
</script>
