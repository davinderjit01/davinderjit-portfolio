<template>
  <NavBar :name="profile.name" :links="navLinks" />

  <main class="container">
    <!-- Hero -->
    <section id="home" class="hero">
      <div>
        <h1>{{ profile.name }}</h1>
        <p class="subtitle">{{ profile.role }} • {{ profile.location }}</p>
        <p style="margin:8px 0 0"><a :href="'mailto:' + profile.email">{{ profile.email }}</a> • <a :href="'tel:' + profile.phone">{{ profile.phone }}</a></p>
        <p>{{ profile.summary }}</p>
        <div class="badges">
          <a v-for="s in profile.socials" :key="s.label" :href="s.url" class="badge" target="_blank" rel="noopener">{{ s.label }}</a>
        </div>
        <div class="cta">
          <a class="btn primary" href="#projects">View Projects</a>
          <a class="btn" :href="'mailto:' + profile.email">Contact Me</a>
        </div>
      </div>
      <div style="display:flex;justify-content:center">
          <img class="avatar" :src="myPhotoUrl" alt="My photo" />
      </div>
    </section>

    <!-- Skills -->
    <section id="skills">
      <h2 class="section-title">Skills</h2>
      <div class="card" style="display:flex;gap:8px;flex-wrap:wrap">
        <SkillTag v-for="s in profile.skills" :key="s" :label="s" />
      </div>
    </section>

    <!-- Experience -->
    <section id="experience">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        <TimelineItem v-for="(exp, i) in profile.experience" :key="i" :item="exp" />
      </div>
    </section>

    <!-- Projects -->
    <section id="projects">
      <h2 class="section-title">Projects</h2>
      <div class="grid projects">
        <ProjectCard v-for="(p,i) in profile.projects" :key="i" :project="p" />
      </div>
    </section>

    <!-- Education -->
    <section id="education">
      <h2 class="section-title">Education</h2>
      <div class="card item" v-for="(e,i) in profile.education" :key="i">
        <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
          <strong>{{ e.degree }}</strong>
          <span class="meta">{{ e.period }}</span>
        </div>
        <div class="meta">{{ e.school }}</div>
      </div>
    </section>

    <!-- Awards -->
    <section id="awards">
      <h2 class="section-title">Awards & Achievements</h2>
      <div class="card">
        <ul style="margin:0 0 0 18px">
          <li v-for="(a,i) in profile.awards" :key="i">{{ a }}</li>
        </ul>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact">
      <h2 class="section-title">Contact</h2>
      <div class="card">
        <p><strong>Email:</strong> <a :href="'mailto:' + profile.email">{{ profile.email }}</a></p>
        <!-- <p><strong>Phone:</strong> {{ profile.phone }}</p> -->
        <p><strong>Website:</strong> <a :href="profile.website" target="_blank" rel="noopener">{{ profile.website }}</a></p>
      </div>
    </section>
  </main>

  <SiteFooter :name="profile.name" />
</template>

<script setup>
import profile from './data/profile.js'
import NavBar from './components/NavBar.vue'
import SkillTag from './components/SkillTag.vue'
import TimelineItem from './components/TimelineItem.vue'
import ProjectCard from './components/ProjectCard.vue'
import SiteFooter from './components/SiteFooter.vue'
const myPhotoUrl = new URL('./assets/me.jpeg', import.meta.url).href

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

</script>
