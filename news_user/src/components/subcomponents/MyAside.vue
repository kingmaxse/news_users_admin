<template>
  <div class="layout-aside-container">
    <!-- 左侧边栏列表 Left sider-->
    <ul class="user-select-none menu">
      <li class="menu-item">
        <img src="../../assets/article.png" />
        <router-link to="/home/articles">我的文章</router-link>
      </li>
      <li class="menu-item">
        <img src="../../assets/topic.png" />
        <router-link to="/home/topics">话题</router-link>
      </li>
      <li class="menu-item">
        <img src="../../assets/comments.png" />
        <router-link to="/home/comments">评论</router-link>
      </li>
      <li class="menu-item">
        <img src="../../assets/thumb-up.png" />
        <router-link to="/home/thumbups">点赞</router-link>
      </li>
      <li class="menu-item">
        <img src="../../assets/subscription.png" />
        <router-link to="/home/subscriptions">关注</router-link>
      </li>
      <li class="menu-item">
        <img src="../../assets/collect.png" />
        <router-link to="/home/collects">收藏</router-link>
      </li>
      <li class="menu-item">
        <img src="../../assets/fund.png" />
        <router-link to="/home/funds">我的资金</router-link>
      </li>
      <li class="menu-item">
        <img src="../../assets/info.png" />
        <router-link to="/home/info">信息中心</router-link>
      </li>
      <li class="menu-item">
        <img src="../../assets/rights.png" />
        <router-link to="/home/rights">我的权限</router-link>
      </li>
      <li class="menu-item">
        <img src="../../assets/suggestions.png" />
        <router-link to="/home/suggestions">意见反馈</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyAside'
}
</script>

<style lang="less" scoped>
.layout-aside-container {
  width: 130px;
  height: 100%;
  border-right: 1px solid #eaeaea;
}

.menu {
  list-style-type: none;
  padding: 0;
  .menu-item {
    // display: flex;
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:hover {
      // background-color: #efefef;
      cursor: pointer;
    }
    a {
      display: inline-block;
      color: black;
      padding-left: 5px;
      &:hover {
        text-decoration: none;
      }
    }
    img {
      margin-left: 5px;
      width: 20px;
      height: 20px;
    }
  }
}

// 设置路由高亮效果
.router-link-active {
  // background-color: #efefef;
  box-sizing: border-box;
  position: relative;
  color: #fd5519;
  // 伪元素实现路由高亮效果
  &::before {
    content: ' ';
    display: block;
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    color: #fd5519;
    // background-color: #42b983;
  }
}
</style>
