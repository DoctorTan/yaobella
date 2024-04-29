<template>
  <div class="dynamic-scroller-demo">


    <DynamicScroller :buffer="2220" :items="items" :min-item-size="54" :emit-update="false" class="scroller">
      <template #before>
        <div class="notice">
          The message heights are unknown.
        </div>
      </template>
      <template #after>
        <div class="notice">
          You have reached the end.
        </div>
      </template>
      <template #default="{ item, index, active }">
        <DynamicScrollerItem :item="item" :active="active" :size-dependencies="[
          item.url,
        ]" :data-index="index" :data-active="active" class="message">
          <img :key="item.url" :src="item.url" alt="avatar" class="image">
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
  </div>
</template>

<script setup>


const items = [
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/146735111549.jpg',
    id: 1,
    albumName: '飒爽戎装'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467382340424.jpg',
    id: 2,
    albumName: '姚贝娜20080706博客照片5'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/146742719457',
    id: 3,
    albumName: '姚贝娜20080827博客照片 赶往青岛奥帆赛闭幕式，首都机场候机'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467512855893.jpg',
    id: 4,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467509681947',
    id: 5,
    albumName: '09年7月28日 博客 新歌出炉'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467513298193',
    id: 7,
    albumName: '沙宝亮“双生会”—— 乐巢音尚 博客 合影'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467350835233',
    id: 8,
    albumName: '2010年4月30日拍摄摇滚乐队照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467613163515',
    id: 9,
    albumName: '姚贝娜20100922博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467611632863',
    id: 10,
    albumName: '娜姐生日party SD萱萱 沙宝亮 羽泉到场 20100927博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467617229645',
    id: 11,
    albumName: '出席金池婚礼'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1531986027791',
    id: 12,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466759160305.jpg',
    id: 13,
    albumName: '我们的“表”妹'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466869667918.jpg',
    id: 14,
    albumName: '全家福'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467613163515',
    id: 99,
    albumName: '姚贝娜20100922博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467611632863',
    id: 109,
    albumName: '娜姐生日party SD萱萱 沙宝亮 羽泉到场 20100927博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467617229645',
    id: 191,
    albumName: '出席金池婚礼'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1531986027791',
    id: 192,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466759160305.jpg',
    id: 139,
    albumName: '我们的“表”妹'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466869667918.jpg',
    id: 194,
    albumName: '全家福'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/146735111549.jpg',
    id: 1,
    albumName: '飒爽戎装'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467382340424.jpg',
    id: 2,
    albumName: '姚贝娜20080706博客照片5'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/146742719457',
    id: 3,
    albumName: '姚贝娜20080827博客照片 赶往青岛奥帆赛闭幕式，首都机场候机'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467512855893.jpg',
    id: 4,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467509681947',
    id: 5,
    albumName: '09年7月28日 博客 新歌出炉'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467513298193',
    id: 7,
    albumName: '沙宝亮“双生会”—— 乐巢音尚 博客 合影'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467350835233',
    id: 8,
    albumName: '2010年4月30日拍摄摇滚乐队照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467613163515',
    id: 9,
    albumName: '姚贝娜20100922博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467611632863',
    id: 10,
    albumName: '娜姐生日party SD萱萱 沙宝亮 羽泉到场 20100927博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467617229645',
    id: 11,
    albumName: '出席金池婚礼'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1531986027791',
    id: 12,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466759160305.jpg',
    id: 13,
    albumName: '我们的“表”妹'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466869667918.jpg',
    id: 14,
    albumName: '全家福'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467613163515',
    id: 99,
    albumName: '姚贝娜20100922博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467611632863',
    id: 109,
    albumName: '娜姐生日party SD萱萱 沙宝亮 羽泉到场 20100927博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467617229645',
    id: 191,
    albumName: '出席金池婚礼'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1531986027791',
    id: 192,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466759160305.jpg',
    id: 139,
    albumName: '我们的“表”妹'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466869667918.jpg',
    id: 194,
    albumName: '全家福'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/146735111549.jpg',
    id: 1,
    albumName: '飒爽戎装'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467382340424.jpg',
    id: 2,
    albumName: '姚贝娜20080706博客照片5'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/146742719457',
    id: 3,
    albumName: '姚贝娜20080827博客照片 赶往青岛奥帆赛闭幕式，首都机场候机'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467512855893.jpg',
    id: 4,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467509681947',
    id: 5,
    albumName: '09年7月28日 博客 新歌出炉'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467513298193',
    id: 7,
    albumName: '沙宝亮“双生会”—— 乐巢音尚 博客 合影'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467350835233',
    id: 8,
    albumName: '2010年4月30日拍摄摇滚乐队照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467613163515',
    id: 9,
    albumName: '姚贝娜20100922博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467611632863',
    id: 10,
    albumName: '娜姐生日party SD萱萱 沙宝亮 羽泉到场 20100927博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467617229645',
    id: 11,
    albumName: '出席金池婚礼'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1531986027791',
    id: 12,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466759160305.jpg',
    id: 13,
    albumName: '我们的“表”妹'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466869667918.jpg',
    id: 14,
    albumName: '全家福'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467613163515',
    id: 99,
    albumName: '姚贝娜20100922博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467611632863',
    id: 109,
    albumName: '娜姐生日party SD萱萱 沙宝亮 羽泉到场 20100927博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467617229645',
    id: 191,
    albumName: '出席金池婚礼'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1531986027791',
    id: 192,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466759160305.jpg',
    id: 139,
    albumName: '我们的“表”妹'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466869667918.jpg',
    id: 194,
    albumName: '全家福'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/146735111549.jpg',
    id: 1,
    albumName: '飒爽戎装'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467382340424.jpg',
    id: 2,
    albumName: '姚贝娜20080706博客照片5'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/146742719457',
    id: 3,
    albumName: '姚贝娜20080827博客照片 赶往青岛奥帆赛闭幕式，首都机场候机'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467512855893.jpg',
    id: 4,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467509681947',
    id: 5,
    albumName: '09年7月28日 博客 新歌出炉'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467513298193',
    id: 7,
    albumName: '沙宝亮“双生会”—— 乐巢音尚 博客 合影'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467350835233',
    id: 8,
    albumName: '2010年4月30日拍摄摇滚乐队照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467613163515',
    id: 9,
    albumName: '姚贝娜20100922博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467611632863',
    id: 10,
    albumName: '娜姐生日party SD萱萱 沙宝亮 羽泉到场 20100927博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467617229645',
    id: 11,
    albumName: '出席金池婚礼'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1531986027791',
    id: 12,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466759160305.jpg',
    id: 13,
    albumName: '我们的“表”妹'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466869667918.jpg',
    id: 14,
    albumName: '全家福'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467613163515',
    id: 99,
    albumName: '姚贝娜20100922博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467611632863',
    id: 109,
    albumName: '娜姐生日party SD萱萱 沙宝亮 羽泉到场 20100927博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467617229645',
    id: 191,
    albumName: '出席金池婚礼'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1531986027791',
    id: 192,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466759160305.jpg',
    id: 139,
    albumName: '我们的“表”妹'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466869667918.jpg',
    id: 194,
    albumName: '全家福'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/146735111549.jpg',
    id: 1,
    albumName: '飒爽戎装'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467382340424.jpg',
    id: 2,
    albumName: '姚贝娜20080706博客照片5'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/146742719457',
    id: 3,
    albumName: '姚贝娜20080827博客照片 赶往青岛奥帆赛闭幕式，首都机场候机'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467512855893.jpg',
    id: 4,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467509681947',
    id: 5,
    albumName: '09年7月28日 博客 新歌出炉'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467513298193',
    id: 7,
    albumName: '沙宝亮“双生会”—— 乐巢音尚 博客 合影'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467350835233',
    id: 8,
    albumName: '2010年4月30日拍摄摇滚乐队照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467613163515',
    id: 9,
    albumName: '姚贝娜20100922博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467611632863',
    id: 10,
    albumName: '娜姐生日party SD萱萱 沙宝亮 羽泉到场 20100927博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467617229645',
    id: 11,
    albumName: '出席金池婚礼'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1531986027791',
    id: 12,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466759160305.jpg',
    id: 13,
    albumName: '我们的“表”妹'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466869667918.jpg',
    id: 14,
    albumName: '全家福'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467613163515',
    id: 99,
    albumName: '姚贝娜20100922博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467611632863',
    id: 109,
    albumName: '娜姐生日party SD萱萱 沙宝亮 羽泉到场 20100927博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467617229645',
    id: 191,
    albumName: '出席金池婚礼'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1531986027791',
    id: 192,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466759160305.jpg',
    id: 139,
    albumName: '我们的“表”妹'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466869667918.jpg',
    id: 194,
    albumName: '全家福'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/146735111549.jpg',
    id: 1,
    albumName: '飒爽戎装'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467382340424.jpg',
    id: 2,
    albumName: '姚贝娜20080706博客照片5'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/146742719457',
    id: 3,
    albumName: '姚贝娜20080827博客照片 赶往青岛奥帆赛闭幕式，首都机场候机'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467512855893.jpg',
    id: 4,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467509681947',
    id: 5,
    albumName: '09年7月28日 博客 新歌出炉'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467513298193',
    id: 7,
    albumName: '沙宝亮“双生会”—— 乐巢音尚 博客 合影'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467350835233',
    id: 8,
    albumName: '2010年4月30日拍摄摇滚乐队照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467613163515',
    id: 9,
    albumName: '姚贝娜20100922博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467611632863',
    id: 10,
    albumName: '娜姐生日party SD萱萱 沙宝亮 羽泉到场 20100927博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467617229645',
    id: 11,
    albumName: '出席金池婚礼'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1531986027791',
    id: 12,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466759160305.jpg',
    id: 13,
    albumName: '我们的“表”妹'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466869667918.jpg',
    id: 14,
    albumName: '全家福'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467613163515',
    id: 99,
    albumName: '姚贝娜20100922博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467611632863',
    id: 109,
    albumName: '娜姐生日party SD萱萱 沙宝亮 羽泉到场 20100927博客照片'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1467617229645',
    id: 191,
    albumName: '出席金池婚礼'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1531986027791',
    id: 192,
    albumName: '2009 打台球'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466759160305.jpg',
    id: 139,
    albumName: '我们的“表”妹'
  },
  {
    url: 'http://www.yaobella.com/photo/picture/thrumb/1466869667918.jpg',
    id: 194,
    albumName: '全家福'
  },
]


</script>

<style scoped>
.dynamic-scroller-demo {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.scroller {
  flex: auto 1 1;
}

/* .scroller {
  border: solid 1px #42b983;
} */


.image {
  width: 374px;
}
</style>
