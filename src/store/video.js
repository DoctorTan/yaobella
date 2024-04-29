import { defineStore } from 'pinia'
import { ref, computed, reactive } from "vue";

import video from '@/mock/video/index.js'
export const useVideoStore = defineStore('video', () => {
  const AllVideoList = reactive(video)
  console.log('ja', AllVideoList);
  function getVideoList(name) {
    return AllVideoList[name]
  }
  // 传入分类和id获取视频详情
  function getVideoInfoById(videoListId, videoId) {
    return getVideoList(videoListId).find(item => item.id == videoId)
  }

  return { getVideoList, getVideoInfoById }
})