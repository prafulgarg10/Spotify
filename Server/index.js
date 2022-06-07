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
    var sql = `SELECT Songs.Cover,Songs.DOR,Songs.SName,Sing.AName,Rates.Rating FROM Songs INNER JOIN Sing ON Songs.SName = Sing.SName LEFT JOIN (select avg(Rating) as Rating, SName from Rate group by SName) as Rates on Rates.SName=Songs.SName;`;
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
app.get('/artist_name',urlencodedParser,(req,res) => {
    var sql = `SELECT AName from Artist;`;
    con.query(sql, function (err, result) {
        if(err){
            throw err;
        }
        res.send(result);
    });
})
app.get('/song_name',urlencodedParser,(req,res) => {
    var sql = `SELECT SName from Songs;`;
    con.query(sql, function (err, result) {
        if(err){
            throw err;
        }
        res.send(result);
    });
})
app.post('/rate', urlencodedParser, (req, res) => {
    response = {
        SName: req.body.SName,
        Email: req.body.Email,
        Rating: req.body.Rating
      };
    var sql = `insert into Rate values ("${response.Email}","${response.SName}","${response.Rating}");`;
    con.query(sql, function (err, result) {
        if(err){
            throw err;
        }
        else{
        res.send(result);
        }
    });
});
app.post('/login', urlencodedParser, (req, res) => {
    response = {
        Name: req.body.Name,
        Email: req.body.Email
      };
    var sql = `insert into User values ("${response.Email}","${response.Name}");`;
    con.query(sql, function (err, result) {
        if(err){
            console.log("User already exist");
            res.send("User already exist");
        }
        else{
        res.send("");
        }
    });
});

