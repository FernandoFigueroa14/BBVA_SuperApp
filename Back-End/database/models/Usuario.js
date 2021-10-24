module.exports=(sequelize, dataTypes) => {
    let alias ='Usuario'
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nombres: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      apellidos: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      contraseña: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      cuenta: {
        type: dataTypes.INTEGER,
        allowNull: false,
      }
    }
    let config ={
      tableName: 'usuarios',
      timestamps: false
    }
    const Usuario = sequelize.define(alias, cols, config)
  
    return Usuario;
  }