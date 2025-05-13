#!/usr/bin/env node

import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

// Simple static file server
const server = createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  // Basic routing
  let filePath;
  if (req.url === '/' || req.url === '/index.html') {
    filePath = join(__dirname, 'client', 'index.html');
  } else {
    // Serve static files from client directory
    filePath = join(__dirname, 'client', req.url);
  }
  
  try {
    const content = readFileSync(filePath);
    
    // Set content type based on file extension
    const ext = filePath.split('.').pop();
    const contentTypeMap = {
      'html': 'text/html',
      'css': 'text/css',
      'js': 'text/javascript',
      'json': 'application/json',
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'gif': 'image/gif',
      'svg': 'image/svg+xml',
      'ico': 'image/x-icon'
    };
    
    res.writeHead(200, { 'Content-Type': contentTypeMap[ext] || 'text/plain' });
    res.end(content);
  } catch (error) {
    // Handle file not found or other errors
    if (error.code === 'ENOENT') {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(500);
      res.end('Internal server error');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Frontend server running at http://localhost:${PORT}`);
});