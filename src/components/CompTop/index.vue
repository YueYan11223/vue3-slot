<script setup lang="ts">
import { RendererElement } from 'vue'

const slots = useSlots()

const slotList = ref<RendererElement[]>([])

onMounted(() => {
  if (slots.default) {
    slotList.value = slots.default()
  }
})

</script>

<template>
  <div>
    <template v-for="(item, index) in slotList" :key="index">
      <component :is="item"></component>
    </template>
  </div>
</template>

<style lang="scss" scoped>
</style>