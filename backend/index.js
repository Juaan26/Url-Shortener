import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './database/connection.js';
import urlRoutes from './routes/index.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3001;

// Definir __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(cors()); // Mueve cors arriba del route

// Rutas del backend
app.use('/api', urlRoutes);

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Manejar todas las demás rutas y devolver el index.html del frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
});
