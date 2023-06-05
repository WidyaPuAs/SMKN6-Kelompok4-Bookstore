const express = require("express");
const mysql = require("mysql") ;
const cors = require("cors") ;

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "",
        database: "bookstore",
    }
)

app.post('/signup',(req,res) => {
    con.query = "INSERT INTO user ('username', 'email', 'password') VALUES(?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err,data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
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

app.listen(8001, () => {
    console.log("Running Backend Server");
})
