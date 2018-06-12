// Update with your config settings.
// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/mojobprob'
  },
  production: {
    client: 'pg',
    // connection: process.env.DATABASE_URL + '?ssl=true'
    connection: "postgres://atlurdhhzlnlwr:67d74bebc7b3432cb46c777a5e44c90ced7770e4906b7387cefb65ce80d8bd87@ec2-174-129-192-200.compute-1.amazonaws.com:5432/d1477nu2jh7n9"
  }

};
