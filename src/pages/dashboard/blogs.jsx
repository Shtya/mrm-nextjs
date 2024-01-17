"use client" ;
import React , {useEffect, useState} from 'react'
import  Link  from "next/link"

import Loading from "./Loading"
import Alt_Navbar from '@/components/Navbar1'
import Image from 'next/image';
import axios from 'axios';


const BlogsAll = () => {
  const [loadData , setloadData] =useState()
  const [data , setdata] = useState([])
  const [idDelete , setIdDelete] = useState("")
  const [showModal ,setshowModal] = useState(false)

  const handelModal = (e)=>{
    setshowModal(!showModal)
    setIdDelete(e)
  }

  const handelDelete = async()=>{
    setloadData(true)
    await axios.delete(`/api/posts/${idDelete}`)
    setshowModal(!showModal)
    setloadData(false)
  }

  useEffect(_=>{ axios.get("/api/posts").then(res => setdata(res.data))} , [loadData])


  return (
    <div className={`blogs-view`}>
      <div className="container container1"> <Alt_Navbar /> </div>
    <div className='container '>
      {data?.length >= 1 ? (
        data?.map((e,index)=> (
          <div className="boxs" key={index}>
            <div className="coverImg"> <img loading="eager" src={e.thumbnail} alt="blog"  /> </div>
            <div className="text">
              <h2 className='h2'> {e.title} </h2>
              <div className="details">
                  <h3 className='p'> {e.category} </h3>
                  <div className='date'> {e.createdAt.split("T")[0]} </div>
            </div>
            </div>
            <ul>
              <Link className='bt btn btn-view' href={`/blog/${e._id}`}> View </Link>
              <Link className='bt btn btn-edite'  href={`/dashboard/edite/${e._id}`}> Edite </Link>
              <Link className='bt btn btn-delete' href="" onClick={_=> handelModal(e._id)}> Delete </Link>
            </ul>
          </div>
        ))
      ) : <Loading /> }
    </div>

    {
      showModal && <div className="overlay-modal">
      <div className="modal">
      <i className="fa-solid fa-xmark close" onClick={_=> setshowModal(!showModal)}></i>
      <p className='p'>Are you sure you want to delete everything from this website?</p>
      <p className='p'>This action cannot be undone.</p>
        <div className="action">
          <p className='btn-delete' style={!setloadData ? {opacity:".5"} : {opacity:"1"}} onClick={handelDelete}>Delete</p>
          <p className='btn-close'  onClick={_=> setshowModal(!showModal)}>Close</p>
        </div>
    </div>
    </div>
    }
    </div>
  )
}

export default BlogsAll