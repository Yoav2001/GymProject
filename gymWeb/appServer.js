//require

const express = require('express');
const bodyParser = require('body-parser');
const bp = require('body-parser');

const db = require('./queries');
const path = require('path');

//using require
const app = express();
const port = 5000;
const filePath = path.join(__dirname);
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

/*

var jsonparse = bodyParser.json();


app.use(bodyParser.json());
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

document.getElementById("email").v

*/

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

/*

console.log(__dirname);
console.log(filePath);
console.log(filePath+"/htmlFiles/homePage.html");

*/
/*
app.use('/htmlFiles',express.static(filePath+'htmlFiles'));

app.get('/homepage', function(req, res) {
    res.sendFile(filePath+"/htmlFiles/homePage.html");
});


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
*/
/*
app.get('/users', db.getUsers)
app.get('/login/:pass', db.getUserById)
app.delete('/users/:id', db.deleteUser)
app.put('/users/:id', db.updateUser)
*/

/*
app.post('/users', db.createUser(response));


app.put('/users/:id', db.updateUser)


const port = process.env.PORT||3000;
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

  // viewed at http://localhost:8650/login
*/
/*
app.get('/login', function(req, res) {
    res.sendFile(path.join('/login.html'));
});
*/