// yarn add sequelize
// yarn add mysql2

import { Sequelize } from 'sequelize'
import config from '../config/config.js'

const sequelize = new Sequelize(config.database, config.user, config.pass, {
    host: config.host,
    port: config.port,
    dialect: config.dialect

})

// Test connection
// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

export default sequelize

// yarn sequelize-auto -h localhost -d db_youtube -u root -x HoanglonG81@ -p 3308 --dialect mysql -o ./src/models -l esm
