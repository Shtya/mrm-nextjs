"use client"
import React, { useEffect, useState } from 'react'
import baseURL, { GetImg } from '../../API/API';
import axios from 'axios';
import Alt_Navbar from '@/components/Navbar1';


const UploadImg = () => {
  const [done , setdone] = useState(false)

  const formdata = new FormData();
  const handleImg = (e) => {
    const files = Array.from(e.target.files)
    files?.forEach((e) => formdata.append("images", e));
  }

  const handleSubmit  = async ()=>{
    setdone(true)
    await baseURL.post('image', 
      formdata,
      {headers: { "Content-Type": "multipart/form-data" }}
    ).then(res => console.log(res))
    setdone(false)
  }


  const handleCopy = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };




  // GET Images
  const [Images , setImages] = useState([])
  useEffect(_=>{ axios.get("/api/img").then(res => setImages(res.data)).catch(err => console.log(err)) } ,[done])

  return (
    <div className='addImage'>
      <Alt_Navbar />
      <div className="container">
      <input type="file"  multiple onChange={handleImg}/>
      <button onClick={handleSubmit} className='bt' style={done ? {opacity:".7"} : {opacity:"1"}}>  Send </button>
      <div className="images">
        {Images?.map((e,index)=> <div key={index}>
          
          <div className="grid"> {e?.images?.map((ele , idx) => <div key={100 + idx} className="box">  <img loading="eager"  style={{color:"white"}} src={`${GetImg}/${ele}`} alt={ele} />  <div> {ele} </div>  <div className="copy" onClick={() => handleCopy(`https://mrm-0-server.vercel.app/image/${ele}`)}> copy</div> </div>  )}</div>
          <hr/>
          <hr/>
          </div>)}
      </div>
      </div>
    </div>
  )
}

export default UploadImg