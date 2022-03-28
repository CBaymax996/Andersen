<template>
  <div class="h-full flex   justify-between items-center ">
    <menu class="md:flex md:flex-row ">
      <div class="i-mdi-menu c-white block md:hidden"/>
      <menuitem class="color-white">123</menuitem>
    </menu>
    <div class="self-center">
      <img :src="img"
           alt="user-icon" class="h-14 w-14 rounded-50% border-4 border-gray-300 "/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import img from "~/assets/baymax.jpg"

defineProps({
  name: String,
  role: String,
  imgUrl: String
})

</script>
