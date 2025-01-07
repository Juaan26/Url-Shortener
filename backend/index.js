import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './database/connection.js';
import urlRoutes from './routes/index.js';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Configurar CORS para permitir solicitudes desde http://url.wandev.top
app.use(cors({
    origin: 'http://url.wandev.top',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

// Rutas del backend
app.use('/api', urlRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
});