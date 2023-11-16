import { getResponse } from "@/helper/response";
import Task from "@/models/task";

export const GET=async(request,{params})=>{
    try {
        const userId=params.user;
        const result=await Task.find({userId:userId})
        if(!result) return getResponse(false,"No task found",404);
        return getResponse(true,result,200);
    } catch (error) {
        return getResponse(false,error.message,500);
    }
}