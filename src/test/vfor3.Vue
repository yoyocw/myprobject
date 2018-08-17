<template>
    <div>
      <ol >
         <li v-for="(value,key) in object">
            {{key}}:{{value}}

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
            return {msg: '这个是Home模板页',
             object:{
                name:'菜鸟教程',
                url:'http://www.baidu.com',
                slogan: '学的不仅是技术，更是梦想'

             }
            }
        }
    }
</script>
