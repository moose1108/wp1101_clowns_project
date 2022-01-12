import { User } from "../Models/Record.js";

const CreateUser = async (req,res)=>{
    const { username,password } = req.body;
    console.log(req.body);
    const  Username= await User.findOne( {user:{username}});
    if(Username)
    {   
        console.log(Username);
        res.send({Message:'Username exists.Please retry again !',status:false})
    }
    else
    {
        const Passowrd = await User.findOne({user:{password}});
        if(Passowrd)
        {
            res.send({Message:'Password exists.Please retry again !',status:false})
        }
        else
        {
            const newUser = new User({user:{username,password},records:[]});
            await newUser.save();
            res.send({Message:'Register Success',status:true});
        }
    }
}

export default CreateUser