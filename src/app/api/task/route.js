import { connectDB } from "@/helper/db";
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
        return NextResponse.json({success:"false",message:error.message});
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