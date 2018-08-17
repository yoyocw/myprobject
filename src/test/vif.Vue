<template v-if="seen">
   <!--<div>
        {{msg}}
      <p v-if="ok">{{name}}</p>
    </div>-->

     <div v-if="Math.random()>0.5">
       ok
     </div>
     <div v-else>
          not
     </div>
</template>

<style>
    body {
        background-color: #f6f4ff;
    }
</style>

<script>
    export default {
        data() {
            return {

              name:'判断是否需要插入元素的, 值为true 就插入,false就禁止',
              seen:true,
              ok:true,
              msg: '这个是Home模板页'
            }
        }
    }
</script>
