const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.getUser);
router.get('/todosUsuarios', userController.todosUsuarios);
router.post('/agregarUsuario', userController.crearUsuario);
router.post('/actualizarUsuario', userController.actualizarUsuario);
router.post('/borrarUsuario', userController.borrarUsuario);
router.post('/buscarUsuario', userController.buscarUsuario);


module.exports = router;