const Usuario=require('../models/Usuario');

exports.obtenerUsuarios= async(req, res)=>{
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}

exports.obtenerUsuariosporid= async(req,res)=>{
    const id=parseInt(req.params.id);
    const usuario= await Usuario.findByPk(id);//si existe el usuario
    if(!usuario){
        res.status(404).json({
            mensaje:"Usuario no encontrado"
        })
    }
    res.json(usuario) //si encuentra el usuario en la BD entregue lso datos
}

exports.crearUsuarios= async(req,res)=>{
    const {nombre,email}=req.body;
    
}

// //Crear un nuevo usuario CREATE
// app.post("/usuarios/crear",(req,res)=>{
//     //console.log(req.body)
//     const {nombre,email}=req.body;
//     //console.log(nombre,email)
//     const nuevoUsuario={
//         id: usuarios.length+1,
//         nombre:nombre,
//         email:email
//     }

//guardar el objeto creado en la BBDD
//     usuarios.push(nuevoUsuario)
//     res.status(201).json({
//         mensaje:"usuario creado correctamente",
//         usuarioCreado:nuevoUsuario
//     })
// })
