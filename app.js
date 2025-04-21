const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Define paths first
const DIST_PATH = path.join(__dirname, 'dist');
const INDEX_PATH = path.join(DIST_PATH, 'index.html');

// Debug route (after DIST_PATH is defined)
app.get('/debug-dist', (req, res) => {
    const fs = require('fs');
    fs.readdir(DIST_PATH, (err, files) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(files);
    });
});

app.use(express.static(DIST_PATH));

app.get('/api/pokemon', (req, res) => {
    res.json([{ name: 'pikachu' }, { name: 'charizard' }]);
});

app.get('/health', (req, res) => res.send('OK'));

app.get('/version', (req, res) => res.send('1.0.0'));

app.get('*', (req, res) => {
    res.sendFile(INDEX_PATH, err => {
        if (err) {
            const debug = require('debug')('app:error');
            debug('Error sending file:', err);
            res.status(404).send('File not found');
        }
    });
});

app.listen(PORT, '0.0.0.0', () => {
    const debug = require('debug')('app');
    debug(`Server running on port ${PORT}`);
});
