<template>
  <div class="layout-header-container align-items-center">
    <!-- 左侧 logo 和 标题区域 -->
    <div class="header-top">
      <div class="layout-header d-flex align-items-center user-select-none">
        <!-- <img class="header-cover" /> -->
        <!-- <h4 class="layout-header-title">Background management system</h4> -->
        <div class="top-center">
          <div class="context-box context-box-1">
            <div>143</div>
            <div class="context-box-bottom">正在关注</div>
          </div>
          <div class="context-box context-box-2">
            <div>82</div>
            <div class="context-box context-box-bottom">关注者</div>
          </div>
          <div class="context-box context-box-3">
            <!-- <div>143</div>
            <div class="context-box-bottom">正在关注</div> -->
          </div>
          <div class="context-box context-box-4">
            <div>0</div>
            <div class="context-box-bottom">文章</div>
          </div>
          <div class="context-box context-box-5">
            <div>143</div>
            <div class="context-box-bottom">总浏览量</div>
          </div>
        </div>
      </div>

      <div class="layout-header-button">
        <a class="btn-left" @click="onEdit"
          ><img src="../../assets/icon/edit.png"
        /></a>
        <a class="btn-right" @click="onShare"
          ><img src="../../assets/icon/share.png"
        /></a>
      </div>
    </div>
    <!-- low section -->
    <div class="header-low">
      <div class="avarda-user"></div>
      <div class="nick-name">
        粘人的雅晴酱<img src="../../assets/label.png" />
      </div>
      <div class="nick-id">@yaqingjiang</div>
      <div class="user-slogan">
        请大家务必，务必，用力，用力地关注，评论我呦
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  methods: {
    onEdit() {
      // localStorage.removeItem('token')
      this.$router.push('/')
      window.alert('去往编辑页')
    },
    onShare() {
      // localStorage.removeItem('token')
      this.$router.push('/')
      window.alert('去往分享遮罩层')
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header-container {
  position: relative;
  height: 250px;
  border-bottom: 1px solid #eaeaea;

  .header-top {
    height: 150px;
    margin: auto;
    background: repeat center url('../../assets/cover.jpeg');
    background-size: cover;
    .top-center {
      // position: relative;
      display: flex;
      width: 500px;
      height: 60px;
      margin: 90px auto 0px;
      padding-bottom: 10px;

      text-align: center;
      // background-color: pink;
      .context-box {
        display: 1;
        width: 100px;
        height: 100%;
        font-size: 18px;
        color: #ffde72;
        .context-box-bottom {
          font-size: 14px;
          color: #ffde72;
        }
      }
    }
  }

  .layout-header-button {
    position: absolute;
    display: inline-block;
    top: 5px;
    right: 10px;
    .btn-left {
      display: inline-block;
      padding: 0 5px 0 0;
      width: 30px;
      height: 20px;
      img {
        width: 100%;
        background: transparent;
      }
    }
    .btn-right {
      padding: 0;
      width: 30px;
      height: 20px;
    }
  }
  .header-low {
    position: relative;
    text-align: center;
    .avarda-user {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100px;
      width: 100px;
      border-radius: 50px;
      background: repeat center url('../../assets/avatar.png');
      background-size: cover;
    }
    .nick-name {
      padding-top: 28px;
      font-weight: bold;
    }
  }

  // .layout-header-left-img {
  //   width: 30px;

  //   height: 10px;
  // }
}
</style>
