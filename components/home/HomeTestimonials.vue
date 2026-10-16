<script setup lang="ts">
// Los ejemplos deben identificarse como maqueta. Las opiniones reales requieren aprobación de su autor.
defineProps<{
  preview?: boolean
  testimonial?: {
    text: string
    author: string
    role?: string
    photo?: string
  }
}>()
</script>

<template>
  <section id="testimonios" v-if="testimonial?.text && testimonial?.author" class="testimonials-section bg-section-dark" aria-labelledby="testimonial-title">
    <div class="site-container">
      <header class="testimonial-heading">
        <p v-if="preview" class="testimonial-preview-label">Maqueta de diseño · testimonio ficticio</p>
        <span class="testimonial-rule" aria-hidden="true"></span>
        <h2 id="testimonial-title" class="section-title">Lo que dicen nuestros clientes</h2>
        <p class="section-subtitle">Experiencias reales de quienes han trabajado con nosotros.</p>
      </header>
      <div class="testimonial-feature">
        <div class="testimonial-portrait">
          <img v-if="testimonial.photo" :src="testimonial.photo" :alt="testimonial.author" width="400" height="400" loading="lazy" />
          <span v-else class="testimonial-symbol" aria-hidden="true">“</span>
        </div>
        <figure class="testimonial-card">
          <span class="testimonial-quote" aria-hidden="true">“</span>
          <blockquote><p>{{ testimonial.text }}</p></blockquote>
          <figcaption>
            <span class="testimonial-initial" aria-hidden="true">{{ testimonial.author.trim().charAt(0) }}</span>
            <div>
              <cite>{{ testimonial.author }}</cite>
              <p v-if="testimonial.role" class="testimonial-role">{{ testimonial.role }}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section { padding: var(--section-py) 0; }
.testimonial-preview-label { display: inline-block; margin: 0 0 1.5rem; padding: 0.5rem 0.875rem; border: 1px dashed var(--accent); border-radius: var(--radius-sm); color: var(--accent); font-size: var(--fs-small); font-weight: 600; }
.testimonial-heading { max-width: 48rem; margin: 0 auto 3rem; text-align: center; }
.testimonial-rule { display: block; width: 3rem; height: 3px; border-radius: 3px; background: var(--accent); margin: 0 auto 1.5rem; }
.testimonial-heading p { margin-top: 1rem; }
.testimonial-feature { display: flex; align-items: center; max-width: 58rem; margin: auto; }
.testimonial-portrait { width: 42%; aspect-ratio: 1; flex-shrink: 0; border-radius: 50%; overflow: hidden; background: var(--bg-elevated); }
.testimonial-portrait img { width: 100%; height: 100%; object-fit: cover; }
.testimonial-symbol { display: flex; justify-content: center; align-items: center; height: 100%; font-family: var(--font-heading); font-size: 10rem; color: var(--accent); }
.testimonial-card { position: relative; flex: 1; min-width: 0; margin-left: -3rem; padding: 2rem; background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: 0 16px 40px rgba(16, 43, 70, 0.08); }
.testimonial-quote { display: block; color: var(--accent); font-family: var(--font-heading); font-size: 3rem; line-height: 1; }
blockquote p { font-size: var(--fs-lead); line-height: var(--lh-lead); color: var(--text-main); }
figcaption { display: flex; gap: 0.75rem; align-items: center; margin-top: 1.5rem; }
cite { font-family: var(--font-heading); font-style: normal; font-weight: 700; color: var(--text-main); }
.testimonial-initial { display: grid; place-items: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; background: var(--bg-elevated); color: var(--accent); font-weight: 700; }
.testimonial-role { color: var(--text-secondary); font-size: var(--fs-small); }
@media (max-width: 640px) {
  .testimonial-feature { flex-direction: column; }
  .testimonial-portrait { width: min(70%, 16rem); }
  .testimonial-card { margin: -2rem 0 0; padding: 1.5rem; width: 100%; }
}
</style>
