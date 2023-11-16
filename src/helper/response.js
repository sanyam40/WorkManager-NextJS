import { NextResponse } from "next/server"

export const getResponse=(message,status,success)=>{
    return NextResponse.json({success:success,message:message,status:status});
}