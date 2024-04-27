<template>
  <div class="main">
    <!-- <div v-show="LoadingStore.loading" style=" z-index: 999;    display: flex;
    justify-content: center;align-items: center;">
      <van-loading color="#1989fa" />
    </div> -->

    <van-config-provider :theme-vars="themeVars" theme-vars-scope="global">

      <!-- <van-overlay :show="LoadingStore.loading" @click="show = false" duration="0.2">
        <van-loading type="spinner" />
      </van-overlay> -->






      <router-view v-slot="{ Component }" v-if="showAliveComponent">
        <keep-alive :include="['videoPlay', 'albums']">
          <component :is="Component "></component>
        </keep-alive>
      </router-view>
      <router-view v-else></router-view>
      <Tabbar placeholder />
    </van-config-provider>

  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { useRoute } from 'vue-router'
import Tabbar from '@/components/Tabbar.vue'
import { useLoadingStore } from '@/store/loading.js'
import VideoPlay from '@/components/Home/videoPlay.vue'
const LoadingStore = useLoadingStore();
const showAliveComponent = ref(true)
const route = useRoute()
// console.log(route);
watch(() => route.path, (count, prevCount) => {
  // console.log(count, prevCount);
  if (count == '/index' && prevCount.startsWith('/videoList')) {
    //销毁视频组件
    // console.log('11111111111111111111111');
    showAliveComponent.value = false
  }
})
watch(() => route.path, (count, prevCount) => {
  console.log(count, prevCount);
  if (count.startsWith('/videoList')) {
    //销毁视频组件
    // console.log('11111111111111111111111');
    showAliveComponent.value = true
  }
})
const themeVars = reactive({  // 'treeSelectFontSize': '16px',//配置耳机菜单的文字
  // 'backTopSize': "55px",
  'backTopBottom': '53px',
  'back-top-background': 'gray'
});

</script>

<style>
@media screen and (min-width: 1000px) {

  #app,
  .van-nav-bar__content {
    margin: 0 auto;
    width: 375px;
  }

  .main {
    width: 375px !important;
    margin: 0 auto !important
  }
}
</style>
 