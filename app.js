const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static(path.join(__dirname, 'dist')));

// Essential endpoints
app.get('/health', (req, res) => res.send('ok'));
app.get('/version', (req, res) => res.send('2')); // Increment with each deploy

// Client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV || 'development'} mode`
    );
});
