<script setup lang="ts">

const item = ref({
  id: 1,
  name: '我是1'
})
</script>

<template>
  <div>
    <slot :item="item" ></slot>
  </div>
</template>

<style lang="scss" scoped>
</style>