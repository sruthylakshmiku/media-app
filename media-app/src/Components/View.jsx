import React, { useEffect, useState } from 'react'
import Videocard from "./Videocard"
import { Row, Col } from 'react-bootstrap' 
import { getAllUploadedVideosAPI, getVideoCategoryAPI, updateCategoryAPI } from '../../Services/allAPI';


function View(uploadVideoResponse,setDropVideoResponse) {
const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)
  const[allVideos,setAllVideos]=useState([])
  useEffect(()=>{
    getAllVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])
  
  const getAllVideos = async()=>{
    const result = await getAllUploadedVideosAPI()
    console.log(result);
    if(result.status==200){
      console.log(result.data);
      setAllVideos(result.data)
    }else{
      console.log("api failed");
      setAllVideos([])
      
    }
      
    }
    //console.log(allVideos);
    const dragOver=(e)=>{
      e.preventDefault()
      console.log("dragged");
      
    }
   const videoDropped= async (e)=>{
    const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
   console.log(videoId,categoryId);
   const {data}=await getVideoCategoryAPI()
   const selectedCategory=data.find(item=>item.id==categoryId)
   const result=selectedCategory.allVideos.filter(video=>video.id!==videoId)
   console.log(result);
   let{id,categoryName}=selectedCategory
   let newCategory={id,categoryName,allVideos:result}
   console.log(newCategory);
   const res=await updateCategoryAPI(categoryId,newCategory)
   console.log(res);
  setDropVideoResponse(res)
   } 
    
  return (
    <>
      <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
        {
          allVideos?.length>0?allVideos.map(video=>(
        <Col sm={12} md={4} lg={3}>
        <Videocard video={video}setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
          )):<p className='text-danger fw-bolder'>Nothing To Display</p>
        }
      </Row>
    </>
  )
}

export default View
