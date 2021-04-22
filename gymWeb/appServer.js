var express = require('express');
var app = express();
var path = require('path');
console.log(__dirname);
const db = require('./queries');

const bodyParser = require('body-parser');
const { response } = require('express');
const filePath=path.join(__dirname);

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
/*
app.get('/users', db.getUsers)
app.get('/login/:pass', db.getUserById)
app.delete('/users/:id', db.deleteUser)
app.put('/users/:id', db.updateUser)
*/


app.post('/users', db.createUser(response));


app.put('/users/:id', db.updateUser)


const port = process.env.PORT||3000;
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

  // viewed at http://localhost:8650/login

/*
app.get('/login', function(req, res) {
    res.sendFile(path.join('/login.html'));
});
*/