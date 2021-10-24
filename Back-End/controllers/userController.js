const path = require('path');
const db = require('../database/models');

const Usuarios = db.Usuario;

const usuariosController = {
        todosUsuarios: async (req, res) => {
            await Usuarios.findAll()
                                    .then(ciudad => {
                                        console.log(ciudad);
                                        res.json(ciudad);
                                    })
                                    .catch(error => console.log(error))
        },
        crearUsuario: async (req, res) => {
            console.log(req.body); // <= {id: number, nombre: text}
        
            console.log(req.body);
            
            await Usuarios.findOne({where: {nombre: req.body.nombre}})
                            .then(async usuario => {
                                if(usuario){
                                    await Usuarios.update({interes: usuario.interes+1},{where: {id: ciudad.id}})
                                    .then(() => {
                                        console.log("El interes ha aumentado");
                                        res.json({estado: "Usuario existente"});
                                    })
                                    .catch(error => {
                                        console.log(error);
                                        res.json({estado: "Error"});
                                    });
                                }else{
                                    await Usuarios.create(req.body)
                                                .then(resultado => {
                                                    console.log(resultado);
                                                    res.json({estado: 'Usuario creado'});
                                                })
                                                .catch(error => {
                                                    console.log(error);
                                                    res.json({estado: 'Error'});
                                                });
                                }
                                
                                console.log(ciudad);
                                res.json(ciudad);
                            })
                            .catch(error => {
                                console.log(error);
                                res.json({estado: "Error"});
                            });

        },
        actualizarUsuario: async (req, res) => {
            console.log(req.body);
            
            await Usuarios.update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(() => {
                console.log("Usuario actualizado");
                res.json({estado: "Usuario actualizado"});
            })
            .catch(error => {
                console.log(error);
                res.json({estado: "Error"});
            });
        },
        borrarUsuario: async (req, res) => {
            console.log(req.body);
            
            await Usuarios.destroy({
                where: {
                    id: req.body.id
                }
            })
            .then(() => {
                console.log("Ciudad eliminada");
                res.json({estado: "Usuario eliminado"});
            })
            .catch(error => {
                console.log(error);
                res.json({estado: "Error"});
            });
        },
        buscarUsuario: async (req, res) => {
            console.log(req.body);
            
            await Usuarios.findAll({where: req.body})
                            .then(usuario => {
                                console.log(usuario);
                                res.json(usuario);
                            })
                            .catch(error => {
                                console.log(error);
                                res.json({estado: "Usuario no existente"});
                            });
        },
        getUser: async (req, res) => {
            const user = await Usuarios.findByPk(req.params.id)
            res.json({
              meta: {
                status: 200,
                total: user.length,
                url: '/api/users/' + user.dataValues.product_id
              },
              data: user
            })
          }
}

module.exports = usuariosController;