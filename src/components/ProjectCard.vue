<template>
  <article class="card project-card">
    <header class="project-header">
      <h3>{{ project.name }}</h3>
      <div class="project-actions">
        <button class="btn small" @click="toggle">
          <span v-if="expanded">Show less</span>
          <span v-else>Show more</span>
        </button>
      </div>
    </header>
    <p class="subtitle">{{ project.description }}</p>
    <div class="badges">
      <span v-for="t in project.tags" :key="t" class="badge">{{ t }}</span>
    </div>

    <transition name="fade-slide">
      <ul v-if="expanded && project.details?.length" class="details">
        <li v-for="(d,i) in project.details" :key="i">{{ d }}</li>
      </ul>
    </transition>
  </article>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ project: Object })
const expanded = ref(false)
const toggle = () => expanded.value = !expanded.value
</script>

<style scoped>
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.details {
  margin: 10px 0 0 18px;
}
.btn.small {
  padding: 6px 10px;
  border-radius: 10px;
  font-size: 14px;
}
/* transition */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all .22s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
