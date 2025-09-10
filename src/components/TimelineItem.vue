<template>
  <div class="card item">
    <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
      <strong>{{ item.title }}</strong>
      <span class="meta">{{ item.period }}</span>
    </div>
    <div class="meta">{{ item.company }}</div>
    <ul style="margin:6px 0 0 18px">
      <li v-for="(b,i) in item.bullets" :key="i">{{ b }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({ item: Object })
</script>
