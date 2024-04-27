import { defineStore } from 'pinia'
import { ref, computed, reactive } from "vue";

export const useLoadingStore = defineStore('loading', () => {
  const loading = ref(false)

  function setLoadingTrue() {
    loading.value = true
  }
  function setLoadingFalse() {
    setTimeout(() => {
      loading.value = false
    }, 100);
  }


  return { setLoadingTrue, setLoadingFalse, loading }
})