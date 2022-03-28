<!--
垂直布局
    	transition-width ease-in-out duration-300
-->
<template>
  <div class="h-full w-full flex flex-col items-center overflow-y-auto">
    <header class="w-full md:h-24 bg-gray-800 ">
      <NavBar/>
    </header>
    <main class="flex-1 flex flex-col items-center justify-start
        border-4 border-dashed border-gray-200 rounded-lg p-2 m-2">
      <router-view/>
    </main>

  </div>

</template>


<script setup>
import NavBar from '~/components/layout/NavBar.vue'</script>
