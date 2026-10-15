<template>
  <span class="brand-logo">
    <img class="brand-logo__light" src="/img/brand/logo.svg" alt="SysifosWeb" width="403" height="80" />
    <img class="brand-logo__dark" src="/img/brand/logo-dark.svg" alt="SysifosWeb" width="403" height="80" />
  </span>
</template>

<style scoped>
.brand-logo { display: inline-block; }
.brand-logo img { width: 100%; height: 100%; object-fit: contain; }
.brand-logo__light { display: var(--logo-light-display, none); }
.brand-logo__dark { display: var(--logo-dark-display, block); }
</style>
