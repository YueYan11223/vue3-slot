<template>
  <el-config-provider :locale="locale">
    <!-- <div>
      <TagView />
      <el-tree-select v-model="value" value-key="id" :data="list" :render-after-expand="false" />
      <el-button type="primary" @click="doCopy" >复制</el-button>
    </div> -->
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
// import { copy } from 'clipboard'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const locale = ref(zhCn)

// const value = ref('')
// const list = ref<any>([])

// setTimeout(() => {
//   value.value = '9'
// }, 2000)

// setTimeout(() => {
//   list.value = [
//     {
//       id: '1',
//       label: '这是1',
//       children: [
//         {
//           id: '9',
//           label: '这是9'
//         }
//       ]
//     },
//     {
//       id: '2',
//       label: '这是2',
//       children: [
//         {
//           id: '8',
//           label: '这是8'
//         }
//       ]
//     },
//     {
//       id: '3',
//       label: '这是3',
//       children: [
//         {
//           id: '7',
//           label: '这是7'
//         }
//       ]
//     },

//   ]
// }, 1000)

// const targetString = ref('这也许就是我不太想复制的内容')

// const doCopy = () => {
//   copy(targetString.value)
// }

</script>

<style lang="scss" scoped></style>
