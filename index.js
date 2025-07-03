const express=require('express'); //importamos la libreria


const app=express()//instanciando una aplicacion tipo express

//req: request
//res: response
app.get("/",(req, res)=>{
    res.send("backend con express")
});

const port=3000;

//ruta usuarios
let usuarios=[
    {id:1, nombre:"juan", email: "juan@gmail,com"},
    {id:2, nombre:"joe", email: "joe@gmail.com"},
    {id:3, nombre:"jose", email:"jsoe@gmail.com"}
]

app.get("/usuarios",(req,res)=>{
    res.json(usuarios)
});

//obtener usuarios por id
app.get("/usuarios/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    //console.log(id)
    const usuario=usuarios.find(user=>user.id===id)
    res.json(usuario)
})

















app.listen(port,()=>{
    console.log(`servidor ejecutando en el puerto ${port}`)
}) 