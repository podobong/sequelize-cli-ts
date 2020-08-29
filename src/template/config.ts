import { DBConfig } from '../types'

const config: DBConfig = {
    development: {
        dialect: 'mysql',
        host: '127.0.0.1',
        username: 'root',
        password: null,
        database: 'development',
    },
    test: {
        dialect: 'mysql',
        host: '127.0.0.1',
        username: 'root',
        password: null,
        database: 'test',
    },
    production: {
        dialect: 'mysql',
        host: '127.0.0.1',
        username: 'root',
        password: null,
        database: 'production',
    },
}

export default config
