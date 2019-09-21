const express = require("express");

const app = express();

//middleware

function requestCommming(req, res, next) {
    console.log("request is commasdfasdfasg")
    next();
}

function authCheck() {
    // check

}

app.get('/mecca/:product', requestCommming, function(req, res){
    requestCommming()
    authCheck()
    res.send(`mecca ${req.params['product']}`)
});

app.get('/carsales', function(req, res){
    requestCommming()
    authCheck()
    res.send("carsales")
});




app.listen(5777, () => {
    console.log('server is run on 5777')
});