<template>
  <div class="topic-container">
    <div class="topic-header">
      <div class="topic-textbox">
        <h6 class="text-center">我的文章(296)</h6>
      </div>
    </div>
    \
    <div class="topic-body">
      <div class="detail-item">
        <div class="title">
          <img src="../../assets/avatar.png" />粘人的雅晴酱 <span>9小时前</span>
        </div>
        <div class="text">来看看咯，新年快乐</div>
        <div class="detail-body" @click="goTopicDetail">
          <div class="pic"></div>
          <div class="detail-main">
            <a href="#">
              <div class="detail-main-title">
                <img src="../../assets/badget.png" />
                <h5>GETTR Coin=自由媒体的开启</h5>
              </div>
              <div class="detail-body-main-text">
                新年开启GETTR
                Coin以全新的姿态展露在了世界，开启了自由媒体的大门，真相的“可贵”越来越受到人们的重视，
                而危险的警钟又怎样才能传遍世界？文字的力量可否唤醒勇气的热血？良善的灵魂的之火能用什么样的方式重新点燃？2023年一切都将重写。
              </div>
              <div class="detail-body-main-bottom">
                <img src="../../assets/avatar.png" />粘人的雅晴酱
                <img src="../../assets/label.png" /><span
                  >2023-01-24 16:29:44</span
                >
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyArticles',
  methods: {
    goTopicDetail() {
      this.$router.push('/')
      window.alert('去往话题详情页')
    }
  }
}
</script>

<style lang="less" scoped>
.topic-container {
  height: 100%;

  .topic-header {
    height: 40px;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid rgba(14, 14, 14, 0.2);
    .topic-textbox {
      display: inline-block;
      width: 90px;
      height: 30px;
      padding: 0;
      margin-top: 10px;
      border: 1px solid rgba(15, 16, 16, 0.2);
      border-bottom: none;
      color: #fc9069;
      h6 {
        padding-top: 10px;
      }
    }
  }

  .topic-body {
    .detail-item {
      height: 200px;
      border-bottom: 1px solid rgba(14, 14, 14, 0.2);
      .title {
        font-size: 10px;

        img {
          width: 20px;
          height: 20px;
          padding-right: 3px;
          border-radius: 10px;
        }
      }
      .detail-body {
        display: flex;
        .pic {
          flex: 3;
          width: 230px;
          height: 140px;
          background: repeat center url('../../assets/topic-pic.png');
          background-size: cover;
        }
        .detail-main {
          flex: 9;
          padding-left: 20px;
          a {
            display: inline-block;
            text-decoration: none;
            width: 100%;
            height: 100%;
            color: #000;
            .detail-main-title {
              display: flex;
              font-weight: bold;

              img {
                flex: left;
                width: 20px;
                height: 20px;
                line-height: 30px;
                background: repeat center url('../../assets/topic-pic.png');
                background-size: cover;
              }
              h5 {
                flex: right;
              }
            }
            .detail-body-main-bottom {
              margin-top: 34px;
              img {
                width: 20px;
                height: 20px;
                padding-right: 3px;
                background: repeat center url('../../assets/topic-pic.png');
                background-size: cover;
              }
            }

            &:hover {
              .detail-main-title > h5 {
                color: #fd4300;
              }
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
