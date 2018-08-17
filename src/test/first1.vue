<template>
  <div>
    <div>{{demo}}</div>
     <h1>{{site}} </h1>
    <h1 v-html="url"></h1><!--这是v-html指令-->
    <h1> {{details()}}</h1>

  </div>
</template>

<script type="text/javascript">
   export default {
     name: 'HelloWorld',
     data () {
       return {
         demo:'123',
         msg: 'Welcome to Your Vue.js App',
         site: "入门练习",
         url:"<h1>我爱你</h1>",
         alexa:"10000"
       }
     },methods:{
       details:function(){
         return  this.site+"这是梦想";
       }
     }
   }

</script>
