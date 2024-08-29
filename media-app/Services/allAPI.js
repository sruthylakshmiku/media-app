
import {commonAPI} from "./CommonAPI";
import { SERVER_URL } from "./Server_url";

//UPLOAD video

export const uploadvideoAPI =async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allvideos`,video)  
}

// get alluploadvideos

export const getAllUploadedVideosAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos`,"")
}


//get A video

export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allvideos/${id}`,"")
}

// delete video

export const deleteVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allvideos/${id}`,{})
}

//addvideo history

export const addVideoHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

//getHistory

export const getVideoHistoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//delete History


export const deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

//add videos category
export const addVideoCategoryAPI=async(category)=>{
    return await commonAPI("POST",`${SERVER_URL}/category`,category)
}
//get category
export const getVideoCategoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}
//delete category
export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${id}`,{})
}
//update category
export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
}
