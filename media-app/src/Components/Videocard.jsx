import {React, useState} from 'react'
import { Card, Button, Modal} from 'react-bootstrap'
import { addVideoHistoryAPI, deleteVideoAPI } from '../../Services/allAPI';
import Category from './Category';

function Videocard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{ setShow(true);

  const{name,link}=video
  let today=new Date()
//console.log(new Intl.DateTimeFormat('en-us',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today));
let timeStamp=new Intl.DateTimeFormat('en-us',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today);

let videoHistory={name,link,timeStamp}
//make api call
await  addVideoHistoryAPI(videoHistory)
  }
  const removeVideo=async(id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }
const dragStarted=(e,id)=>{
  console.log("drag started"+ id);
  e.dataTransfer.setData("videoId",id)
}


  return (
    <>
      <Card style={{ width: '14rem' }}draggable onDragStart={e=>dragStarted(e,video?.id)} >
      <Card.Img variant="top" src={video?.url} onClick={handleShow}/>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
        <h3>{video?.name}</h3>
        {insideCategory?null:<button className='btn' onClick={()=>removeVideo(video?.id)}><i className="fa-solid fa-trash text-danger"></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="450" height="315" src={`${video?.link}?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe></Modal.Body>
      </Modal>
    </>
  )
}

export default Videocard 