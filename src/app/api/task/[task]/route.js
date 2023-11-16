import { getResponse } from "@/helper/response";
import Task from "@/models/task";
import { get } from "mongoose";
import { NextResponse } from "next/server";

export const GET=async(request,{params})=>{
    const taskId=params.task;
    try {
        const result=await Task.findById({_id:taskId});
        if(!result) return NextResponse.json({success:false});
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(error.message);
    }
}

export async function DELETE(request,{params}) {
    const taskId=params.task;
    try {
        const result=await Task.findByIdAndDelete({_id:taskId});
        if(!result) return NextResponse.json({success:false});
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(error.message);
    }   
}

export async function PUT(request,{params}) {
    const taskId=params.task;
    const {title,content,status}=await request.json();   
    try {
        const result=await Task.findByIdAndUpdate({_id:taskId},{title,content,status});
        if(!result) return NextResponse.json({success:false});
        return getResponse(true,result,200);
    } catch (error) {
        return NextResponse.json(error.message);
    }
}