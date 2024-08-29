// import React from 'react'
// import {Button, Card, Col,Row} from'react-bootstrap'
// import { useNavigate } from 'react-router-dom'
// function Landingpage() {
//   const navigateByUrl=useNavigate()
//   return (
//     <>
// <Row className="mt-5 algin-item-center justify-content-betwwen w-100">
//   <Col>
//   <Col Ig={5}>
// <h1 style={{color:"blueviolet",fontSize:"40px"}}> Welcome to <span
// className='text-warning'>Media-player</span></h1>
// <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quis, repellendus reiciendis praesentium perferendis veritatis et consequuntur eaque porro sapiente eligendi accusantium officia molestiae exercitationem repellat quos aliquid alias saepe!</p>
// <Button onClick={()=>navigateByUrl('/home')} className='btn btn-info'>Get Started</Button></Col>
// <Col Ig={5}>
// <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Pj31BCNqyPoSqcabFXPRyDI4cc4mI4Ep2LJt0e9h6FFLxZWE-qmYF0dQGZCQKI36eb0&usqp=CAU"/>
// </Col>
// </Col>
// </Row>
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {

  const navigateByUrl= useNavigate()
  return (
    <>
  <Row className="mt-5 align-items-center justify-content-between w-100">
    <Col></Col>
    <Col lg={5}>
    <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'> Media-Player</span></h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus adipisci asperiores ex non atque eligendi dolorem modi magni dicta, porro blanditiis vero beatae architecto? Inventore quo nesciunt rem vero!</p>

    <Button onClick={()=>navigateByUrl('/home')}className="btn btn-info">Get-Started</Button>
    </Col>
    <Col lg={5}>
    <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt=''/>
    </Col>
    <Col></Col>
  </Row>
<div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
      <h5 className='text-warning' style={{fontsize:"40px"}}>Features</h5>

      <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
      <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://t4.ftcdn.net/jpg/06/53/16/23/360_F_653162338_thHwfkZ86Lt6L7CUsv9PS6cSbBT28sZd.jpg" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://static.vecteezy.com/system/resources/thumbnails/037/530/163/small_2x/ai-generated-large-headphones-lay-on-the-night-pavement-night-disco-music-background-with-neon-lighting-photo.jpg" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://t3.ftcdn.net/jpg/07/81/79/92/360_F_781799279_aKVykqg9A7KwOjHVWkM8wGjlhGKsA3AU.jpg" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    </div>

    <div className="container border rounded p-4 border-light mt-5 d-flex justify-content-center align-items-center">
    <div className="col-lg-5">
      <h4>Simple,Powerful & Fast</h4>
      <h6><span className='text-warning'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam numquam, aperiam obcaecati quidem nihil alias iure eaque beatae provident rem excepturi dolorem ex architecto fugit? Quia voluptate reprehenderit dolorem!</h6>

      <h6><span className='text-warning'>Categorize Videos</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam numquam, aperiam obcaecati quidem nihil alias iure eaque beatae provident rem excepturi dolorem ex architecto fugit? Quia voluptate reprehenderit dolorem!</h6>

      <h6><span className='text-warning'>Managing Videos</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ullam numquam, aperiam obcaecati quidem nihil alias iure eaque beatae provident rem excepturi dolorem ex architecto fugit? Quia voluptate reprehenderit dolorem!</h6>
    </div>

    <div className='col-lg-5'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/uMQnn8xU7qs?si=00hCR2UDKDusjvTn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    </div>

  
    </>
  )
}

export default Landingpage
