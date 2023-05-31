<script setup lang="ts">
import CompTwice from './index.vue'
import { RendererElement } from 'vue'

// 假装执行一些逻辑来决定是否显示 CompBase

const slots = useSlots()

const slotList = ref<RendererElement[]>([])

onMounted(() => {
  if (slots.default) {
    const temp: RendererElement[] = slots.default()
    slotList.value = temp.filter(item => (typeof item.type === 'object' && item.type === CompTwice))
    console.log('slotList', slotList.value)
  }
})
</script>

<template>
  <CompBase >
    <template v-if="slotList.length > 0">
      <template v-for="(item, index) in slotList" :key="index">
        <component v-if="item.props" :is="item"></component>
      </template>
    </template>
    <template v-if="slotList.length === 0" #default="{ item }">
      <slot v-bind="{ item }" ></slot>
    </template>
  </CompBase>
</template>

<style lang="scss" scoped>
</style>