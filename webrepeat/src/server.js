var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://sineaddd.eu.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:4200',
    issuer: 'https://sineaddd.eu.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/weight', authCheck, (req, res) => {
    let goals =[];

    res.json('goals');
});

app.listen(port);