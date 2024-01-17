"use client" ;
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baseURL from '@/API/API';
import UserImg from "../assets/user.png"
import EditeImg from "../assets/edite.png"
import DeleteImg from "../assets/delete.png"
import Moment from 'react-moment';
import Image from 'next/image';
import axios from 'axios';


const AddComment = () => {


  // Genrate User Id
  const [userId, setUserId] = useState("");
  useEffect(() => {
    let storedUserId = localStorage.getItem('userId');
    if (!storedUserId) {
      storedUserId = Date.now().toString(36) + Math.random().toString(36).substr(2, 5); ;
      localStorage.setItem('userId', storedUserId);
    }
    setUserId(storedUserId);
  }, []);



  // GET 
  const router = useRouter()
  const {id} = router.query ;
  const [comments , setcomments] = useState([])
  const [isload , setisload] = useState(false)
  useEffect(_=>{ id && axios.get(`/api/comments/${id}`).then(res => setcomments(res.data)) } ,[id , isload == true])




  // Post Comments 
  const [message , setMessage] = useState("")
  const [name , setname] = useState("")
  const [email , setemail] = useState("")
  const [website , setwebsite] = useState("")

  const handlePress = (e)=>{
    if (e.key === 'Enter') {  handleClick();   }
  }

  const handleClick = async(e)=>{
      if(message == "" || name == ""  || email == ""  || website == "" || userId == "" ) return toast.error("Please fill in all the field!")
      setisload(true)
      await axios.post(`/api/comments/${id}` , {message , name , email , website , userId })
      setisload(false)
      setMessage("")
      setname("")
      setemail("")
      setwebsite("")
  }


  // Delete Comments 
  const [showModal , setshowModal] =useState(false)
  const [IdDelete , setIdDelete] = useState()
  const handelModal = (e)=>{
    setshowModal(!showModal)
    setIdDelete(e)
  }
  const handelDelete = async()=>{
    setisload(true)
    await axios.delete(`/api/comments/${IdDelete}`)
    setisload(false)
    setshowModal(!showModal)
  }



// Edite Comments 
const [Edite , setEdite] = useState(false)
const [EditeId , setEditeId] = useState(false)

const [Emessage , setEMessage] = useState("")
const [Ename , setEname] = useState("")
const [Eemail , setEemail] = useState("")
const [Ewebsite , setEwebsite] = useState("")

  const handleEdite = async(e)=>{
    setEdite(!Edite)
    setEditeId(e)
  }
  const SendEdite = async(e)=>{
    if(Emessage == "" || Ename == ""  || Eemail == ""  || Ewebsite == "" || userId == "" ) return toast.error("Please fill in all the field!")
      setisload(true)
      await axios.put(`/api/comments/${e}` , {message:Emessage , name:Ename , email:Eemail ,website:Ewebsite , userId  })
      setisload(false)
      setEdite(false)
  }


  return (<>
  {
    comments?.length >= 1 ?   <div className="comments" >
    <div className="container">
        {
          comments?.map((e,index)=>(
            <div className="box" key={index}>
                {Edite == false && <Image loading="eager" src={UserImg} alt="" />}
                <div className="details">
                  {Edite && EditeId == e._id   
                    ? <input type="text" placeholder='Full Name' value={Ename} onChange={e=> setEname(e.target.value)}/>
                    : <div className="name"> {e.name}</div>}

                  {Edite && EditeId == e._id  
                    ?  <input onKeyPress={handlePress} type="text" placeholder='Website' className='web' value={Ewebsite} onChange={e=> setEwebsite(e.target.value)} />
                    : <div className="data"> <Moment format="dddd - YYYY/MM/DD" date={e.data} /></div>}

                  {Edite && EditeId == e._id  && <input type="text" placeholder='Email'  value={Eemail} onChange={e=> setEemail(e.target.value)}/> }
                  {Edite && EditeId == e._id  
                    ? <textarea placeholder='write your comment here' value={Emessage} onChange={e=> setEMessage(e.target.value)} />
                    : <div className="message"> {e.message}</div>}
                    {Edite && EditeId == e._id  && <div className="bt" onClick={_=>SendEdite(e._id)}>Edite Comments</div> }
                  
                </div>
                {
                  userId && e.userId  ? <div className="action">
                  <Image loading="eager" src={EditeImg} alt="" onClick={_=>handleEdite(e._id)} />
                  <Image loading="eager" src={DeleteImg} alt="" onClick={_=> handelModal(e._id)} />
                </div> : <></>
                }
            </div>
          ))
        }
      </div>
    </div>  :  <></>
  }


{
      showModal && <div className="overlay-modal">
      <div className="modal">
      <i className="fa-solid fa-xmark close" onClick={_=> setshowModal(!showModal)}></i>
      <p className='p'>Are you sure you want to delete this comment? </p>
      <p className='p'>This action cannot be undone.</p>
        <div className="action">
          <p className='btn-delete' style={isload == true ? {opacity:".5"}: {opacity:"1"}} onClick={handelDelete}>Delete</p>
          <p className='btn-close'  onClick={_=> setshowModal(!showModal)}>Close</p>
        </div>
    </div>
    </div>
    }


    <div className="interactive">
    <div className="container">
      <div className="h1">Leave a reply</div>
      <div className="phead"> Your Email address will not be published. Required fields are marked </div>
      <form action="">
        <textarea placeholder='write your comment here' value={message} onChange={e=> setMessage(e.target.value)} />
        <div className="groupInput">
          <input type="text" placeholder='Full Name' value={name} onChange={e=> setname(e.target.value)}/>
          <input type="text" placeholder='Email'  value={email} onChange={e=> setemail(e.target.value)}/>
          <input onKeyPress={handlePress} type="text" placeholder='Website' className='web' value={website} onChange={e=> setwebsite(e.target.value)} />
        </div>
        <div className="bt" style={isload == true ? {opacity:".5"}: {opacity:"1"}} onClick={handleClick} > Post Comment </div>
      </form>
    </div>
    <ToastContainer />
  </div>
  </>
  )
}

export default AddComment