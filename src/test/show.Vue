<template>
    <div>
       <h1 v-show="ok">helloword</h1>
    </div>
</template>

<style>
    body {
        background-color: #fffdfd;
    }
</style>

<script>
    export default {
        data() {
            return {ok:true}
        }
    }
</script>
