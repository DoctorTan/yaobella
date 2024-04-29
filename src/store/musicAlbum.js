import { defineStore } from 'pinia'
import { ref, computed, reactive } from "vue";
import { musicAlbum as musicalbum } from '@/mock/musicAlbum/index.js'
export const useMusicAlbumStore = defineStore('musicAlbum', () => {
  const musicAlbum = reactive(musicalbum)
  console.log('made ', musicAlbum);
  function getAlbum(name) {


    return AllAlbums[name]
  }

  return { musicAlbum }
})