import { model , models , Schema } from "mongoose";


const AmlakUserSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: ()=> Date.now(),
        immutable:true
    }
})

const AmlakUser = models.AmlakUser || model("AmlakUser",AmlakUserSchema)
export default AmlakUser