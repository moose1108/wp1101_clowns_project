import express from "express"
import CreateUser from "./Register.js"
import QueryUser from "./Check.js"
import AddRecord from './AddRecord.js'
import QueryUserRecords from "./GetUserInformation.js"
import QueryPie from "./GetPieInformation.js"
import QueryBudget from "./GetBudgetInformation.js"
import Delete from "./DeleteRecord.js"
const Router = express.Router()
Router.post('/Register', (req, res) => { CreateUser(req, res) })
Router.get('/Check', (req, res) => { QueryUser(req, res) })
Router.post('/AddRecord', (req, res) => { AddRecord(req, res) })
Router.get('/GetUserInformation',(req, res)=>{QueryUserRecords(req,res)})
Router.get('/GetPieInformation',(req, res)=>{QueryPie(req,res)})
Router.get('/GetBudgetInformation',(req, res)=>{QueryBudget(req,res)})
Router.post('/DeleteRecord',(req,res)=>{Delete(req,res)});
export default Router;