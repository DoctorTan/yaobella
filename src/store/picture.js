import { defineStore } from 'pinia'
import { ref, computed, reactive } from "vue";
import picture from '@/mock/picture/index.js'
export const usePictureStore = defineStore('picture', () => {
  const AllAlbums = reactive(picture)
  console.log('made ', AllAlbums);
  function getAlbum(name) {


    return AllAlbums[name]
  }

  return { getAlbum }
})