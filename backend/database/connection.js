import { Sequelize } from 'sequelize';

const db = new Sequelize('url_shortener', 'admin', '1234', {
    host: '127.0.0.1',
    dialect: 'mariadb',
    // logging: false,
});

export default db;