import { DataTypes } from 'sequelize';
import db from '../database/connection.js';

const Link = db.define('urls',
    {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true  },
        user_id: { type: DataTypes.BIGINT, allowNull: true },
        input_url: { type: DataTypes.STRING, allowNull: false },
        shortened_url: { type: DataTypes.STRING, allowNull: false },
        createdAt: { type: DataTypes.DATE },
        updatedAt: { type: DataTypes.DATE },
    },
    {
        freezeTableName: true,
        indexes: [
            {
                unique: true,
                fields: ['shortened_url']
            }
        ]
    }
);

export default Link;