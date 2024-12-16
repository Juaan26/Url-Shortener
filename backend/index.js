import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './database/connection.js';
import urlRoutes from './routes/index.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors()); // Mueve cors arriba del route

app.use('/', urlRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
});
