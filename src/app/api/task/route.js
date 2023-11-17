import { connectDB } from "@/helper/db";
import { getResponse } from "@/helper/response";
import Task from "@/models/task";
import { NextResponse } from "next/server";

connectDB();

export const GET=async()=>{
    try{
        const tasks=await Task.find();
        if(!tasks){
            return NextResponse.json({success:"false",messgae:"Error in getting Data"});
        }
        return NextResponse.json({success:"true",messgae:tasks});
    }catch(error){
        return getResponse(false,error.message,500);
    }
}

export async function POST(request){
    try {
        const {title,content,userId}=await request.json();
        const taskk=new Task({
            title,content,userId
        })
        const result=await taskk.save();
        if(!result){
            return NextResponse.json({success:"false",message:"error"});
        }
        return NextResponse.json({success:"true",message:result});

    } catch (error) {
        console.log(error.message);
        return NextResponse.json({success:"false",message:error.message});
    }
}

// export async function DELETE(request) {
//     try {
      
//       const task = await Task.deleteMany({ status: "pending" });
//         if (task) {
//             return NextResponse.json({ success: "true", message: "Task deleted successfully" });
//         }
//        else {
//         return NextResponse.json({ success: "false", message: "Task not found or status is not pending" });
//       }
//     } catch (error) {
//       console.log(error.message);
//       return NextResponse.json({ success: "false", message: error.message });
//     }
//   }