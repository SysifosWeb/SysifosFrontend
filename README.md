# Sysifosweb Clone - Nuxt 3

Clone del sitio web oficial de Sysifosweb (https://sysifosweb.cl/) desarrollado con Nuxt 3.

## 🚀 Tecnologías

- **Nuxt 3** - Framework Vue.js para aplicaciones web
- **Tailwind CSS** - Framework de CSS utility-first
- **Google Fonts** - Inter y Poppins
- **Nuxt Icon** - Iconos para la interfaz
- **Nuxt Image** - Optimización de imágenes

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🏗️ Estructura del Proyecto

```
FrontEnd/
├── assets/
│   └── css/
│       └── main.css          # Estilos globales y Tailwind
├── components/
│   ├── Header.vue            # Navegación principal
│   ├── Footer.vue            # Pie de página
│   ├── Hero.vue              # Sección hero reutilizable
│   ├── ServiceCard.vue       # Tarjeta de servicio
│   ├── PortfolioCard.vue     # Tarjeta de proyecto
│   ├── BlogCard.vue          # Tarjeta de blog
│   └── ContactForm.vue       # Formulario de contacto
├── layouts/
│   └── default.vue           # Layout principal
├── pages/
│   ├── index.vue             # Página de inicio
│   ├── nosotros.vue          # Página "Nosotros"
│   ├── servicios.vue         # Página de servicios
│   ├── portfolio.vue         # Página de portfolio
│   ├── blog.vue              # Página de blog
│   └── contacto.vue          # Página de contacto
├── public/                   # Archivos estáticos
├── nuxt.config.ts            # Configuración de Nuxt
├── tailwind.config.js        # Configuración de Tailwind
└── package.json              # Dependencias del proyecto
```

## 🎨 Características

- ✅ Diseño responsive para todos los dispositivos
- ✅ Optimización SEO con meta tags
- ✅ Animaciones suaves y transiciones
- ✅ Navegación intuitiva
- ✅ Formulario de contacto con validación
- ✅ Carga optimizada de imágenes
- ✅ Tipografía moderna (Inter y Poppins)

## 📄 Páginas

1. **Home (/)** - Página principal con hero, servicios y portfolio destacado
2. **Nosotros (/nosotros)** - Información sobre la empresa
3. **Servicios (/servicios)** - Listado detallado de servicios
4. **Portfolio (/portfolio)** - Proyectos realizados
5. **Blog (/blog)** - Artículos y publicaciones
6. **Contacto (/contacto)** - Formulario de contacto e información

## 🔧 Desarrollo

El proyecto está configurado con:
- Hot Module Replacement (HMR) para desarrollo rápido
- TypeScript para type safety
- ESLint para calidad de código
- Tailwind CSS para estilos consistentes

## 📝 Licencia

Este proyecto es un clon educativo del sitio web de Sysifosweb.
