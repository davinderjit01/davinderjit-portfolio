<template>
  <footer class="footer">
    © {{ new Date().getFullYear() }} {{ name }} — Built with Vue 3 & Vite
  </footer>
</template>

<script setup>
defineProps({ name: String })
</script>
