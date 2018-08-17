
    <!--添加Vue.js-->
     <!--<script src="@/js/vue.min.js"></script>

    &lt;!&ndash; 添加bootstrap样式 &ndash;&gt;
    <link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="http://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>-->

<template>

          <div>

              <div class="addUser">
                <button class="btn btn-danger btn-sm" id="addbtn" @click="add">添加个人信息</button>

              </div>
                    <table class="demo" align="center">
                          <thead>
                              <tr>
                                <th value="id" style="text-align:center">编号</th>
                                <th value="name"style="text-align:center">姓名</th>
                                <th value="name" style="text-align:center">操作</th>
                              </tr>

                          </thead>


                          <tr v-for="user in users">
                            <td>{{user.id}}</td>
                            <td>{{user.name}}</td>
                            <td>
                                <button @click="showByIdusers(user)">修改</button>
                                <button @click="deleteUser(user)">删除</button>
                            </td>
                          </tr>
                      </table>


              <!--添加-->
                  <div class="modal fade" id="addmodalUser" >
                    <div class="modal-dialog">
                       <div class="modal-content" style="width: 500px;margin-top: 100px;">
                           <div class="modal-header">
                              <button class="close" data-dismiss="modal"><span>&times;</span></button>
                              <h4 class="modal-title">添加信息</h4>
                           </div>

                          <div class="modal-body center" style="margin-left: 15px;font-size: 15px;">
                            <div class="form-group">
                              <label for="" class="pull-left">编号</label>
                              <input type="text"  class="form-control"  v-model="users.id">
                            </div>

                            <div class="form-group">
                              <label for="" class="pull-left">姓名</label>
                              <input type="text"  class="form-control"  v-model="users.name">
                            </div>

                            <div class="modal-footer">
                              <button class="btn btn-primary" v-on:click="addUsers(users)">添加</button>
                              <button type="button" class="btn btn-primary" data-dismiss="modal">关闭</button>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>

                <!--显示-->
                <div class="modal fade" id="showmodalUser" >
                  <div class="modal-dialog">
                    <div class="modal-content" style="width: 500px;margin-top: 100px;">
                      <div class="modal-header">
                        <button class="close" data-dismiss="modal"><span>&times;</span></button>
                        <h4 class="modal-title">修改信息</h4>
                      </div>

                      <div class="modal-body center" style="margin-left: 15px;font-size: 15px;">
                        <div class="form-group">
                          <label for="" class="pull-left">编号</label>
                          <input type="text"  class="form-control"  v-model="users.id">
                        </div>

                        <div class="form-group">
                          <label for="" class="pull-left">姓名</label>
                          <input type="text"  class="form-control"  v-model="users.name">
                        </div>

                        <div class="modal-footer">
                          <button class="btn btn-primary" @click="udUsers(users)">修改</button>
                          <button type="button" class="btn btn-primary" data-dismiss="modal">关闭</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

          </div>



</template>




<script>
  export default {
    data() {
      return {
        users:
          {id:2,
           name:'',
          }

      }
    },
    //页面初始化加载
    mounted:function() {
      this.$http.get('http://localhost:8081/helloworld').then(function (response) {
        var jsonObj = response.bodyText;
        this.users = JSON.parse(jsonObj).obj

        })
    },
    //调用方法
    methods:{
      //弹框
      add:function(){
        $('#addmodalUser').modal('show');
      },
      addUsers:function(){
              var id=this.users.id;
              var name=this.users.name;
        this.$http.post('http://localhost:8081//insertUser?id='+id+'&name='+name).then(function (response) {
           var data=response.bodyText;
             if(data=true){
                 alert('添加成功');
                   this.$http.get('http://localhost:8081/helloworld').then(function (response) {
                     var jsonObj = response.bodyText;
                     this.users = JSON.parse(jsonObj).obj
                      $('#addmodalUser').modal('hide');
                   })
             }
        })
      },
      //根据id显示个人信息
      showByIdusers:function(user){
        this.$http.get('http://localhost:8081/byIdShowUser?id='+user.id+'').then(function (response) {
          $('#showmodalUser').modal('show');
            var jsonObj=response.bodyText;
            this.users = JSON.parse(jsonObj).obj;
        })
          },//修改个人信息
      udUsers:function(users){
        var id=this.users.id;
        var name=this.users.name;

          this.$http.get('http://localhost:8081/udUser?id='+id+'&name='+name).then(function(response){
              var data=response.bodyText;
              if(data=true){
                alert('修改成功');
                this.$http.get('http://localhost:8081/helloworld').then(function (response) {
                  var jsonObj = response.bodyText;
                  this.users = JSON.parse(jsonObj).obj
                  $('#showmodalUser').modal('hide');
                })
             }
          })


      },
      //删除
      deleteUser:function(user){
         this.$http.get('http://localhost:8081/deleteUser?id='+user.id+'').then(function(response){
           var data=response.bodyText;
           if(data=true){
             alert('删除成功');
             this.$http.get('http://localhost:8081/helloworld').then(function (response) {
               var jsonObj = response.bodyText;
               this.users = JSON.parse(jsonObj).obj
               $('#showmodalUser').modal('hide');
             })
           }
         })
      }
    }
  }
</script>

<style>
  .button{
    outline: none;
  }

  table,td,th
  {
    border:1px solid black;
  }
  table
  {
    width:70%;
  }
  th
  {
    height:50px;
  }
   td{

   }

    </style>
