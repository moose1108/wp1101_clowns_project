import { User, Record} from "../Models/Record.js";
const Delete = async (req,res)=>{
    let count = 0;
    const {username, status , content,date,type} = req.body;
    // console.log(req.body);
    let deleted;
    const user = await User.findOne({username}).populate('records');
    user.records = await user.records.filter(item=> {
        if(item.status === status && item.content ===content && count === 0 && item.date ===date && item.type ===type)
        {
            count +=1;
            deleted = item;
            return false
        }
        else
            return true;
    })
    console.log("====================================")
    console.log(user.records);
    console.log(deleted);
    await Record.findByIdAndRemove(deleted._id);
    await user.save();
    res.send({Message:"Delete Success !"});
}
export default Delete