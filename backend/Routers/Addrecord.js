import { User,Record } from "../Models/Record.js";
const AddRecord = async (req, res) => {
    const {date,record,username} = req.body;
    console.log(record);
    const {status,type,content,cost} = record
    const NewRecord = new Record({date,status,type,content,cost})
    console.log(NewRecord);
    const user = await User.findOne({username})
    console.log(user);
    await NewRecord.save();
    user.records.push(NewRecord);
    await user.save();
    res.send({user});
}

export default AddRecord;