import express from "express"
import CreateUser from "./Register.js"
import QueryUser from "./Check.js"
const Router = express.Router()
Router.post('/Register',(req,res)=>{CreateUser(req,res)})
Router.get('/Check',(req,res)=>{QueryUser(req,res)})

export default Router;