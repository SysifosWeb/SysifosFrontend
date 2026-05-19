<template>
  <div class="min-h-screen font-sans">
    <div>
      <AppNavbar class="absolute top-0 left-0 w-full z-10"/>
      <AppHeader />
    </div>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
