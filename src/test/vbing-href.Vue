<template>
    <div>
      <pre><a v-bind:href="url">{{msg}}</a></pre>
      <!--缩写-->
      <!--<pre><a :href="url">{{msg}}</a></pre>-->
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
            return {
              msg:'百度',
              url: 'vif'}
        }
    }
</script>
