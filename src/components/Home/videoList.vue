<template>
  <div>
    <van-nav-bar :title="$route.query.title" fixed placeholder left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-list @click="ClickVideo" v-if="videoList" :finished="finished" finished-text="没有更多了">
      <div class="videoItem" v-for="item in videoList" :key="item.id">
        <div class="left" :data-videoid="item.id">
          <div class="time" :data-videoid="item.id">{{ item.time }}</div>
          <div class="titleName" :data-videoid="item.id">{{ item.title }}</div>
        </div>
        <div class="center" :data-videoid="item.id">
          {{ item.describe }}
        </div>
        <div class="right">
          <van-image :data-videoid="item.id" fit="contain" height="100%" width="100%" :src="item.img">
            <template v-slot:loading>
              <van-loading type="spinner" size="60" />
            </template>
          </van-image>
        </div>
      </div>


    </van-list>
    <van-empty v-else image="error" description="我还没录入数据" />

  </div>
</template>

<script setup>
import { ref, onMounted, onActivated, onDeactivated } from "vue";
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
import { useVideoStore } from '@/store/video.js'
const VideoStore = useVideoStore()
const { getVideoList } = VideoStore
//渲染的视频数据
const videoList = getVideoList(route.params.videoListId);
console.log(route.params);

const ClickVideo = (e) => {
  let videoid
  if (e.target.tagName.toLowerCase() === 'img') {
    videoid = e.target.parentElement.dataset.videoid
  }
  else {
    videoid = e.target.dataset.videoid
  }

  router.push({
    name: 'videoPlay',
    params: { videoId: videoid },
    query: { videoListId: route.params.videoListId }
  })
}
const onClickLeft = () => history.back();
const list = ref([]);
const loading = ref(false);
const finished = ref(false);

//提前引入player
onMounted(() => {
  // console.log('首页加载完成');
  // import('@/views/Discover.vue').then(res => {
  //   console.log(res, '导入成功');

  // })
  // var number = 9999
  // var value = 0
  // while (number > 0) {
  //   value = Math.random() < 0.7 ? Math.random() : Math.random()
  //   console.log(value);
  //   number--
  // }
  requestIdleCallback((leaktime) => {
    if (leaktime.timeRemaining() > 1) { }


  }, { timeout: 3000 })
  onActivated(() => {

    console.log('列表组件激活!')
  })
  onDeactivated(() => {
    console.log('列表组件未激活!')
  })
})


</script>

<style scoped>
.titleName {
  font-size: 13px;
}

.right {
  height: 100px;
}

.center {
  padding: 10px 10px;
  font-size: 12px;
  flex: 2;
  white-space: wrap;
  /* 禁止文本换行 */
  overflow: scroll;
  /* 隐藏超出容器的部分 */
  text-overflow: ellipsis;
  /* 当文本溢出容器时，显示省略号 */
}

.left {
  text-align: center;
  flex: 1;
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;
}

.right {
  flex: 1;
}

.time {
  font-size: 17px;
}

.videoItem {
  width: 375px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
</style>
 