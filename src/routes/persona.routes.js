const {Router} =require('express');
const {controllers} = require('../controllers/persona.controllers');

const router = Router();
//routes
router.get('/persona', controllers.getPersonas);
router.get('/persona/count',controllers.getPersonasCount)
router.get('/persona/get/:id',controllers.getPersonaById)
router.post('/persona/add',controllers.addPersona)
router.put('/persona/edit',controllers.editPersona)
router.delete('/persona/eliminar/:id',controllers.deletePersonaById)


module.exports.personaRoutes =router;
