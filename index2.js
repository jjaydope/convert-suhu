//inisialasi aplikasi menggunakan express js
const express = require("express")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//data dummy simulasi
let nextId = 4;
const book =[
    { id: 1, title: "The One", year: 2019 },
    { id: 2, title: "The Second", year: 2020 },
    { id: 3, title: "The Third", year: 2021 },
];

//endpoint endpoint
app.get("/", (req,res)=>{
    res.send({
        message: "Berhasil melakukan panggilan pada GET endpoint" ,
        data :{
            description:
            "Endpoint ini bisanya janya digunakan untuk mengambil data dalam bentuk list atau object"
        },
    })
})

//post
//put
//get

const port = 3000;
app.listen(port, ()=>console.log(`App running on port ${port}`))