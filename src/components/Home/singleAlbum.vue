<template>
  <div>
    <van-nav-bar :title="$route.query.albumName" left-text="返回" left-arrow @click-left="$router.go(-1)" />
    <van-back-top />

    <!-- <van-cell v-for="(item, index) in blog" :key="item.id">
      <div class="img">
        <van-image @click="clickImg(item, index)" :key="item.id" fit="contain" :src="item.url">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template></van-image>
      </div>
    </van-cell> -->

    <van-list style="margin-bottom: 60px;" loading-text="加载中" v-model:loading="loading" :finished="finished"
      finished-text="没有更多了" @load="onLoad" offset="1500">
      <div class="img" v-for="(item, index) in list" :key="index">
        <van-image @click="clickImg(item, index)" :key="index" fit="contain" :src="item.url">
          <template v-slot:loading>
            <van-loading type="spinner" size="33" />
          </template>
        </van-image>
      </div>
    </van-list>

  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { blog } from '@/mock/life.js'
import { useRoute, useRouter } from 'vue-router'
//监听滚动
import { useScroll } from '@vueuse/core'

// const el = ref(null)
// const { x, y, isScrolling, arrivedState, directions } = useScroll(el)
// console.log(x, y, isScrolling, arrivedState, directions);

//监听滚动


// 切割数组模拟异步
const chunkSize = 3; // 设置每三个切开为一个小数组
const chunkedArray = reactive([]);

for (let i = 0; i < blog.length; i += chunkSize) {
  chunkedArray.push(blog.slice(i, i + chunkSize));
}
// console.log(chunkedArray, 11);



// 切割数组模拟异步
//列表滚动
const list = ref([{
  url: 'http://www.yaobella.com/photo/picture/1467382340424/photo_1467382340424_4.jpg',
  id: 5,
  albumName: ''
},
{
  url: 'http://www.yaobella.com/photo/picture/1467382340424/photo_1467382340424_5.jpg',
  id: 6,
  albumName: ''
},
{
  url: 'http://www.yaobella.com/photo/picture/1467382340424/photo_1467382340424_11.jpg',
  id: 7,
  albumName: ''
},]);
const loading = ref(false);
const finished = ref(false);
const index = ref(0);
const onLoad = () => {
  // console.log('load');
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    // for (let i = 0; i < 3; i++) {
    // console.log('i是', index.value);
    list.value.push(...chunkedArray[index.value]);
    index.value++
    // }
    // console.log(list.value);
    // 加载状态结束
    loading.value = false;
    // console.log(blog.length, list.value.length);
    // 数据全部加载完成
    if (list.value.length >= blog.length) {
      finished.value = true;
    }
  }, 1000);
};
//列表滚动
const route = useRoute()
// console.log('mian de ', route);
const albumId = route.query.albumId
const urls = blog.map(item => item.url);

const clickImg = (item, index) => {
  showImagePreview({
    images: urls,
    closeable: true,
    startPosition: index,
  });
}
</script>

<style >
.img {
  margin: 0 auto;
  width: 375px;
  text-align: center;
}

.custom {
  width: 80px;
  font-size: 14px;
  text-align: center;
}
</style>
 