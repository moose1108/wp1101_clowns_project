import  mongoose  from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user:{
        username:String,
        password:String
    },records: [{ type: mongoose.Types.ObjectId, ref: "Record" }],
})
const RecordSchema = new Schema({
    date:String,
    record:{
        status:String, 
        type:String, 
        content:String, 
        cost: Number
    }
})
const User = mongoose.model('User',UserSchema)
const Record = mongoose.model('Record',RecordSchema)
export {User,Record}