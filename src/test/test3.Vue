+<template>
    <div>
        {{5+5}}<br/>
        {{ok?'yes':'on'}}<br/>
        {{msg.split('').reverse().join('')}} <!--颠倒位置-->
        <div v-bang:id="'list-'+id">菜鸟</div>
    </div>
</template>

<style>
    body {
        background-color: #FCFAFF;
    }
</style>

<script>
    export default {
        data() {
            return {
              ok:true,
              msg: 'hello',
              id:1000
            }
        }
    }
</script>
