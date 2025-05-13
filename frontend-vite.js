#!/usr/bin/env node

import { createServer } from 'vite';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function startViteServer() {
  const server = await createServer({
    // Configure Vite
    root: join(__dirname, 'client'),
    server: {
      port: process.env.PORT || 3000,
      host: '0.0.0.0', // to make it accessible from outside
    },
    resolve: {
      alias: {
        '@': join(__dirname, 'client', 'src'),
        '@assets': join(__dirname, 'attached_assets'),
      },
    },
  });

  await server.listen();

  console.log(`Vite development server running at ${server.resolvedUrls.local[0]}`);
  
  // Log all network URLs
  server.resolvedUrls.network.forEach(url => {
    console.log(`Network access via: ${url}`);
  });
}

startViteServer().catch(error => {
  console.error('Error starting Vite server:', error);
  process.exit(1);
});