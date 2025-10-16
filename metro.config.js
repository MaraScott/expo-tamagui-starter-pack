// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const fs = require('fs');

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

// --- Watch the public folder so changes trigger reloads ---
config.watchFolders = Array.from(new Set([...(config.watchFolders || []), path.join(projectRoot, 'public')]));

// --- Serve /css/*, /js/*, /img/* from public/assets/{css|js|img} ---
config.server = {
  ...(config.server ?? {}),
  enhanceMiddleware: (metroMiddleware /*, server */) => {
    return (req, res, next) => {
      try {
        // Only Metro dev server (Android/iOS) hits this. Web uses Webpack.
        const rawUrl = (req.url || '').split('?')[0] || '/';
        const urlPath = decodeURIComponent(rawUrl);

        // We only claim these prefixes (no trailing slash)
        const m = urlPath.match(/^\/(?:assets\/)?(css|js|img)\/(.+)$/);
        if (!m) {
          return metroMiddleware(req, res, next);
        }

        const kind = m[1];        // css | js | img
        const rest = m[2];

        // Resolve safely inside public/assets/{kind}
        const baseDir = path.join(projectRoot, 'public', 'assets', kind);
        const fullPath = path.resolve(baseDir, rest);

        // Prevent directory traversal: ensure fullPath is inside baseDir
        if (!fullPath.startsWith(baseDir + path.sep)) {
          res.statusCode = 400;
          res.end('Bad request');
          return;
        }

        // If requesting a directory (no extension) Metro would attempt scandir;
        // we only serve files.
        if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
          res.statusCode = 404;
          res.end('Not found');
          return;
        }

        // Content-Type
        const ext = path.extname(fullPath).toLowerCase();
        const types = {
          '.css': 'text/css; charset=utf-8',
          '.js': 'application/javascript; charset=utf-8',
          '.mjs': 'application/javascript; charset=utf-8',
          '.cjs': 'application/javascript; charset=utf-8',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg',
          '.gif': 'image/gif',
          '.svg': 'image/svg+xml',
          '.webp': 'image/webp',
          '.ico': 'image/x-icon',
          '.map': 'application/json; charset=utf-8',
        };
        res.statusCode = 200;
        res.setHeader('Content-Type', types[ext] || 'application/octet-stream');
        // dev: do not cache
        res.setHeader('Cache-Control', 'no-store');
        fs.createReadStream(fullPath).pipe(res);
        return; // handled
      } catch (err) {
        // If anything goes wrong, let Metro handle it instead of crashing
        return metroMiddleware(req, res, next);
      }
    };
  },
};

// --- Resolver: keep defaults sane ---
const { assetExts, sourceExts } = config.resolver;
// Do NOT add ".js" to assetExts. Keep CSS as asset only if you serve it via <link>, not import.
config.resolver.assetExts = Array.from(new Set([...assetExts, 'css']));

// Optional, handy aliases
config.resolver.extraNodeModules = {
  ...(config.resolver.extraNodeModules || {}),
  '@app': path.resolve(projectRoot, '.'),
  '@assets': path.resolve(projectRoot, 'public', 'assets'),
  '@atoms': path.resolve(projectRoot, 'src', 'atoms'),
  '@molecules': path.resolve(projectRoot, 'src', 'molecules'),
  '@organisms': path.resolve(projectRoot, 'src', 'organisms'),
  '@templates': path.resolve(projectRoot, 'src', 'templates'),
  '@pages': path.resolve(projectRoot, 'src', 'pages'),
};

module.exports = config;
