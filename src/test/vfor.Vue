<template>
    <div>
       <ol>
         <li v-for="site in tt">
           {{site.name}}
         </li>
       </ol>
        {{msg}}
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
            return {
              msg: '这个是vfor模板页',
              tt:[
                {name:'Runoob'},
                {name:'Google'},
                {name:'Taobao'}
              ]
            }
        }
    }
</script>
