<template>
  <div id="mse"></div>

  <van-collapse v-model="activeNames">
    <van-collapse-item :title="video.tip" name="1">
      <div class="info">
        <span class="time"> {{ video.time }}</span>
        <span class="plat">首播 :{{ video.plat }}</span>
      </div>
      <div class="tip">{{ video.describe }}</div>
    </van-collapse-item>

  </van-collapse>
</template>

<script setup>
import Player from 'xgplayer';
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
import { useVideoStore } from '@/store/video.js'
const activeNames = ref(['0']);
const VideoStore = useVideoStore();
const { getVideoInfoById } = VideoStore;
const route = useRoute()
const router = useRouter()
let video = reactive({})

onMounted(() => {
})
onUnmounted(() => {
  console.log('我被销毁了');

})
onActivated(() => {
  let newvideo = getVideoInfoById(route.query.videoListId, route.params.videoId)
  Object.assign(video, newvideo)
  let player = new Player({
    id: 'mse',
    url: video.url,
    width: '375px',
    fluid: true,
    autoplay: true,
    download: true,
    poster: 'http://www.yaobella.com/images/carton_q_club_1.png',
    ignores: ['cssfullscreen']

  });
  console.log('组件激活!')
})
onDeactivated(() => {
  console.log('组件未激活!')
})
</script>

<style scoped>
.info {

  font-size: 15px;
  border-bottom: 1px solid rgba(202, 17, 17, .1);
}

.tip {
  font-size: 17px;
}

.time {
  margin-right: 20px;
}
</style>
 