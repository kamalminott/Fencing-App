const Sequelize = require('sequelize-cockroachdb');

const sequelize = new Sequelize( {
    username: 'kamalminott',
    password:'u1Lf0s3d6nGKiEphl8RYvA',
    database: 'defaultdb',
    dialect: 'postgres',
    host: 'fencingdb-8369.8nj.cockroachlabs.cloud',
    port: 26257,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;