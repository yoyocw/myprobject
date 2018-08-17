<template>
    <div v-if="type=='a'">a</div>
    <div v-else-if="type=='b'">b</div>
    <div v-else-if="type=='c'">c</div>
    <div v-else>
      Not a/b/c

    </div>
</template>

<style>
    body {
        background-color: #f6f7ff;
    }
</style>

<script>
    export default {
        data() {
            return {type: 'c'}
        }
    }
</script>
