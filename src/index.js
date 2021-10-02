require('tls').DEFAULT_MIN_VERSION = 'TLSv1';
const {app} = require('./app');

app.listen(app.get('port'),()=>console.log(`Ecuchando en el puerto: ${app.get('port')}`));