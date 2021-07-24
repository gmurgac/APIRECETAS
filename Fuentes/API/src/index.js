const express = require('express');
//const bodyParser = require('body-parser'); deprecado
const platosServices = require('./services/platos-services');
const platosIngredientesService = require('./services/platos-ingredientes-services');
const tragosIngredientesService = require('./services/tragos-ingredientes-services');
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
    let platos = await platosServices.getAll();
    return res.send(platos);
});

app.get('/platos/:filtro', async (req,res)=>{
    let platos = await platosServices.getAll(req.params.filtro);
    return res.send(platos);
});
app.get('/plato/:filtro', async (req,res)=>{
    let plato = await platosServices.getOne(req.params.filtro);
    return res.send(plato);
});
app.get('/trago/:filtro', async (req,res)=>{
    let trago = await tragosServices.getOne(req.params.filtro);
    return res.send(trago);
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
});
//endpoint ingredientes
app.get('/ingredientes/:filtro', async (req,res)=>{
    let ingredientes = await ingredientesServices.getAll(req.params.filtro);
    return res.json(ingredientes);
});

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
app.get('/usuarios', async (req, res)=>{
    let usuario = req.body;
    return res.send(await usuariosServices.getAll());
});
//Endpoint post guardar usuario
app.post('/usuarios', async (req, res)=>{
    let usuario = req.body;
    return res.send(await usuariosServices.save(usuario));
});
//Endpoint post guardar plato
app.post('/platos', async (req, res)=>{
    let plato = req.body;
    return res.send(await platosServices.save(plato));
});
//Endpoint post guardar plato
app.post('/modificarPlatos', async (req, res)=>{
    let plato = req.body;
    return res.send(await platosServices.update(plato));
});
//Endpoint post guardar trago
app.post('/tragos', async (req, res)=>{
    let trago = req.body;
    return res.send(await tragosServices.save(trago));
});
//Endpoint post modificar trago
app.post('/modificarTragos', async (req, res)=>{
    let trago = req.body;
    return res.send(await tragosServices.update(trago));
});
//Endpoint post guardar platoIngrediente
app.post('/platosIngredientes', async (req, res)=>{
    let platoIngrediente = req.body;
    return res.send(await platosIngredientesService.save(platoIngrediente));
});
//Endpoint post borrar platoIngrediente
app.post('/eliminarPlatoIngredientes', async (req, res)=>{
    let platoIngrediente = req.body;
    await platosIngredientesService.delete(platoIngrediente)
    .then(()=>{
        return res.status(204).send();
    });
});
//Agregar ingrediente
app.post('/ingredientes', async (req, res)=>{
    let ingrediente = req.body;
    return res.send(await ingredientesServices.save(ingrediente));
});
//Agregar ingrediente a trago
app.post('/tragosIngredientes', async (req, res)=>{
    let tragoIngrediente = req.body;
    return res.send(await tragosIngredientesService.save(tragoIngrediente));
});

//Endpoint post borrar tragoIngrediente
app.post('/eliminarTragoIngredientes', async (req, res)=>{
    let tragoIngrediente = req.body;
    await tragosIngredientesService.delete(tragoIngrediente)
    .then(()=>{
        return res.status(204).send();
    });
});
//POST ELIMINAR INGREDIENTES
app.post('/eliminarIngredientes', async (req, res)=>{
    let ingrediente = req.body;
    await ingredientesServices.delete(ingrediente)
    .then(()=>{
        return res.status(204).send();
    });
});
app.post('/modificarTragosIngredientes', async (req, res)=>{
    let tragoIngrediente = req.body;
    return res.send(await tragosIngredientesService.update(tragoIngrediente));
});
app.post('/modificarPlatosIngredientes', async (req, res)=>{
    let platoIngrediente = req.body;
    return res.send(await platosIngredientesService.update(platoIngrediente));
});
app.post('/modificarUMIngredientes', async (req,res)=>{
    let ingrediente = req.body;
    return res.send(await ingredientesServices.update(ingrediente));
})

app.listen(8080);