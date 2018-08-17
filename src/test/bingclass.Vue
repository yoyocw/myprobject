<template>
    <div>
       <div v-bind:class="{active:isActive}"></div>
    </div>
</template>

<style>
    body {
        background-color: #fefdff;
    }
  .active{
      width:100px;
      height: 100px;
       background:yellow;
  }
</style>

<script>
    export default {
        data() {
            return {isActive:true}
        }
    }
</script>
