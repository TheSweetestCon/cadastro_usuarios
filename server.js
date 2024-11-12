import express from 'express';
import * as dotenv from 'dotenv';
import mysql from 'mysql'
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json())

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

app.use(cors());

console.log(process.env.DB_HOST, process.env.DB_PORT, process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD)

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });





app.post('/users', (req,res) => {
    let { nome, idade, email } = req.body;

    connection.query(`INSERT INTO user (name, age, email) VALUES (?, ?, ?)`, [nome, idade, email], function(err) {
        if (err) throw (err);
        console.log('Usuário inserido!')
    });

    connection.commit();
    res.status(201).send('Ok POST')
})

app.put('/users/:id', (req,res) => {
  let { id } = req.params;
  let { nome, idade, email } = req.body;

  console.log(id)

  connection.query(`UPDATE user SET name  = ?, 
                                    age   = ?,
                                    email = ?
                              WHERE id    = ?`,
  [nome, idade, email, id], function(err) {
      if (err) throw (err);
      console.log('Usuário atualizado!')
  });

  connection.commit();
  res.status(202).send('OK PUT')
});

app.delete('/users/:id', (req, res) =>{
    let {id} = req.params;
    
    connection.query(`DELETE FROM user WHERE id = ?`, [id], function(err, result) {
        if (err) throw (err);
        console.log('Usuário Deletado!');
    })

    connection.commit;
    res.status(203).send('OK DELETE');
})

app.get('/users', (req, res) => {
    let query = `SELECT * FROM user WHERE 1=1`;
    let params=[];

    if(req.query){
        let { nome, idade, email } = req.query;

        if(nome){
          query += ` AND name IN (?)`
          params.push(nome);
        }

        if(idade){
          query += ` AND age IN (?)`
          params.push(idade);
        }

        if(email){
          query += ` AND email IN (?)`
          params.push(email)
        }
    }
    connection.query(query, params, function(err, result){
      if (err) throw (err);
      res.status(200).send(result)
  });
})

app.listen(3000);