import React, { useState } from 'react'
import Add from "../Components/Add"
import { Link } from 'react-router-dom'
import View from "../Components/View"
import Category from "../Components/Category"
function Home() {

 const [uploadVideoResponse,setUploadVideoResponse] =useState({})
 const [dropVideoResponse,setDropVideoResponse]=useState({})
  return (
   <>
    <div className="container mt-3 mb-3 d-flex justify-content-between">
      <div className="add-videos">
<Add setUploadVideoRpesponse={setUploadVideoResponse}/>
</div>
<Link to={'/watch-history'} style={{textDecoration:"none", color:"purple"}}>Watchhistory
          <i Class="fa-brands fa-youtube fa-beat-fade me-2"></i>
          </Link>
</div>
<div className='container-fluid mt-5 mb-3 row'>
<div className='all-videos col-Ig-9'>
  <h2>All-Videos</h2>
  <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
  <div className='category col-Ig-3'>
    <Category dropVideoResponse={dropVideoResponse}/>
  </div>
  </div>
  </div>
  
  </>  
  )
}

export default Home
