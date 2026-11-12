<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import fareminImg from '@/assets/img/Faremin.jpeg'
import stahlformImg from '@/assets/img/StahlForm.jpeg'

const clientProjects = [
  {
    id: 'faremin', title: 'Maestranza Faremin',
    image: fareminImg, width: 1600, height: 911, url: 'https://faremin.cl/',
  },
  {
    id: 'stahlform', title: 'StahlForm',
    image: stahlformImg, width: 1600, height: 777, url: 'https://www.stahlform.cl/',
  },
]
const siteProjects = [
  { id: 'cabanas', title: 'Umbral del Cielo', alt: 'Portada del sitio de cabañas' },
  { id: 'vinos', title: 'Bruma & Vid', alt: 'Portada de la tienda de vinos' },
  { id: 'hotel', title: 'Arenisca Hotel Boutique', alt: 'Portada del sitio del hotel' },
  { id: 'clinica-dental', title: 'Lúmina Dental', alt: 'Portada del sitio de la clínica dental' },
  { id: 'maquinaria-repuestos', title: 'FerroParts', alt: 'Portada del catálogo de maquinaria y repuestos' },
  { id: 'veterinaria', title: 'Patitas', alt: 'Portada del sitio de la veterinaria' },
  { id: 'clinica', title: 'Nexa Salud', alt: 'Portada del sitio de la clínica' },
  { id: 'maquinaria-transporte', title: 'RutaCargo', alt: 'Portada del sitio de transporte de maquinaria' },
].map(project => ({
  ...project,
  image: `/img/portfolio/${project.id}-sitio.webp`,
  url: `https://${project.id}.sysifosweb.cl/`,
  width: 1200,
  height: 638,
}))

const [faremin, stahlform] = clientProjects
const projects = [
  siteProjects[0], siteProjects[1],
  siteProjects[2], faremin,
  siteProjects[4], siteProjects[3],
  siteProjects[5], stahlform,
  siteProjects[7], siteProjects[6],
]
</script>

<template>
  <section id="proyectos" class="project-gallery" aria-label="Proyectos web">
    <article
      v-for="(project, index) in projects"
      :id="project.id"
      :key="project.id"
      class="project"
      v-reveal
      :data-delay="(index % 2) * 150"
    >
      <a
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
        :aria-label="`Visitar sitio de ${project.title}`"
      >
        <span class="project-preview">
          <img
            :src="project.image"
            :alt="project.alt ?? `Portada del sitio de ${project.title}`"
            :width="project.width"
            :height="project.height"
            :loading="index < 2 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : undefined"
            decoding="async"
          >
        </span>
        <span class="project-overlay" aria-hidden="true">
          <span>Visitar sitio <ArrowUpRight :size="17" /></span>
        </span>
      </a>
    </article>
  </section>

</template>

<style scoped>
.project-gallery {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: clamp(.5rem, 1vw, 1rem);
  align-items: stretch;
  scroll-margin-top: 1rem;
}

.project { grid-column: span 6; min-width: 0; }
.project-link { position: relative; display: block; width: 100%; overflow: hidden; cursor: pointer; }
.project-preview { display: block; overflow: hidden; background: var(--bg-elevated); }
.project-preview img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1200 / 638;
  object-fit: cover;
  object-position: top;
}

.project-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgb(16 43 70 / 50%);
  opacity: 0;
  pointer-events: none;
}

.project-overlay > span {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .7rem 1rem;
  background: var(--bg-surface);
  color: var(--text-main);
  font-weight: 700;
}

.project-link:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }
.project-link:focus-visible img { filter: blur(5px); transform: scale(1.04); }
.project-link:focus-visible .project-overlay { opacity: 1; }

@media (hover: hover) {
  .project-link:hover img { filter: blur(5px); transform: scale(1.04); }
  .project-link:hover .project-overlay { opacity: 1; }
}

@media (hover: none) {
  .project-overlay {
    inset: auto .5rem .5rem auto;
    opacity: 1;
    background: transparent;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .project-preview img { transition: filter .25s ease, transform .25s ease; }
  .project-overlay { transition: opacity .25s ease; }
}

@media (max-width: 680px) {
  .project-gallery { grid-template-columns: minmax(0, 1fr); }
  .project { grid-column: auto; }
}
</style>
