
//connect to the DB
/*
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'y2o0a0v1',
    port: 5432,
});

client.connect();

*/
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'y2o0a0v1',
  port: 5432,
})
const bodyParser = require("body-parser");

const express = require('express');
const path = require('path');

const filePath = path.join(__dirname);
const tableName="t_user";



  //quires 




//GET all t_user
const getUsers  = (request, response) => {
    pool.query('SELECT * FROM t_user', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }






  
  //GET a single user by ID

  const getUserById  = (request, response) => {
    var subEmail = request.body.emailLogin;
    var subpass = request.body.passwordLogins;  
    pool.query('SELECT * FROM t_user WHERE email = $1 AND pass ', [subEmail,subpass], (error, results) => {
      if(result.rows>0){
        response.status(201).send("Hello " + subEmail);

      }

      if (error) {
        res.sendFile(filePath+"/htmlFiles/signUp.html");

        throw error
      }
     
    })
  }
  ;
//all useres in another way
  const allUsers  = (request, response) => {
    const query = `
    SELECT *
    FROM t_user
    `;
  
    client.query(query, (err, res) => {
      if (err) {
          console.error(err);
          return;
      }
      for (let row of res.rows) {
          console.log(row);
      }
      client.end();
    });
  }




  //POST a new user
  
  const createUser = (request, response) => {
    var subEmail = request.body.InputEmail;
    var subpass = request.body.InputPassword;
    var subfname = request.body.InputFirstName;
    var sublname = request.body.InputLastName;
    var kindUserImage='default';
    console.log(sublname,subpass);
  
    pool.query('INSERT INTO t_user (email,pass,first_name,last_name,image_name) VALUES ($1, $2,$3,$4,$5)', [subEmail,subpass,subfname,sublname,kindUserImage], (error, results) => {
      if (error) {
        throw error
      }
    

      response.status(201).send("Hello " + subfname +" " +sublname + ", Thank you for subcribing. You email is " + subEmail +"with pass"+subpass)
    })
  }
  
  /*
  const createUser =(res) => {

    
    const insertQuery = `
    INSERT INTO t_user (name, email)
    VALUES ('nuni','nuni@gmail.com')
    `;
    client
    .query(insertQuery)
    .then(res => {
        console.log('Table is successfully created');
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        client.end();
    });
  }
  
  const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO t_user (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }
  */

  //PUT updated data in an existing user
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { InputEmail, email } = request.body
  
    pool.query(
      'UPDATE t_user SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  

  //DELETE a user
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM t_user WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }
  
  module.exports = {
    allUsers,
    getUsers ,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }