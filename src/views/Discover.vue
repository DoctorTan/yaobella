<template>
  <div>
    <van-swipe :autoplay="2000" lazy-render>
      <van-swipe-item v-for="image in swiperPicList" :key="image">
        <img width="375px" :src="image" />
      </van-swipe-item>
    </van-swipe>
    <van-barrage v-model="list" rows="7" duration="5000" style="height:30vh;">
      <div class="video" style="width: 100%; height: 150px"></div>
    </van-barrage>
    <van-space style="margin-top: 10px">

    </van-space>
  </div>
</template>

<script setup>
import { ref } from "vue";
const swiperPicList = [
  'http://www.yaobella.com/images/bar_header/bella_music.jpg',
  'http://www.yaobella.com/images/bar_header/bella_green.jpg',
  'http://www.yaobella.com/images/bar_header/bella_blue.jpg',
  'http://www.yaobella.com/images/bar_header/bella_116.jpg',
  'http://www.yaobella.com/images/bar_header/bella_chunjie.jpg',
  'http://www.yaobella.com/images/bar_header/bella_712.jpg',
  'http://www.yaobella.com/images/bar_header/bella_spring.jpg',
  'http://www.yaobella.com/images/bar_header/bella_biography.jpg'



]
const defaultList = [
  { id: 100, text: '姚贝儿,思念原来从未停止.' },
  { id: 101, text: '超想去看你，可是，没时间' },
  { id: 102, text: '贝娜认识你到现有十一年了明年高考完一定去看你 07的贝壳' },
  { id: 103, text: '娜姐今天我去看你了有好多话想对你说人太多没有机会' },
  { id: 104, text: '娜姐下次我单独去看你和你聊天' },
  { id: 105, text: '思念成疾' },
  { id: 106, text: '对娜私语最多只能输入28个汉字' },
  { id: 106, text: '后来我爱的人都像你。' },
  { id: 106, text: '我是(對岸的貝殼) , 謝謝妳曾經來過 .' },
  { id: 106, text: '娜姐，你在那边还好' },
  { id: 106, text: '你的歌声，是我心里的天籁之声。' },
  { id: 106, text: '一直想你，一直记着你。何时能回来给我们唱歌听。' },
  { id: 106, text: '贝娜姐姐我很想你。' },
  { id: 106, text: '思念你的每一天。马上8年了，我们还会相见吗？' },
];
const list = ref([...defaultList]);
// list.value.push({ id: Math.random(),   });
</script>

<style scoped>
img {
  width: 100%;
}
</style>
 