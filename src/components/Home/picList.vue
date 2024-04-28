<template>
  <div class="piclist">
    <van-nav-bar :title="($route.query.title as string)" fixed placeholder left-text="返回" left-arrow
      @click-left="onClickLeft" />
    <van-grid @click="clickAlbum" v-if="erjiAlbum" square border clickable :gutter="2" column-num="2">
      <van-grid-item v-for="item in erjiAlbum" :key="item.id" icon="photo-o" text="文字">
        <div class="albumCoverAndName">
          <img :data-AlbumId="item.id" :data-Albumname="item.albumName" :src="item.url" />
          <div class="albumName">{{ item.albumName }}</div>
        </div>
      </van-grid-item>
    </van-grid>
    <van-empty v-else image="error" description="我还没录入数据" />
  </div>
</template>

<script setup lang="ts">
// import life from '@/mock/life.js'
import { usePictureStore } from '@/store/picture.js'
import { log } from 'console';
// import picture from '@/mock/picture/index.js'
import { onMounted } from "vue";
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const PictureStore = usePictureStore()

const { getAlbum } = PictureStore
const erjiAlbum = getAlbum(route.params.albumsId);


// console.log(route.params.albumsId);
//这里是生活点击下的分类,生活点滴下面还有一对相册
// const albumList = []

const router = useRouter()
const onClickLeft = () => history.back();
// console.log(route.params);
//拿到一级相册分类


const clickAlbum = (e: MouseEvent) => {
  // 拿到自定义事件里面的图片点击事件
  const target = e.target as HTMLElement
  // 从e.target.dataset取出自定义属性,我绑定的是id
  //取值是小写
  const { albumid, albumname } = target.dataset

  // console.log(route.params);


  router.push({
    path: `/album/${albumid}`,
    query: {
      albumName: albumname,
      albumId: albumid
    }
  })
}

onMounted(() => {
  requestIdleCallback((leaktime) => {
    if (leaktime.timeRemaining() > 1) { }

  }, { timeout: 3000 })
})

</script>

<style scoped>
.piclist {
  overflow-x: hidden;

}

:deep .van-grid-item__content {
  padding-right: 0px;
}

:deep .van-grid-item__content {
  padding: 0 !important;
  right: 0 !important;
}

.van-grid {
  padding-left: 0px !important;
}

img {
  /* width="184px" height="124px" */
  width: 184px;
  height: 138px;
}

.albumCoverAndName {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
  height: 100%;
  padding-bottom: 20px;
}

.albumName {
  padding-top: 3px;
  font-size: 11px;
  display: block;
  text-align: center;
  height: 15px;
  line-height: 15px;
  /* word-wrap: break-word;
  overflow-wrap: break-word;
  text-overflow: ellipsis; */

}
</style>
 