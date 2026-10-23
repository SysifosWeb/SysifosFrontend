<template>
  <div>
    <section id="home-cookie-banner" hidden aria-labelledby="cookie-title" aria-describedby="cookie-desc" class="consent-banner">
      <h2 id="cookie-title">Tú eliges qué compartes</h2>
      <p id="cookie-desc">Usamos almacenamiento necesario para el sitio. Si aceptas, Google Analytics nos ayuda a entender las visitas. No activamos publicidad personalizada. Puedes cambiar tu elección en «Configurar cookies».</p>
      <a href="/privacidad">Política de privacidad</a>
      <div class="consent-actions">
        <button type="button" data-consent="accepted">Aceptar analítica</button>
        <button type="button" data-consent="rejected">Rechazar analítica</button>
        <button type="button" data-consent="preferences">Configurar</button>
      </div>
    </section>
    <dialog id="cookie-preferences" class="consent-dialog" aria-labelledby="cookie-preferences-title" aria-describedby="cookie-preferences-desc">
      <h2 id="cookie-preferences-title">Preferencias de cookies</h2>
      <p id="cookie-preferences-desc">Elige si permites medir tus visitas. Rechazar no impide usar el sitio.</p>
      <div class="consent-option">
        <label><input type="checkbox" checked disabled> Necesarias (siempre activas)</label>
        <p>Permiten el funcionamiento del sitio y guardar tu elección.</p>
      </div>
      <div class="consent-option">
        <label><input type="checkbox" data-consent-analytics> Analítica de Google</label>
        <p>Permite enviar datos de visitas y eventos a Google Analytics. No enviamos los datos que escribes en los formularios.</p>
      </div>
      <p>Publicidad y personalización publicitaria: desactivadas.</p>
      <p>Guardamos tu elección durante 180 días en este navegador. <a href="/privacidad">Ver política de privacidad</a>.</p>
      <div class="consent-actions">
        <button type="button" data-consent-save>Guardar preferencias</button>
        <button type="button" data-consent-close>Cerrar sin cambiar</button>
      </div>
    </dialog>
  </div>
</template>
