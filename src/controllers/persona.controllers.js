const {connection} = require('../database/connection');

const getPersonas =async (req,res)=>{
    try {
        const pool =await connection.getConnection();
        const result = await pool.request().execute('ObtenerPersonas');
        console.log(result.recordset);
        res.json(result.recordset);
    } catch (error) {
        console.log(error.message)
    }
}

const getPersonasCount =async (req,res)=>{
    try {
        const pool =await connection.getConnection();
        const result = await pool.request().execute('ObtenerNumeroPersonas');
        console.log(result);
        res.json(result.recordset[0]);
    } catch (error) {
        console.log(error.message)
    }
}

const getPersonaById = async (req,res)=>{
    try {
        const {id} =req.params;
       const pool = await connection.getConnection();
       const result =await pool.request()
       .input("idPersona",connection.sql.Int,id)
       .execute("ObtenerPersonaPorId");

        console.log(result?.recordset[0]);
        res.json(result?.recordset[0]);
        //console.log(id)
        //res.json(id)
    } catch (error) {
        console.log(error.message)
    }
}

const deletePersonaById = async (req,res)=>{
    try {
        const {id} =req.params;
       const pool = await connection.getConnection();
        await pool.request()
       .input("IdPersona",connection.sql.Int,id)
       .execute("EliminarPersona");

        console.log("Se elimino un registro");
        res.json("Se elimino un registro");
        //console.log(id)
        //res.json(id)
    } catch (error) {
        console.log(error.message)
    }
}

const addPersona = async (req,res)=>{
    try {
        const {Nombre,Apellido,Idprovincia} =req.body;
       const pool = await connection.getConnection();
        await pool.request()
       .input("Nombre",connection.sql.VarChar,Nombre)
       .input("Apellido", connection.sql.VarChar,Apellido)
       .input("Idprovincia",connection.sql.Int,Idprovincia)
       .execute("InsertarPersona");

        console.log("Se agrego un registro");
        res.json("Se agrego un registro");
        //console.log(id)
        //res.json(id)
    } catch (error) {
        console.log(error.message)
    }
}

const editPersona = async (req,res)=>{
    try {
        const {IdPersona, Nombre,Apellido,provincia} =req.body;
       const pool = await connection.getConnection();
        await pool.request()
       .input("IdPersona",connection.sql.Int,IdPersona)
       .input("Nombre",connection.sql.VarChar,Nombre)
       .input("Apellido", connection.sql.VarChar,Apellido)
       .input("provincia",connection.sql.Int,provincia)
       .execute("EditarPersona");

        console.log("Se edito un registro");
        res.json({IdPersona, Nombre,Apellido,provincia});
        //console.log(id)
        //res.json(id)
    } catch (error) {
        console.log(error.message)
    }
}
module.exports.controllers ={
    getPersonas,
    getPersonasCount,
    getPersonaById,
    deletePersonaById,
    editPersona,
    addPersona
}