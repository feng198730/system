<template>
  <div>
    <el-row>
      <el-col :span="4" :offset="20" class="set-bar">
        <my-theme :theme="theme">
        </my-theme>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="10" class="login-header">
        <h2>后台系统</h2>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="middle">
      <!-- xs手机，sm平板，md小lg中xl大屏幕 -->
      <el-col :xs="24" :sm="24" :md="12" :lg="10" :xl="10">
        <div class="login-bar bg-gray">
          <p class="alert-info alert ">
            请输入账号和密码
          </p>
          <form action="">
            <p class="input-group">
              <label for="user">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-user icon-color"></i>
                </span>
              </label>
              <input type="text" id="user" name="userName" class="form-control" v-model="form.name">
            </p>
            <p class="input-group">
              <label for="pass">
                <span class="input-group-addon">
                  <i class="glyphicon glyphicon-lock icon-color"></i>
                </span>
              </label>
              <input type="password" id="pass" name="passWord" class="form-control" v-model="form.password">
            </p>
            <p class="input-prepend">
              <el-checkbox v-model="form.remember">记住账号</el-checkbox>
            </p>
            <p class="input-submit">
              <el-button class="submit-btn btn-color" @click="submit">登录</el-button>
            </p>
          </form>

        </div>
      </el-col>
    </el-row>
  </div>

</template>
<script>
import myTheme from "@/components/theme";

export default {
    props: ["theme", "language"],
    data() {
        return {
            form: {
                name: "",
                password: "",
                remember: false
            }
        };
    },
    components: {
        myTheme
    },
    methods: {
        submit() {
            this.$router.push("/home");
        }
    }
};
</script>
<style scoped lang="less">
@import "../assets/css/login.css";
</style>

