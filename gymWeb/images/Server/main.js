
/*

const expres=require('express');
const { get } = require('../../../gymServer/routes');
const app =expres();


app.get('/',(req,res)=>{

    res.send('welcome ')


});

app.get('login',(req,res)=>{

    


});
app.get()

app.get('/homePage', (req, res) => 

    var requestOptions = {
        hostname: '/gym/homePage.html', // url or ip address
        port: 8080, // default to 80 if not provided
        path: '/take-request',
        method: 'POST' // HTTP Method
    };

    var externalRequest = http.request(requestOptions, (externalResponse) => {

        // ServerB done responding
        externalResponse.on('end', () => {

            // Response to client
            res.end('data was send to serverB');
        });
    });

    // Free to send anthing to serverB
    externalRequest.write(req.data);
    externalRequest.end();
});

app.listen(5000,() =>console.log('listening on prt 4000'));

*/