<template>
  <div class="topic-container">
    <!-- 头部 -->
    <div class="topic-header">
      <div class="topic-textbox"><h6 class="text-center">我的话题(4)</h6></div>
    </div>
    <!-- item主体部分  -->
    <div class="topic-body">
      <div class="detail-item" v-for="item in topiclist" :key="item.id">
        <div class="title">
          <img src="../../assets/avatar.png" />粘人的雅晴酱 <span>9小时前</span>
        </div>
        <div class="text">{{ item.text }}</div>
        <div class="detail-body" @click="goTopicDetail">
          <!-- 左侧照片部分 -->
          <div class="pic"></div>
          <!-- 右侧话题块 -->
          <div class="detail-main">
            <a href="#">
              <div class="detail-main-title">
                <img src="../../assets/badget.png" />
                <h5>{{ item.title }}</h5>
              </div>
              <div class="detail-body-main-text">
                {{ item.context }}
              </div>
              <div class="detail-body-main-bottom">
                <img src="../../assets/avatar.png" />粘人的雅晴酱
                <img src="../../assets/label.png" /><span>{{ item.date }}</span>
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
  name: 'MyTopics',
  data() {
    return {
      // 用户列表数据
      topiclist: [
        {
          id: 1,
          name: '嬴政',
          text: '来看看咯，新年快乐',
          title: 'GETTR Coin自由媒体的开启',
          context:
            '新年开启GETTR Coin以全新的姿态展露在了世界，开启了自由媒体的大门.',
          date: new Date().toLocaleString()
        },
        {
          id: 2,
          name: '李斯',
          text: '来看看咯，新年快乐',
          title: 'GETTR Coin自由媒体的开启',
          context:
            '新年开启GETTR Coin以全新的姿态展露在了世界，开启了自由媒体的大门.',
          date: new Date().toLocaleString()
        },
        {
          id: 3,
          name: '吕不韦',
          text: '来看看咯，新年快乐',
          title: 'GETTR Coin自由媒体的开启',
          context:
            '新年开启GETTR Coin以全新的姿态展露在了世界，开启了自由媒体的大门.',
          date: new Date().toLocaleString()
        },
        {
          id: 4,
          name: '赵姬',
          text: '来看看咯，新年快乐',
          title: 'GETTR Coin自由媒体的开启',
          context:
            '新年开启GETTR Coin以全新的姿态展露在了世界，开启了自由媒体的大门.',
          date: new Date().toLocaleString()
        }
      ]
    }
  },
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
      margin-top: 20px;
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
          flex: 2;
          width: 230px;
          height: 140px;
          background: repeat center url('../../assets/topic-pic.png');
          background-size: cover;
        }
        .detail-main {
          position: relative;
          flex: 10;
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
              // margin-top: 34px;
              position: absolute;
              bottom: 0px;
              img {
                width: 20px;
                height: 20px;
                border-radius: 10px;
                padding-right: 5px;
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
