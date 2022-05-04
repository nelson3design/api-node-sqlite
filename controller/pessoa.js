import {openDb} from '../config.js';


// para criar a tabela
export async function  createTable(){
    openDb().then(db=>{
        db.exec(' CREATE TABLE IF NOT EXISTS pessoa( id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTEGER)')
    })
}

// adicionar user
export async function  insertPessoa(req, res){
    let pessoa = req.body
    openDb().then(db=>{
        db.run('INSERT INTO pessoa (nome, idade) VALUES (?,?)' ,[pessoa.nome ,pessoa.idade])
    })
    res.json({
        "statusCode":200
    })
}

// editar user

export async function updatePessoa(req, res){
     let pessoa = req.body
    openDb().then(db=>{
        db.run('UPDATE pessoa SET nome=? ,idade=? WHERE id=? ' ,[pessoa.nome ,pessoa.idade, pessoa.id])
    })
     res.json({
        "statusCode":200
    })
}
// selecionar user

export async function selectPessoas(req, res){
      openDb().then(db=>{
        db.all('SELECT * FROM pessoa ')
        .then(pessoas=>res.json(pessoas))
    })
}

// buscar user


export async function selectPessoa(req, res){
    let id = req.body.id
      openDb().then(db=>{
        db.get('SELECT * FROM pessoa WHERE id=?',[id])
        .then(pessoa=>res.json(pessoa))
    })
}


// excluir user


export async function deletePessoa(req, res){
      let id = req.body.id
      openDb().then(db=>{
        db.get('DELETE FROM pessoa WHERE id=?',[id])
        .then(res=>res)
    })
     res.json({
        "statusCode":200
    })
}






// sem usar rotas


// // adicionar user
// export async function  insertPessoa(pessoa){
//     openDb().then(db=>{
//         db.run('INSERT INTO pessoa (nome, idade) VALUES (?,?)' ,[pessoa.nome ,pessoa.idade])
//     })
// }

// // editar user

// export async function updatePessoa(pessoa){
//     openDb().then(db=>{
//         db.run('UPDATE pessoa SET nome=? ,idade=? WHERE id=? ' ,[pessoa.nome ,pessoa.idade, pessoa.id])
//     })
// }
// // selecionar user

// export async function selectPessoas(){
//        return openDb().then(db=>{
//         return db.all('SELECT * FROM pessoa ')
//         .then(res=>res)
//     })
// }

// // buscar user


// export async function selectPessoa(id){
//     return  openDb().then(db=>{
//        return db.get('SELECT * FROM pessoa WHERE id=?',[id])
//         .then(res=>res)
//     })
// }


// // excluir user


// export async function deletePessoa(id){
//     return  openDb().then(db=>{
//        return db.get('DELETE FROM pessoa WHERE id=?',[id])
//         .then(res=>res)
//     })
// }