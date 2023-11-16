import { connectDB } from "@/helper/db"
import { User } from "@/models/user";
import { NextResponse } from "next/server"

connectDB();

export async function GET(){
    try{
        const users=await User.find().select("-password");
        if(!users){
            return NextResponse.json({success: false, message: "No users found"});
        }
        return NextResponse.json({success: true, data: users});
    }
    catch(err){
        return NextResponse.json({success: false, message: err.message});
    }
}

export async function POST(request){
    try{
        const {name,email,password,about,photo}=await request.json();
        console.log(name,email,password,about,photo);
    
        const user=new User({
            name,
            email,
            password,
            about,
            photo
        })
        const result=await user.save();
        if(!result){
            return NextResponse.json({success: false, message: "Something went wrong"});
        }
        return NextResponse.json({success: true, data: result});
    }catch(err){
        return NextResponse.json({success: false, message: err.message});
    }
}