<template>
  <div>
    <van-list @load="onLoad" style="margin-bottom: 60px;" v-show="flag">
      <div class="musicAlbumItem" @click="clickMusicAlbumItem" v-for="(item, index) in musicAlbum">
        <div class="img"><van-image class="vimg" :src="item.url" position="center" fit="cover" /></div>
        <div :style="{ marginLeft: '16px' }" class="info">
          <div class="infoItem alnumName">{{ item.name }}</div>
          <div class="infoItem alnumTime">{{ item.time }}</div>
          <div class="infoItem description">{{ item.description }}</div>

        </div>
      </div>
    </van-list>
    <van-skeleton v-for="i in 2" style="padding-bottom: 20px;padding: 20px 16px;" v-show="!flag">
      <template #template>
        <div :style="{ display: 'flex', width: '100%' }">
          <van-skeleton-image />
          <div :style="{ flex: 1, marginLeft: '16px' }">
            <van-skeleton-paragraph row-width="60%" />

            <van-skeleton-paragraph />
            <van-skeleton-paragraph />
          </div>
        </div>
      </template>
    </van-skeleton>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// import { musicAlbum } from '@/mock/musicAlbum/index.js'
import { useRouter } from 'vue-router'
import { useMusicAlbumStore } from '@/store/musicAlbum.js'
import { showNotify } from 'vant';
// 引入音乐专辑列表
const MusicAlbumStore = useMusicAlbumStore()
console.log(MusicAlbumStore);
const { musicAlbum } = MusicAlbumStore


const router = useRouter()

console.log(musicAlbum);
const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const flag = ref(false)
setTimeout(() => {
  flag.value = true
}, 500);
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    // for (let i = 0; i < 10; i++) {
    //   list.value.push(list.value.length + 1);
    // }

    // 加载状态结束
    // loading.value = false;

    // // 数据全部加载完成
    // if (list.value.length >= 40) {
    //   finished.value = true;
    // }
  }, 1000);
};
// 跳转到专辑播放
const clickMusicAlbumItem = () => {
  router.push({
    name: 'music'
  })
}
</script>

<style scoped>
.alnumName {
  font-size: 20px;
  height: 32px;
  list-style: 32px;

}

.alnumTime {
  font-size: 18px;
  padding-left: 10px;
  color: rgb(59, 49, 49);
  height: 32px;
  list-style: 32px;
}

.description {

  font-size: 16px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  white-space: nowrap;
  /* 禁止文字换行 */
  overflow: hidden;
  /* 超出部分隐藏 */
  text-overflow: ellipsis;
  /* 超出部分显示省略号 */
}

.musicAlbumItem {
  padding: 20px 16px;
  height: 96px;
  display: flex;



}

.info {

  height: 96px !important;
  width: 96px !important;

  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  display: flex;
  flex-direction: column;


}

.vimg {
  width: 96px;
  height: 96px;
}

.infoItem {
  height: 12x;
  /* width: 16px; */

  flex: 1;

}

.img {

  width: 96px;

}
</style>
 