<script setup lang="ts">

</script>

<template>
  <div class="home">
    <CompTop>
      <CompTwice>
        <CompTwice>
          <template #default="scope">
            <div>
              {{ scope.item }}+++++
            </div>
          </template>
        </CompTwice>
        <CompTwice>
          <template #default="scope">
            <div>
              {{ scope.item }} --------
            </div>
          </template>
        </CompTwice>
      </CompTwice>
      <CompTwice>
        <template #default="{ item }">
          <div>
            {{ item }}
          </div>
        </template>
      </CompTwice>
    </CompTop>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 700px;
}
</style>