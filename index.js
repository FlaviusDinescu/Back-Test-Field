const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/test-post', function (req, res) {
    var params = {
        creditCardNumber: "",
        cardholder: "",
        expirationDate: "",
        securityCode: "",
        amount: "" //
    }
    params.creditCardNumber = req.body.creditCardNumber;
    params.cardholder = req.body.cardholder;
    params.expirationDate = req.body.expirationDate;
    params.securityCode = req.body.securityCode;
    params.amount = req.body.amount;

    if (params.creditCardNumber && params.cardholder && params.expirationDate && params.amount) {
        res.status(200).send({ success: true, values: params });
    } else {
        res.status(400).send({ success: false, message: "Error in parameters" });
    }
});

app.listen(3000);