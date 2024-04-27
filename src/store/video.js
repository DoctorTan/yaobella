import { defineStore } from 'pinia'
import { ref, computed, reactive } from "vue";

import video from '@/mock/video/index.js'
export const useVideoStore = defineStore('video', () => {
  const AllVideoList = reactive(video)
  // console.log('ja', AllVideoList);
  function getVideoList(name) {


    return AllVideoList[name]
  }

  return { getVideoList }
})