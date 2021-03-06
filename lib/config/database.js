module.exports =  {
  development: {
    username: 'postgres',
    password: 'root',
    database: 'sequelizer',
    host: '127.0.0.1',
    dialect: 'postgresql'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgresql',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false 
      }
   }
  }
}
