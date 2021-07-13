const express = require('express');
//const bodyParser = require('body-parser'); deprecado
const platosService = require('./services/platos-services');
const platosIngredientesService = require('./services/platos-ingredientes-services');
const ingredientesServices = require('./services/ingredientes-services');
const tragosServices = require('./services/tragos-services');
const usuariosServices = require('./services/usuarios-services');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//definir
app.get('/', (req,res)=>{
    return res.send("Api Rest de Recetas: para consultar recetasaspp.ddns.net:8080/ingredientes - recetasaspp.ddns.net:8080/platos - recetasaspp.ddns.net:8080/tragos");
});

//endpoint platos
app.get('/platos', async (req,res)=>{
    let platos = await platosService.getAll();
    return res.send(platos);
});

app.get('/platos/:filtro', async (req,res)=>{
    let platos = await platosService.getAll(req.params.filtro);
    return res.send(platos);
});

//endpoint platos ingredientes
app.get('/platosIngredientes', async (req,res)=>{
    let platosIngredientes = await platosIngredientesService.getAll();
    return res.send(platosIngredientes);
});

//endpoint ingredientes
app.get('/ingredientes', async (req,res)=>{
    let ingredientes = await ingredientesServices.getAll();
    return res.json(ingredientes);
})

//endpoint tragos
app.get('/tragos', async (req,res)=>{
    let tragos = await tragosServices.getAll();
    return res.send(tragos);
});

app.get('/tragos/:filtro', async (req,res)=>{
    let tragos = await tragosServices.getAll(req.params.filtro);
    return res.send(tragos);
});

//Endpoint post guardar usuario
app.post('/usuarios', async (req, res)=>{
    let usuario = req.body;
    return res.send(await usuariosServices.save(usuario));
});

app.listen(8080);