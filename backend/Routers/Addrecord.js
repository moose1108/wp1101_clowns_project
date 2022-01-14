import { User,Record } from "../Models/Record.js";
const AddRecord = async (req, res) => {
    const {dateY,dateYM,date,record,username} = req.body;
    console.log(record);
    const {status,type,content,cost} = record
    const NewRecord = new Record({dateY,dateYM,date,status,type,content,cost})
    console.log(NewRecord);
    const user = await User.findOne({username})
    // console.log(user);
    await NewRecord.save();
    user.records.push(NewRecord);
    await user.save();
    res.send({Message:'Add Success'});
}

export default AddRecord;