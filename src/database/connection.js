const sql = require('mssql');
const {config} = require('../config.js');
const getConnection = async ()=>{
    try {
        let pool= await sql.connect(config);
        return pool;
    } catch (error) {
        console.log(error)
    }
}

module.exports.connection = {sql,getConnection}