<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import contactBackdrop from '@/assets/img/design-optimized.webp'

// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Portfolio | Proyectos de Desarrollo Web y Software a Medida — SysifosWeb',
  description: 'Explora una selección de diseños web de SysifosWeb.',
  keywords: 'portfolio desarrollo web chile, casos de éxito software, proyectos desarrollo web empresas, ejemplos software a medida, ecommerce chile',
  image: '/img/og-portfolio.webp'
})

setSchema({
  type: 'WebPage',
  data: {
    name: 'Portfolio de Proyectos — SysifosWeb',
    description: 'Selección de diseños web y casos de desarrollo de SysifosWeb.'
  }
})

definePageMeta({
  layout: 'hero',
  title: 'Portfolio'
})
</script>

<template>
  <div class="portfolio">
    <PortfolioHeroSection />

    <div class="site-container portfolio-frame">
      <PortfolioGridSection />

      <section class="portfolio-contact impulso-closing" aria-labelledby="portfolio-contact-title">
        <div class="portfolio-contact-media" aria-hidden="true">
          <img :src="contactBackdrop" alt="" loading="lazy" decoding="async">
        </div>
        <div class="portfolio-contact-content" v-reveal data-delay="100">
          <h2 id="portfolio-contact-title" class="section-title">Hablemos de tu sitio</h2>
          <p>Cuéntanos qué necesita tu negocio y conversemos sobre cómo llevarlo a la web.</p>
          <NuxtLink to="/contacto" class="cta-primary-btn">
            Cuéntanos tu proyecto
            <ArrowUpRight :size="20" aria-hidden="true" />
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.portfolio { background: var(--bg-surface); color: var(--text-main); }
.portfolio-frame {
  padding-block: clamp(1.5rem, 4vw, 3.5rem) clamp(2.5rem, 6vw, 6rem);
}

@media (prefers-reduced-motion: no-preference) {
  .portfolio-frame :deep(.project.reveal-item),
  .portfolio-contact-content.reveal-item {
    transition: opacity 1.1s ease-out, transform 1.1s ease-out;
  }

  .portfolio-frame :deep(.project.reveal-item:not(.is-revealed)),
  .portfolio-contact-content.reveal-item:not(.is-revealed) {
    transform: translateY(40px);
  }
}

.portfolio-contact {
  position: relative;
  display: grid;
  align-items: center;
  min-height: clamp(19rem, 27vw, 24rem);
  margin-top: clamp(3rem, 8vw, 7rem);
  padding: clamp(1.5rem, 3.5vw, 3rem) clamp(2rem, 6vw, 5.5rem);
  overflow: hidden;
  border-radius: .875rem;
  background: var(--bg-dark);
  color: var(--text-main);
}

.portfolio-contact-media {
  position: absolute;
  inset: 0 0 0 36%;
  overflow: hidden;
}

.portfolio-contact-media img {
  display: block;
  width: 100%;
  height: 112%;
  object-fit: cover;
  object-position: center;
  transform: translateY(-6%);
}

.portfolio-contact-media::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, var(--bg-dark), transparent 78%);
  content: '';
}

.portfolio-contact-content {
  position: relative;
  max-width: min(33rem, 62%);
}

.portfolio-contact h2 {
  max-width: 16ch;
  margin: 0;
  font-size: var(--fs-page-hero);
  text-wrap: balance;
}

.portfolio-contact p {
  max-width: 43ch;
  margin-top: 1rem;
  color: var(--text-secondary);
  font-size: var(--fs-lead);
  line-height: var(--lh-lead);
}

.portfolio-contact .cta-primary-btn {
  min-height: 44px;
  margin-top: 1.5rem;
  justify-content: center;
}

.portfolio-contact .cta-primary-btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

@media (max-width: 760px) {
  .portfolio-contact {
    min-height: 0;
    padding-top: clamp(8.75rem, 34vw, 14rem);
  }

  .portfolio-contact-media {
    inset: 0 0 auto;
    height: clamp(9.75rem, 37vw, 15rem);
  }

  .portfolio-contact-media::after {
    background: linear-gradient(0deg, var(--bg-dark), transparent 70%);
  }

  .portfolio-contact-content {
    max-width: 100%;
  }
}

@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .portfolio-contact {
      view-timeline-name: --portfolio-contact;
    }

    .portfolio-contact-media img {
      animation: portfolio-contact-scroll linear both;
      animation-timeline: --portfolio-contact;
      animation-range: entry 0% exit 100%;
    }
  }
}

@keyframes portfolio-contact-scroll {
  from { transform: translateY(-11%); }
  to { transform: translateY(0); }
}
</style>
