import React ,{useState,useEffect}from 'react'
import {Link,useNavigate} from "react-router-dom"
import{} from "react-redux"
import FormContainer from '../components/FormContainer'
import { useSelector,useDispatch } from 'react-redux'
import {SignUp }from "../actions/userAction"
import { Button, Col, Form, Row } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDEtails,getUserProfileUpdate } from '../actions/userAction'
const ProfileScreen = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
  const [confirmPassword,setConfirmPassword]=useState("")
  const [message,setMessage]=useState(null)
 
  
const userLogin=useSelector(state=>state.userLogin)
const{userInfo}=userLogin
const userDetails=useSelector(state=>state.userDetails)
const{loading,error,user}=userDetails

const UserProfileUpadate=useSelector(state=>state.UserProfileUpadate)
const{success}=UserProfileUpadate

  useEffect(()=>{
    if(!userInfo){
      navigate("/login")
    }
    else{
      if(!user.name){
        dispatch(getUserDEtails("profile"))
      }
      else{
        setName(user.name)
        setEmail(user.email)
      }
    }
  },[navigate,userInfo,user])
  
  const submitHandler=(e)=>{
    e.preventDefault()
    if(password!==confirmPassword ){
      setMessage("Passwords not matching")
    }
  
    else{
      
      dispatch(getUserProfileUpdate({id:user._id,name,email}))
    }
  
  }
  return (<Row>
    <Col md={3}>
    <h1>Sign Up</h1>
    {message && <Message>{message}</Message>}
    {error && <Message variant="danger">{error}</Message>}
    {success&& <Message variant="success">Update Successfully</Message>}
    {loading&& <Loader/>}

     <Form onSubmit={submitHandler} className="my-3">
     
     <Form.Group controlId='name'>
         <Form.Label>
          Name
         </Form.Label>
         <Form.Control type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}>

         </Form.Control>
       </Form.Group>
       <Form.Group controlId='email'>
         <Form.Label>
           Email Address
         </Form.Label>
         <Form.Control type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}>

         </Form.Control>
       </Form.Group>

       <Form.Group controlId='password' className='my-2'>
         <Form.Label>
          Password
         </Form.Label>
         <Form.Control type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}>

         </Form.Control>
       </Form.Group>

       <Form.Group controlId='confirmpassword' className='my-2'>
         <Form.Label>
         Confirm Password
         </Form.Label>
         <Form.Control type="password" placeholder='Confirmpassword' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}>

         </Form.Control>
       </Form.Group>


     <Button type='submit' variant='primary' className='my-4'>
     Update
     </Button>

    



     </Form>
    </Col>
    <Col md={9}>
        <h1>MY ORDERS</h1>
    </Col>
  </Row>
   
   
  
  )
}

export default ProfileScreen