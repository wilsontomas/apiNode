const express = require('express');
const cors=require('cors');
const {personaRoutes} = require('./routes/persona.routes');
const app = express();

//serrings

app.set('port',3000);
//middlewares
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes

app.use('/api',personaRoutes);

module.exports.app =app;