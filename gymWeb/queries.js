
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


const tableName="t_users";



  //quires 




//GET all t_users
const getUsers  = (request, response) => {
    pool.query('SELECT * FROM t_users', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }






  
  //GET a single user by ID

  const getUserById  = (request, response) => {
    const pass = parseInt(request.params.id)
  
    pool.query('SELECT * FROM t_users WHERE pass = $1', [pass], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  ;
//all useres in another way
  const allUsers  = (request, response) => {
    const query = `
    SELECT *
    FROM t_users
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
    const { name, email } = request.body
  
    pool.query('INSERT INTO t_users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }
  /*
  const createUser =(res) => {

    
    const insertQuery = `
    INSERT INTO t_users (name, email)
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
  
    pool.query('INSERT INTO t_users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
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
    const { name, email } = request.body
  
    pool.query(
      'UPDATE t_users SET name = $1, email = $2 WHERE id = $3',
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
  
    pool.query('DELETE FROM t_users WHERE id = $1', [id], (error, results) => {
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