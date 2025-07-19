const Usuario=require('../models/Usuario');

exports.obtenerUsuarios= async(req, res)=>{
    try{
    const usuarios = await Usuario.findAll();
    return res.json(usuarios);
    }catch(error){
    return res.json(error);
    }
}

exports.obtenerUsuariosporid= async(req,res)=>{
    try{
const id=parseInt(req.params.id);
    const usuario= await Usuario.findByPk(id);//si existe el usuario
    if(!usuario){
        return res.status(400).json({
            mensaje:"Usuario no encontrado"
        })
}
    res.json(usuario) //si encuentra el usuario en la BD entregue lso datos
}catch{
    return res.status(401).json({mensaje: error.message})
}
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
