import React, { useEffect, useState } from 'react'
import { Button,FloatingLabel,Modal,Form, Row,Col} from 'react-bootstrap'
import { addVideoCategoryAPI, deleteCategoryAPI, getAVideoAPI, getVideoCategoryAPI, updateCategoryAPI } from '../../Services/allAPI';
import Videocard from'./Videocard';


function Category(dropVideoResponse) {

const[CategoryName,setCategoryName]=useState("")
const[allCategories,setAllCategories]=useState([])


   const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleAdd=async()=>{
 if(CategoryName){
  const result=await addVideoCategoryAPI({CategoryName,allVideos:[]})
  if(result.status>=200 && result.status<300){
    handleClose()
    setCategoryName("")
  }else{
    alert(result.message)
  }
 }else{
  alert("please fill missing field")
 }
    }
useEffect(()=>{
  getCategories()
},[])

const getCategories=async()=>{
  const{data}=await getVideoCategoryAPI()
  setAllCategories(data)
}

const removeCategory=async(id)=>{
  await deleteCategoryAPI(id)
  getCategories()
}
const dragOver=(e)=>{
  console.log("video card dragged over the category");
  e.preventDefault()
}
const videoDropped=async (e,categoryId)=>{
  const videoId=e.dataTransfer.getData("videoId")
  console.log("video id"+ videoId,"dropped into the "+categoryId);
const{data}=await getAVideoAPI(videoId)
//console.log(data);
const selectedCategory=allCategories.find(item=>item.id===categoryId)
selectedCategory.allVideos.push(data)
//console.log(selectedCategory);
const res=await updateCategoryAPI(categoryId,selectedCategory)
getCategories()
}
//console.log(allCategories);
const videoDragStarted=(e,videoId,categoryId)=>{
  let dataShare={videoId,categoryId}
  e.dataTransfer.setData("data",JSON.stringify(dataShare))
}


  return (
    <>
   <div className='d-grid'>
    <button  onClick={handleShow}className='btn btn-info'>Add category</button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="category"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter category name" onChange={e=>setCategoryName(e.target.value)} />
      </FloatingLabel></Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
{
  allCategories?.length>0?allCategories.map(Category=>(
<div className="border rounded p-4 m-3" droppable="true" onDragOver={e=>dragOver(e)}onDrop={e=>videoDropped(e,Category?.id)}>
  <div className="d-flex justify-content-between algin-items-center">
    <h5>{Category?.CategoryName}</h5>
    <button className='btn' onClick={()=>removeCategory(Category?.id)}><i className="fa-solid fa-trash text-danger"></i></button>
  </div>
<Row>
  {
    Category?.allVideos?.length>0?Category?.allVideos.map(card=>(
      <Col sm={12} className='mb=3' draggable onDragStart={e=>videoDragStarted(e,card.id,Category.id)}>
        <Videocard video={card} insideCategory={true}/>
      </Col>
    )):null
  }
</Row>

</div>
  )):<p>nothing to display</p>
}


    </>
  )
}

export default Category
