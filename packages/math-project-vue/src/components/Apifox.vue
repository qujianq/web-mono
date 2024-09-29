vue
<template>
  <div>
    <h1>数据列表</h1>
    <ul>
      <li v-for="item in dataList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
// 引入 Axios
import axios from 'axios';

export default {
  data() {
    return {
      dataList: [], // 用于存储接口返回的数据
    };
  },
  mounted() {
    this.fetchData(); // 组件挂载后请求数据
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:4523/m1/5224751-4891534-default'); // 替换为你的 Apifox 接口 URL
        this.dataList = response.data; // 假设返回的数据是一个数组
      } catch (error) {
        console.error('请求数据失败:', error);
      }
    },
  },
};
</script>

<style scoped>
/* 添加样式 */
</style>