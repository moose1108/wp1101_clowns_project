import { User } from "../Models/Record.js";
const QueryUser = async (req,res) =>{
    const { username,password} = req.query;
    console.log(req.query)
    const user = await User.findOne({user:{username,password}});
    if(user)
    {
        res.send({Message:'Login Success',status:true})
    }
    else
    {
        res.send({Message:'Username or Password is not correct.Please retry again !',status:false})
    }
}
export default QueryUser