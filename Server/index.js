const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password@123",
	port:3306,
    database: "spotify",
    multipleStatements: true
});

app.listen(3001, function () {
    console.log('App listening  on port 3001!');
});

con.connect(function (err) {
    if (err)
        throw err;
});

app.post('/add', urlencodedParser, (req, res) => {
    response = {
        Name: req.body.Name,
        DOR: req.body.DOR,
        Cover: req.body.Cover,
        Artist: req.body.Artist,
      };
    var sql = `insert into Songs values ("${response.Cover}","${response.DOR}","${response.Name}");insert into Sing values ("${response.Artist}","${response.Name}");`;
    con.query(sql, function (err, result) {
        if(err){
            throw err;
        }
       res.send(result);
    });
});

app.post('/addArtist', urlencodedParser, (req, res) => {
    response = {
        Name: req.body.Name,
        DOB: req.body.DOB,
        Bio: req.body.Bio
      };
    var sql = `insert into Artist values ("${response.Bio}","${response.DOB}","${response.Name}");`;
    con.query(sql, function (err, result) {
        if(err){
            throw err;
        }
        res.send(result);
    });
});

app.get('/song',urlencodedParser,(req,res) => {
    var sql = `SELECT Songs.Cover,Songs.DOR,Songs.SName,Sing.AName FROM Songs INNER JOIN Sing ON Songs.SName = Sing.SName;`;
    con.query(sql, function (err, result) {
        if(err){
            throw err;
        }
        res.send(result);
    });
})
app.get('/artist',urlencodedParser,(req,res) => {
    var sql = `SELECT Artist.AName,Artist.DOB,Sing.SName FROM Artist LEFT JOIN Sing ON Artist.AName = Sing.AName;`;
    con.query(sql, function (err, result) {
        if(err){
            throw err;
        }
        res.send(result);
    });
})

