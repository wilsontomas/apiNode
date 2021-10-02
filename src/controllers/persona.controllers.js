const {connection} = require('../database/connection');

const getPersonas =async (req,res)=>{
    try {
        const pool =await connection.getConnection();
        const result = await pool.request().execute('ObtenerPersonas');
        console.log(result);
        res.json(result);
    } catch (error) {
        console.log(error)
    }
}

const getPersonasCount =async (req,res)=>{
    try {
        const pool =await connection.getConnection();
        const result = await pool.request().execute('ObtenerNumeroPersonas');
        console.log(result);
        res.json(result.recordset[0]);
    } catch (error) {
        console.log(error)
    }
}

module.exports.controllers ={
    getPersonas,
    getPersonasCount
}