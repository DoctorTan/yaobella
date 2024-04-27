<template>
  <div>

    <!-- <van-nav-bar :title="route.meta.title" fixed placeholder /> -->
    <van-tree-select @click-nav='clickNav' @click-item="clickPicItem" v-model:main-active-index="activeIndex"
      height="88vh" :items="items">

    </van-tree-select>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
// import picture from '@/mock/picture/index.js'
// import video from '@/mock/video/index.js'
// console.log(video);
// console.log(picture);
// for (let index = 0; index < 1111111111; index++) {
//   index += 2
//   // console.log(index);


// }
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
    if (leaktime.timeRemaining() > 1)
      import('@/views/Discover.vue').then(res => {
        console.log('Discover引入完成', res);
      })
    import('@/components/Home/picList.vue').then(res => {
      console.log('picList引入完成', res);
    })
    import('@/components/Home/videoList.vue').then(res => {
      console.log('videoList引入完成', res);
    })
    import('@/views/MusicAlbum.vue').then(res => {
      console.log('MusicAlbum引入完成', res);
    })


  }, { timeout: 3000 })
})
import { ref } from "vue";
import { useRouter } from 'vue-router'
// import picture from '@/assets/js/flexible.js'
import type { TreeSelectItem, TreeSelectChild, } from 'vant';
// import life from '@/mock/life.js'

// console.log(life);

// console.log(life);
// import { usePictureStore } from '@/store/picture.js'
// import { useVideoStore } from '@/store/video.js'

// const PictureStore = usePictureStore()
// const VideoStore = useVideoStore()

// const { getAlbum } = PictureStore
// const { getVideoList } = VideoStore




const router = useRouter()
const activeIndex = ref(0);


//点击左侧栏分类
const clickNav = (index: number) => {
  activeIndex.value = index
  // console.log(activeIndex.value);
}
const picList: TreeSelectChild[] = [
  { "text": "生活点滴", "id": "shdd" },
  { "text": "写真摄影", "id": "xzsy" },
  { "text": "舞台魅力", "id": "wtml" },
  { "text": "访谈出镜", "id": "ftcj" },
  { "text": "慈善公益", "id": "csgy" },
  { "text": "其他活动", "id": "qthd" },
  { "text": "特色主题", "id": "tszt" },
  { "text": "娜歌赏图", "id": "ngst" },
  { "text": "贝娜涂鸦", "id": "bnty" },
  { "text": "贝壳美术作品", "id": "bkmszp" },
  { "text": "纪念贝娜", "id": "jbnb" },
  { "text": "石门之恋", "id": "smzl" }
]
const videoList: TreeSelectChild[] = [
  { "text": "经典现场", "id": "jdxc" },
  { "text": "个人专场", "id": "grzc" },
  { "text": "音乐MV", "id": "yymv" },
  { "text": "现场演出", "id": "xcyc" },
  { "text": "综艺访谈", "id": "zyft" },
  { "text": "新闻报道", "id": "xwbd" },
  { "text": "商业活动及微视频", "id": "syhdjwsp" },
  { "text": "纪念视频", "id": "jnsp" },
  { "text": "贝壳饭拍视频", "id": "bkfpsp" },
  { "text": "网友剪辑作品", "id": "wyjjzp" },
  { "text": "翻唱视频", "id": "fcsp" },
  { "text": "石门视频", "id": "smsp" }
]
const items: TreeSelectItem[] = [{ text: '图片库', children: picList }, {
  text: '视频库', children: videoList
}, { text: '文章库' },
{ text: '歌曲库' }, { text: '大型现场演出' }, { text: '综艺访谈' }, { text: '媒体报道' },
{ text: '贝娜年表' }, { text: '纪念贝娜' }, { text: '贝壳天地' },
{ text: '器官捐赠' }, { text: '网络资源' }, { text: '歌迷后援会' }]

// const TypeEnum = {
//   '图片库': 0,
//   '视频库': 1,
//   '文章库': 2,
//   '歌曲库': 3,
//   '大型现场演出': 4,
//   '综艺访谈': 5,
//   '媒体报道': 6,
//   '贝娜年表': 7,
//   '纪念贝娜': 8,
//   '贝壳天地': 9,
//   '器官捐赠': 10,
//   '网络资源': 11,
//   '歌迷后援会': 12

// }



//点击哪项就跳到哪项去
const clickPicItem = (item: TreeSelectChild) => {
  if (activeIndex.value == 0) {
    router.push({
      name: 'albums',
      params: { albumsId: item.id },
      query: { title: item.text }
    })
  } else if (activeIndex.value == 1) {
    // console.log(item);
    router.push({
      name: 'videoList',
      params: { videoListId: item.id },
      query: { title: item.text }
    })

  }


}
</script>

<style scoped>
.van-tree-select {
  /* height: 100vh !important; */
}

:deep .van-badge__wrapper,
.van-sidebar-item__text {
  /* font-size: 18px !important; */
}

:deep .van-ellipsis {
  font-weight: 500;
}
</style>
 