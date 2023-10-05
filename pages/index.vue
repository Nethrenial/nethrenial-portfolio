<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p @click="router.push('/')">Current route: Hehe</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
