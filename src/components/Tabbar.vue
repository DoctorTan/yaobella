<template>
  <div class="tablist">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="discover" icon="search">发现</van-tabbar-item>
      <van-tabbar-item name="musicAlbum" icon="search">专辑</van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
import { ref } from 'vue';
const onChange = (index: string) => {



  if (index === "home") {
    router.push({
      name: 'index'
    })
  }
  else if (index === 'discover') {
    router.push({
      name: 'discover'
    })
  }
  else if (index === 'musicAlbum') {
    router.push({
      name: 'musicAlbum'
    })
  }

}
const active = ref('home');
</script>

<style>
.tablist {
  width: 375px;
  margin: 0 auto;
}

.van-tabbar {
  width: 375px;
  margin: 0 auto !important;
  text-align: center !important;
}

.van-tabbar--fixed {
  left: auto;
}
</style>
 