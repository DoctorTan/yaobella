<template>
  <div>
    <van-nav-bar :title="($route.query.albumName as string)" left-text="返回" left-arrow @click-left="$router.go(-1)" />
    <van-back-top />

    <!-- <van-cell v-for="(item, index) in blog" :key="item.id">
      <div class="img">
        <van-image @click="clickImg(item, index)" :key="item.id" fit="contain" :src="item.url">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template></van-image>
      </div>
    </van-cell> -->

    <van-list @click="clickImg" style="margin-bottom: 60px;" loading-text="加载中" v-model:loading="loading"
      :finished="finished" finished-text="没有更多了" @load="onLoad" offset="1500">
      <div class="img" v-for="(item, index) in list" :key="index">
        <van-image :key="index" fit="contain" :src="item.url" :data-imgindex="index">
          <template v-slot:loading>
            <van-loading type="spinner" size="33" />
          </template>
        </van-image>
      </div>
    </van-list>


  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { blog } from '@/mock/life.js'


interface ListItem {
  url: string;
  // 其他属性
}

//监听滚动


// const el = ref(null)
// const { x, y, isScrolling, arrivedState, directions } = useScroll(el)
// console.log(x, y, isScrolling, arrivedState, directions);

//监听滚动
type Photo = {
  url: string;
  id: number;
  albumName: string;
};

// 切割数组模拟异步
const chunkSize = 3; // 设置每三个切开为一个小数组
const chunkedArray: Photo[][] = reactive([]);

for (let i = 0; i < blog.length; i += chunkSize) {
  chunkedArray.push(blog.slice(i, i + chunkSize));
}

// console.log(chunkedArray, 11);



// 切割数组模拟异步
//列表滚动
const list = ref<ListItem[]>([]);
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

// console.log('mian de ', route);
// const albumId = route.query.albumId


const clickImg = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  // 通过target.parentElement获取绑定在vant组件的自定义属性
  const { imgindex } = target.parentElement?.dataset as { imgindex?: string }
  showImagePreview({
    images: (list.value as ListItem[]).map(item => item.url),
    closeable: true,
    startPosition: Number(imgindex)
  });
}


</script>

<style scoped>
.van-image {
  width: 375px;
}

.van-popup {
  max-height: 90vh;
}

.img {
  margin: 0 auto;
  width: 375px;
  text-align: center;
}

img {
  width: 100%;

}

.custom {
  width: 80px;
  font-size: 14px;
  text-align: center;
}
</style>
