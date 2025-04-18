const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Use absolute path to dist directory
const DIST_PATH = path.join(__dirname, 'dist');
const INDEX_PATH = path.join(DIST_PATH, 'index.html');

// Serve static files
app.use(express.static(DIST_PATH));

// API endpoint example
app.get('/api/pokemon', (req, res) => {
    res.json([{ name: 'pikachu' }, { name: 'charizard' }]);
});

// Health check endpoint
app.get('/health', (req, res) => res.send('OK'));

// Version endpoint
app.get('/version', (req, res) => res.send('1.0.0'));

// Handle client-side routing
app.get('*', (req, res) => {
    res.sendFile(INDEX_PATH, err => {
        if (err) {
            const debug = require('debug')('app:error');
            debug('Error sending file:', err);
            res.status(404).send('File not found');
        }
    });
});

app.listen(PORT, () => {
    const debug = require('debug')('app');
    debug(`Server running on port ${PORT}`);
});

// RENDER_SERVICE_ID = srv - d00nfpqdbo4c73dgvg70;
// RENDER_API_KEY = rnd_a1ltPKHrGQbbOWvYi3UkdHjZLPFc
