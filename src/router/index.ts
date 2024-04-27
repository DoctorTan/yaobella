import * as VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import { useLoadingStore } from '@/store/loading.js'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { name: 'musicAlbum', path: '/musicAlbum', component: () => import('@/views/MusicAlbum.vue'), meta: { 'title': '专辑' }, },
  { name: 'index', path: '/index', component: Home, meta: { 'title': '首页' }, },
  { path: '/', redirect: '/index' },
  {
    name: 'albums', path: '/albums/:albumsId',
    component: () => import('@/components/Home/picList.vue'), meta: { 'title': '相册' },

  },
  {
    name: 'album', path: '/album/:albumId',
    component: () => import('@/components/Home/singleAlbum.vue'), meta: { 'title': '' },
  },
  {
    name: 'videoList', path: '/videoList/:videoListId',
    component: () => import('@/components/Home/videoList.vue'), meta: { 'title': '' },
  },
  {
    name: 'videoPlay', path: '/videoPlay/:videoId',
    component: () => import('@/components/Home/videoPlay.vue'), meta: { 'title': '' },
  },
  // 发现页
  {
    name: 'discover', path: '/discover',
    component: () => import('@/views/Discover.vue'), meta: { 'title': '发现' },
  },
  // 

]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes, // `routes: routes` 的缩写
  scrollBehavior(to: any, from: any, savedPosition: any) {

    to + from

    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
router.beforeEach(() => {
  const LoadingStore = useLoadingStore();
  const { setLoadingTrue } = LoadingStore


  setLoadingTrue()


})
router.afterEach(() => {
  const LoadingStore = useLoadingStore();
  const { setLoadingFalse } = LoadingStore
  setLoadingFalse()
})

export default router