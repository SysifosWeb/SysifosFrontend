<template>
    <section class="py-20 bg-section-dark border-t border-white/5">
        <div class="max-w-2xl mx-auto text-center px-6">
            <div class="w-16 h-16 mx-auto bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">Recibe insights tecnológicos</h3>
            <p class="text-white/50 text-sm mb-8">Únete a nuestra lista para recibir artículos mensuales sobre arquitectura web y escalabilidad. Sin spam.</p>
            
            <form class="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="tu@email.com" class="flex-grow bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-sky-400/50 transition-colors" required>
                <button type="submit" class="px-6 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors whitespace-nowrap">Suscribirse</button>
            </form>
        </div>
    </section>
</template>
