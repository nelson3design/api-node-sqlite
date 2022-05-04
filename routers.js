import { Router } from "express";
import {createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from './controller/pessoa.js'

const route=Router()

route.get('/',(req, res)=>{
    res.json({
        "statusCode":200,
        "msg":"API rodando"
    })
})

route.get('/pessoas', selectPessoas)
route.get('/pessoa', selectPessoa)
route.put('/pessoa', updatePessoa)
route.delete('/pessoa', deletePessoa)
route.post('/pessoa', insertPessoa)

 
export default route
