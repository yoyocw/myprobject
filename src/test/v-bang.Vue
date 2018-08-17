<script src="https://cdn.bootcss.com/vue/2.2.2/vue.min.js"></script>
<template>

    <div>
        <label for="r1">修改颜色</label>
      <input type="checkbox" v-model="class1" id="r1">
      <br></br>
         <div v-bind:class="{'class1':class1}">
           directiva v-bind:class
          </div>
        {{msg}}
    </div>
</template>

<style>
  .class1{
    background: #444;
    color: #eee;
  }
    body {
        background-color: #FEFFF9;
    }
</style>

<script>
    export default {
        data() {
            return {msg: '这个是v-bang模板页',
                    class1:false}
        }
    }
</script>
