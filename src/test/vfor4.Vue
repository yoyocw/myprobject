<template>
    <div>
       <ul>
          <li v-for="(value,key,index) in object">
            {{index}}.{{value}}.{{key}}

          </li>

       </ul>
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
              name:'百度',
               url:'http://www.baidu.com',
                slogan: '学的不仅是技术，更是梦想'

             }
            }
        }
    }
</script>
