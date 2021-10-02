const {Router} =require('express');
const {controllers} = require('../controllers/persona.controllers');

const router = Router();
//routes
router.get('/persona', controllers.getPersonas);
router.get('/persona/count',controllers.getPersonasCount)




module.exports.personaRoutes =router;
