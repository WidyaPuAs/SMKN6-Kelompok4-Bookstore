const express = require("express");
const mysql = require("mysql") ;
const cors = require("cors") ;

const app = express();
app.use(cors());

const con = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "",
        database: "register",
    }
)

app.post('/register',(req,res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query("INSERT INTO user (email, username, password) VALUES(?, ?, ?)", [email, username, password],
        (err, result) => {
            if(result) {
                res.send(result);
            } else {
                res.send({message: "Masukkan Data Yang Benar"})
            }
        }
    
    )
})

app.post('/login',(req,res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query("SELECT FROM user WHERE username = ? AND password = ?", [username, password],
        (err, result) => {
            if(err) {
                req.setEncoding({err: err});
            } else {
                if(result.lenght > 0 ) {
                    res.send(result);
                } else {
                    res.send({message: "Username atau Password Salah"})
                }
            }
        }
    
    )
})

app.listen(3001, () => {
    console.log("Running Backend Server");
})
