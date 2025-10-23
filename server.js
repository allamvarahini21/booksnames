const express = require("express");
let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3000,()=>{
    console.log("3000 server is listening")
})
app.get("/", (req, res) => {
    res.send("books");
});
let books=[
            {
               title:"amma katha",
               author:"varshini",
                price:500
           },
            {
                title:"AI",
                 author:"vasantha",
                 price:1900
            },
            {
                title:"CD",
                author:"kavya",
               price:800
           }
        ];
let database = [];

app.post("/create", (req, res) => {
    console.log( req.body);

    let { title, author, price } = req.body;
    let newdata = { title, author, price };

    database.push(newdata);
    res.send(database)
    res.redirect('/books');
});
app.get("/book", (req, res) => {
    res.render("book.ejs",{books})
});
app.get("/new",(req,res)=>{
    res.render("new.ejs")
})
app.get("/book", (req, res) => {
    res.render("book.ejs",{books})
});


