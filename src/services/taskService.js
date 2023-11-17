import { axiosService } from "@/helper/httpHelper";

export async function addTask(task){
    const result=await axiosService.post('/api/task',task).then(res=>res.data);
    console.log("result",result);
    return result;
}