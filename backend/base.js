import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bookstore"
})

app.get("/", (req,res) => {
    res.json("Backend Apaan")
})

app.get("/books", (req,res) => {
    const q = "SELECT * FROM book_product"
    db.query(q, (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req,res) => {
    const q = "INSERT INTO book_product ('judul_buku', 'author', 'harga_buku', 'cover') VALUES (?)"
    const values = ["judul_buku from backend","author from backend","harga_buku from "]
})

app.listen(8800, () => {
    console.log("Connected to Backend")
})