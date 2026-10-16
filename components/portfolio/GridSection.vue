<script setup>
import { ArrowRight, ExternalLink } from 'lucide-vue-next'
import fareminImg from '@/assets/img/Faremin.jpeg'
import stahlformImg from '@/assets/img/StahlForm.jpeg'
import ansarImg from '@/assets/img/Ansar.jpeg'

const projects = [
  {
    title: 'Maestranza Faremin', name: 'Maestranza', accentName: 'Faremin', category: 'Industria · Sitio corporativo',
    description: 'Una presencia digital a la altura de su trabajo en ingeniería.',
    problem: 'Presentar sus servicios y capacidades técnicas con claridad a potenciales clientes.',
    solution: 'Una presentación visual de la maestranza, sus capacidades operativas y sus servicios, con acceso directo al contacto.',
    image: fareminImg, width: 1600, height: 911, link: 'https://faremin.cl/',
    details: ['Presentación de la empresa', 'Servicios y capacidades', 'Contacto'],
  },
  {
    title: 'StahlForm', name: 'Stahl', accentName: 'Form', joined: true, category: 'Manufactura · Sitio corporativo',
    description: 'El diseño como primera muestra de su identidad industrial.',
    problem: 'Trasladar la identidad de la empresa a una presentación digital clara y reconocible.',
    solution: 'Un sitio que reúne la presentación de la marca y su propuesta en una experiencia visual coherente.',
    image: stahlformImg, width: 1600, height: 777, link: 'https://www.stahlform.cl/',
    details: ['Identidad visual', 'Presentación de servicios', 'Presencia digital'],
  },
  {
    title: 'Ansar Automotriz', name: 'Ansar', accentName: 'Automotriz', category: 'Automotriz · Plataforma web',
    description: 'Una vitrina digital para acercar los vehículos a sus próximos dueños.',
    problem: 'Facilitar la exploración de vehículos y el contacto con la automotora.',
    solution: 'Una presentación del inventario y de la empresa que acompaña al visitante desde la búsqueda hasta la consulta.',
    image: ansarImg, width: 1600, height: 911, archived: true,
    details: ['Vitrina de vehículos', 'Presentación de la empresa', 'Consultas'],
  },
]
</script>

<template>
  <section class="bg-section-dark pb-20">
    <article v-for="(project, index) in projects" :key="project.title" class="project-section">
      <div class="section-container">
        <header class="project-header" v-reveal>
          <p class="section-eyebrow">{{ String(index + 1).padStart(2, '0') }} / {{ project.category }}</p>
          <h2 class="project-title">{{ project.name }}{{ project.joined ? '' : ' ' }}<span class="display-accent">{{ project.accentName }}</span></h2>
          <p class="project-description">{{ project.description }}</p>
        </header>

        <div v-reveal data-delay="100">
          <figure class="project-visual">
            <div class="project-browser" aria-hidden="true">
              <span class="browser-dots"><i></i><i></i><i></i></span>
              <span>{{ project.title }}</span>
              <span class="browser-label">Vista del proyecto</span>
            </div>
            <img :src="project.image" :alt="`Diseño del sitio de ${project.title}`" :width="project.width" :height="project.height" class="project-image" loading="lazy" />
          </figure>
        </div>

        <div class="project-story" v-reveal data-delay="100">
          <div>
            <h3 class="card-title mb-3">El desafío</h3>
            <p class="project-copy">{{ project.problem }}</p>
          </div>
          <div>
            <h3 class="card-title mb-3">La propuesta</h3>
            <p class="project-copy">{{ project.solution }}</p>
          </div>
        </div>
        <p v-if="project.archived" class="project-archive-note">Diseño realizado por SysifosWeb. El sitio actual fue modificado posteriormente.</p>
        <div class="project-bottom">
          <ul class="project-details" aria-label="Aspectos del proyecto">
            <li v-for="detail in project.details" :key="detail">{{ detail }}</li>
          </ul>
          <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">
            Visitar sitio <ExternalLink class="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>

    <!-- CTA Final Section -->
    <div class="section-container relative z-10 mt-20" v-reveal data-delay="200">
        <div class="impulso-closing portfolio-cta bg-section-dark p-12 lg:p-20 text-center">
            <div class="relative z-10 max-w-3xl mx-auto">
                <h2 class="section-title portfolio-cta__title mb-6">Construyamos tu plataforma.</h2>
                <p class="text-lead text-subdued mb-10">Deja de competir por precio y empieza a competir por innovación. Diseñamos ecosistemas digitales que transforman marcas y multiplican conversiones.</p>
                
                <NuxtLink to="/contacto" class="cta-primary-btn">
                    Iniciar Proyecto
                    <ArrowRight class="w-5 h-5" />
                </NuxtLink>
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
.section-container { width: 90%; max-width: 1100px; margin-inline: auto; }
.project-section { padding-block: clamp(2.5rem, 6vw, 5rem); }
.project-section + .project-section { border-top: 1px solid var(--border); }
.project-header { margin-bottom: clamp(1.5rem, 3vw, 2.5rem); }
.project-header .section-eyebrow { margin-bottom: 1rem; }
.project-title { font-size: var(--fs-project-title); font-weight: var(--fw-h1); line-height: var(--lh-h1); letter-spacing: var(--ls-h1); color: var(--text-main); margin-bottom: .75rem; }
.project-description { font-size: var(--fs-lead); line-height: var(--lh-lead); color: var(--text-secondary); max-width: 42rem; }
.project-visual { margin: 0; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; background: var(--bg-surface); box-shadow: 0 12px 36px rgba(16,43,70,.06); transition: translate .3s ease, box-shadow .3s ease, border-color .3s ease; }
.project-browser { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: .875rem 1.25rem; font-size: var(--fs-small); color: var(--text-secondary); border-bottom: 1px solid var(--border); }
.browser-dots { display: flex; gap: .375rem; }
.browser-dots i { width: .5rem; height: .5rem; border-radius: 50%; background: var(--border-accent); }
.project-image { display: block; width: 100%; height: auto; }
.project-story { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1.5rem, 5vw, 5rem); margin-top: 2rem; }
.project-copy { font-size: var(--fs-body); line-height: var(--lh-body); color: var(--text-secondary); max-width: 52ch; }
.project-archive-note { margin-top: 1.25rem; font-size: var(--fs-small); line-height: var(--lh-body); color: var(--text-secondary); }
.project-bottom { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.5rem; margin-top: 1.75rem; }
.project-details { display: flex; flex-wrap: wrap; gap: .5rem 1.5rem; list-style: none; padding: 0; margin: 0; font-size: var(--fs-small); color: var(--text-secondary); }
.project-details li::before { content: ''; display: inline-block; width: .35rem; height: .35rem; background: var(--accent); border-radius: 50%; margin-right: .5rem; vertical-align: middle; }
.project-link { display: inline-flex; align-items: center; gap: .5rem; color: var(--accent); font-size: var(--fs-body); font-weight: 600; }
.project-link:hover { text-decoration: underline; text-underline-offset: .25rem; }
.portfolio-cta { border-radius: var(--radius-lg); padding: clamp(2rem, 6vw, 5rem); }
.portfolio-cta__title { max-inline-size: 22ch; margin-inline: auto; }
@media (max-width: 640px) {
  .project-story { grid-template-columns: 1fr; }
  .browser-label { display: none; }
  .project-browser { padding: .75rem 1rem; }
}
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .project-visual:hover { translate: 0 -4px; border-color: var(--border-accent); box-shadow: 0 20px 42px rgba(16,43,70,.12); }
}
</style>
