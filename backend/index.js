const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 8000
const cors = require('cors')
const todoRouter = require('./routes/todos.js')
const dbconnect = require('./db')
const arr = require('./data.js')
console.log("🚀 ~ arr:", arr)


require('dotenv').config({ path: '.env' })

app.use(express.json())
app.use(cors())
// dbconnect()
// app.use(todoRouter)

app.get("/", (req, res) => res.send("todo server is running on vercel"))
app.listen(PORT, () => console.log(`Server is Running on: ${PORT} `))



// app.use("/todo", todoRouter)


app.use("/todo", async (req,res)=>{
console.log("I am in get Todos")
    
    res.send({ message: "all todos", status: 200, data: arr })
})

// async function getTodos(req, res) {
//     console.log("I am in get Todos")
//     const resp = await Todo.find()
//     res.send({ message: "all todos", status: 200, data: resp })
// }



// app.listen(PORT, async () =>{
//     await dbconnect();
//     console.log("server is running at 5000")
//     console.log("db connected")
// })