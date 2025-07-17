const express=require('express'); //importamos la libreria
require("dotenv").config(); //esto carga las variables de entorno
const sequelize=require("./config/database")
const router =require('./routes/UsuarioRoute') // Todos los endpoints del usuario



const app=express()//instanciando una aplicacion tipo express
const port=process.env.PORT
app.use(express.json());


app.use('/',router); // use todos los endpoints del usuario

//sequelize sincorniza la base de  datos  con el proyecto
sequelize.sync().then(()=>{

app.listen(port,()=>{
    console.log(`servidor ejecutando en el puerto ${port}`)
})

}).catch((error)=>{
    console.log(`Error al conectar la Base de datos ${error}`)
});

// //req: request
// //res: response
// app.get("/",(req, res)=>{
//     res.send("backend con express")
// });

// //ruta usuarios
// let usuarios=[
//     {id:1, nombre:"juan", email: "juan@gmail,com"},
//     {id:2, nombre:"joe", email: "joe@gmail.com"},
//     {id:3, nombre:"jose", email:"jsoe@gmail.com"}
// ]

// app.get("/usuarios/todos",(req,res)=>{
//     res.json(usuarios)
// });

// //obtener usuarios por id
// app.get("/usuarios/buscar/:id",(req,res)=>{
//     const id = parseInt(req.params.id);
//     //console.log(id)
//     const usuario=usuarios.find(user=>user.id===id)
//     //console.log(usuario)
//     if(!usuario){
//         res.status(404).json({
//             mensaje:"Usuario no encontrado"
//         })
//     }
//     res.json(usuario)
// })


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
//     //guardar el objeto creado en la BBDD
//     usuarios.push(nuevoUsuario)
//     res.status(201).json({
//         mensaje:"usuario creado correctamente",
//         usuarioCreado:nuevoUsuario
//     })
// })

// //Actualizar un usuario UPDATE
// app.put("/usuarios/actualizar/:id",(req,res)=>{
//     const {nombre,email}=req.body;
//     const id=parseInt(req.params.id);
//     //buscar
//     const usuario=usuarios.find(u=>u.id===id);
//     if(!usuario || !email){
//         res.status(404).json({
//             mensaje:"Usuario y/o correo a modificar no encontrado"
//         })
//     }
//     const infoAnterior = usuario.nombre;
//     usuario.nombre=nombre;

//     const emailanterior=usuario.email;
//     usuario.email=email;

//     res.status(202).json({
//         mensaje:"Usuario y/o correo modificados correctamente",
//         infoAnterior,emailanterior,
//         infoNueva:usuario
//     })



// })


// //DELETE
// app.delete("/usuarios/eliminar/:id",(req,res)=>{
// //capturar el id pasado por parametros
// const id=parseInt(req.params.id);
// // encontrar el indice correspondiente
// const index=usuarios.findIndex(user=>user.id===id)
// //elimianr de la lista la info del indice encontrado
// if(index===-1){
//     res.status(404).json({
//         mensaje:`Usuario con id ${id} no encontrado`
// })
//     return;
// }
//     usuarios.splice(index)
//     res.status(200).json({
//     mensaje:`Usuario con id ${id} eliminado correctamente`
// })
// })
































