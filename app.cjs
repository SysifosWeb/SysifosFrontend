// Entry point for cPanel Passenger
// Ensure Node.js can find modules in node_modules
const path = require('path');
const fs = require('fs');

// Set NODE_PATH to include our node_modules directory
const projectRoot = __dirname;
const nodeModulesPath = path.join(projectRoot, 'node_modules');

// Add to module search paths
if (process.env.NODE_PATH) {
    process.env.NODE_PATH = `${nodeModulesPath}:${process.env.NODE_PATH}`;
} else {
    process.env.NODE_PATH = nodeModulesPath;
}

// Update require paths
require('module').Module._initPaths();

const port = process.env.PORT || 3000;
const outputPath = path.join(projectRoot, '.output', 'server', 'index.mjs');

// Check if the build exists
if (!fs.existsSync(outputPath)) {
    console.error('Build not found! Please run: npm run build');
    console.log(`Looking for: ${outputPath}`);

    // Fallback server
    const http = require('http');
    const server = http.createServer((req, res) => {
        res.writeHead(503, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <div style="font-family: sans-serif; text-align: center; padding: 50px;">
              <h1>Sitio en Construcción</h1>
              <p>Por favor ejecuta: npm run build</p>
              <hr>
              <small>Build no encontrado en: ${outputPath}</small>
            </div>
        `);
    });
    server.listen(port, () => {
        console.log(`Maintenance server running on port ${port}`);
    });
} else {
    // Load the Nuxt app
    console.log('Loading Nuxt from:', outputPath);
    console.log('NODE_PATH:', process.env.NODE_PATH);

    // Convert path to file:// URL for proper ES module import on Windows
    const { pathToFileURL } = require('url');
    const moduleUrl = pathToFileURL(outputPath).href;

    import(moduleUrl)
        .then(() => {
            console.log('✅ Nuxt app loaded successfully');
        })
        .catch(err => {
            console.error('❌ Failed to load Nuxt app:', err);
            console.error('Stack:', err.stack);

            // Fallback maintenance server
            const http = require('http');
            const server = http.createServer((req, res) => {
                res.writeHead(503, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end(`
                    <div style="font-family: sans-serif; text-align: center; padding: 50px;">
                      <h1>Error al Cargar</h1>
                      <p>La aplicación Nuxt encontró un error.</p>
                      <hr>
                      <pre style="text-align: left; background: #f5f5f5; padding: 20px; overflow: auto;">
${err.message}
${err.stack}
                      </pre>
                    </div>
                `);
            });
            server.listen(port, () => {
                console.log(`Error fallback server running on port ${port}`);
            });
        });
}
