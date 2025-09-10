<template>
  <nav class="nav">
    <div class="nav-inner">
      <div class="brand">{{ name }}</div>
      <div class="menu">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  name: String,
  links: Array
})
</script>
