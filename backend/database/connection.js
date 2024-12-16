import { Sequelize } from 'sequelize';

const db = new Sequelize('url_shortener', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;