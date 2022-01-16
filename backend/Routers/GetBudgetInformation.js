import { User } from "../Models/Record.js";

const QueryBudget = async (req, res) => {
    const { username, YM } = req.query;
    const user = await User.findOne({username}).populate('records');
    //console.log(user.records);
    var NewRecords = await user.records.filter((item)=>{
        console.log(item.status);
        return item.date_YM === YM && item.status === "支出";
    })
    console.log(NewRecords);
    res.send({NewRecords});
}

export default QueryBudget;