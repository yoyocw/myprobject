<template>
    <div>
      <ul>
          <li v-for="value in object">
            {{value}}
          </li>
      </ul>
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
                object:{
                    name:'百度',
                     url:'http://www.baidu.com',
                     slogan:'学的不仅是技术，更是梦想'
             }
            }
        }
    }
</script>
