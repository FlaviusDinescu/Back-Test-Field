const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const app = express();

const allowedOrigins = ['http://localhost:4200'];
app.use(cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/test-post', function (req, res) {
    var params = {
        creditCardNumber: "",
        cardholder: "",
        expirationDate: "",
        securityCode: "",
        amount: "" 
    }
    params.creditCardNumber = req.body.creditCardNumber;
    params.cardholder = req.body.cardholder;
    params.expirationDate = req.body.expirationDate;
    params.securityCode = req.body.securityCode;
    params.amount = req.body.amount;
    res.status(200).send({ success: true, values: params });
});

const server = http.createServer(app);
server.listen(3000);