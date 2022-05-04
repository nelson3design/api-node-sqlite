import {openDb} from './config.js';
import {createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from './controller/pessoa.js'
import express from'express';
import route from './routers.js'

import fs from 'fs'
import https  from 'https'
import cors from 'cors'


const app= express();

const port= 5000;

app.use(express.json());

app.use(route);

app.use(cors())

// para criar a tabela

createTable();

// app.get('/',(req,res)=>{
//     res.send('salut le monde je suis Nelson')
// })

// app.get('/pessoas',async (req,res)=>{
//     let pessoas= await selectPessoas()

//     res.json(pessoas)
// })

// app.get('/pessoa',async (req,res)=>{
//     let pessoa= await selectPessoa(req.body.id)

//     res.json(pessoa)
// })




// app.post('/pessoa',(req, res)=>{
//     console.log(req.body)
//    insertPessoa(req.body)
//     res.json({
//         "statusCode":200
//     })
// })

// app.put('/pessoa',(req, res)=>{
//     if(req.body && !req.body.id){
//        res.json({
//             "statusCode":404,
//              "statusCode":"você precisa informar um id"
//         })
//     }else{

//         console.log(req.body)
//        updatePessoa(req.body)
//         res.json({
//             "statusCode":200
//         })
//     }
// })



// app.delete('/pessoa',async (req,res)=>{
//     let pessoa= await deletePessoa(req.body.id)

//     res.json(pessoa)
// })


app.listen(port,()=>{
    console.log(`API rodando na porta ${port}`)
})

const portHttps=3001

// 443 porta de um servidor

https.createServer({
    cert: fs.readFileSync('SSL/code.crt'),
    key: fs.readFileSync('SSL/code.key')
}.app).listen(portHttps,()=>{
    console.log(`Api rodando em Https na porta ${portHttps}`)
})