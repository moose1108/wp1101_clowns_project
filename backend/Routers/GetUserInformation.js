import { User } from "../Models/Record.js";
const QueryUserRecords = async (req,res)=>{
    const { username } = req.query;
    console.log(username);
    const user = await User.findOne({username});
    await res.send({user:user});
}
export default QueryUserRecords