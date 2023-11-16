const mongoose=require('mongoose')
const {Schema}=mongoose;

const taskSchema=new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    addedDate:{type:Date,default:Date.now(),required:true},
    status:{type:String,enum:["pending","completed"],default:"pending"},
    userId:{type:mongoose.ObjectId,require:true},
});

const Task=mongoose.models.task || mongoose.model("task", taskSchema);
export default Task;

