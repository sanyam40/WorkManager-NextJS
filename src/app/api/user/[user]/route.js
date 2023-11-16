import { User } from "@/models/user";
import { NextResponse } from "next/server";

export const GET=async(request,{params})=>{
    try {
        const userId=params.user;
        const result=await User.findOne({_id:userId});
        if(!result){
            return NextResponse.json({message:"user not found"});
        }
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({message:error.message});
    }
}

export const PUT=async(request,{params})=>{
    try {
        const userId=params.user;
        const {name,email}=await request.json();
        const result=await User.findByIdAndUpdate({_id:userId},{name,email});
        if(!result){
            return NextResponse.json({message:"user not found"});
        }
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({message:error.message});
    }
}

export async function DELETE(request,{params}){
    try {
        const userId=params.user;
        const result=await User.deleteOne({_id:userId});
        if(result){
            return NextResponse.json({message:`delete user from ${userId}`});     
        }   
        return NextResponse.json({message:"Something went wrong"});
    } catch (error) {
        return NextResponse.json({message:error.message});
    }
}