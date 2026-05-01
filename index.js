import express from "express"
import cors from "cors"
const app=express()

app.use(express.json())

app.get('/:name',(req,res)=>{
    return res.status(200).json(`Hello ${req.params.name}`)
})

app.listen(4000)