// Entry point for cPanel Passenger
// Importa el build de Nuxt (que se generará con npm run build)
// Si no existe, muestra un mensaje de mantenimiento

const port = process.env.PORT || 3000;

import('./.output/server/index.mjs')
    .then(app => {
        console.log('Nuxt app loaded successfully');
    })
    .catch(err => {
        console.error('Failed to load Nuxt app (maybe not built yet?):', err);
        console.log('Starting fallback maintenance server...');

        // Fallback: Servidor simple para mantener a Passenger feliz mientras construyes
        const http = require('http');
        const server = http.createServer((req, res) => {
            res.writeHead(503, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
        <div style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h1>Sitio en Construcción</h1>
          <p>La aplicación Nuxt se está generando o hubo un error al cargar.</p>          
          <hr>
          <small>Error: ${err.message}</small>
        </div>
      `);
        });
        server.listen(port, () => {
            console.log(`Maintenance server running on port ${port}`);
        });
    });
