<template>
  <div class="login-wrapper">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple">
          <el-input v-model="input" placeholder="请输入11内容"></el-input>
        </div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  /** 用户登录界面
   *  验证用户名和密码
   *  可登录方式：用户名&&密码、手机号&&密码
   *  密码加密
   * */
  data: () => {
    return {};
  },
  methods: {},
};
</script>
