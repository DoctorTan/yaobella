<template>
  <div id="mse"></div>
</template>

<script setup>
import Player from 'xgplayer';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
onMounted(() => {
  // let player = new Player({
  //   id: 'mse',
  //   url: route.query.url,
  //   width: '375px',
  //   fluid: true,
  //   autoplay: true
  // });
})
onUnmounted(() => {
  console.log('我被小鬼了');
})
onActivated(() => {
  let player = new Player({
    id: 'mse',
    url: route.query.url,
    width: '375px',
    fluid: true,
    autoplay: true
  });
  console.log('组件激活!')
})
onDeactivated(() => {
  console.log('组件未激活!')
})
</script>

<style>
#mse {}
</style>
 