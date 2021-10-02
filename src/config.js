let config = {
    user: 'wilson',
    password: '123456',
    server: 'localhost', 
    database: 'Persona',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
}

module.exports.config =config;