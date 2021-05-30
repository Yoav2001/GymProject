//require

const express = require('express');
const bodyParser = require("body-parser");


const db = require('./queries');
const path = require('path');
const { openStdin } = require('process');

//using require
const app = express();
const port = 5000;
const filePath = path.join(__dirname); 

app.use(bodyParser.urlencoded({ extended: true }))
// Static route for files in the current directory...
// Note that this serves all files relative to the given
// path, even ones you probably don't want.
app.use(express.static(__dirname));

// Note: you should really put these files in a subdirectory
// And use static like this:
app.use('/images', express.static(__dirname +'/images')); 

const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.get('/homepage', (req, res)=> {
  res.sendFile(filePath+"/htmlFiles/homePage.html");
});
//LOG in
app.get('/login', (req, res)=> {
  res.sendFile(filePath+"/htmlFiles/login.html");
});

app.post('/login', db.getUserById)



/*
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

*/

//Sign Up


app.get('/signUp', (req, res) =>{
  res.sendFile(filePath+"/htmlFiles/signUp.html");
  
});

app.post('/signUp', db.createUser);

//userProfile
app.get('/userProfile', (req, res)=> {
  res.sendFile(filePath+"/htmlFiles/userProfile.html");
});
app.post('/userProfile', db.clickUpdateProfile);
/*
app.post('/userProfile',()=> {
  res.sendFile(filePath+"/htmlFiles/updateProfile.html");
} );
*/

//updateProfile
app.get('/updateprofile', (req, res)=> {
  res.sendFile(filePath+"/htmlFiles/updateProfile.html");
});
/*
app.post('/updateprofile', db.updateUser);
*/

app.get('/wallBlog', (req, res)=> {
   
  res.sendFile(filePath+"/htmlFiles/wallBlog.html");
});
app.post('/wallBlog', db.insertPost);


app.listen(port, () => {
  console.log(`App running on port dffdg ${port}.`)
})

/*
app.post("/signUp", (req, res) => {
 
  var subEmail = req.body.InputEmail;
  var subpass = req.body.InputPassword;
  var subfname = req.body.InputFirstName;
  var sublname = req.body.InputLastName;
  var kindUserImage='default';


  pool.query('INSERT INTO t_user (email,pass,first_name,last_name,image_name) VALUES ($1, $2,$3,$4,$5)', [subEmail,subpass,subfname,sublname,kindUserImage], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${result.insertId}`)
  })


 res.send("Hello " + subfname +" " +sublname + ", Thank you for subcribing. You email is " + subEmail +"with pass"+subpass) ;

});
*/



/*
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
*/

/*



var jsonparse = bodyParser.json();


app.use(bodyParser.json());
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

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