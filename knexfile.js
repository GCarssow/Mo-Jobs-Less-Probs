module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/mojobprob'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
