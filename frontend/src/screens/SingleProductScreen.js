import React, { useEffect } from 'react'
import {Link } from "react-router-dom"
 import {Col,Row,ListGroup,Button,Card,Image} from "react-bootstrap"

 import Rating from '../components/Rating'
import {useParams} from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productAction'


const SingleProductScreen = () => {
  const params=useParams()
  const dispatch=useDispatch()
  const productDetails=useSelector(state=>state.productDetails)
  const{loading,error,product}=productDetails
 
  useEffect(()=>{
    
    dispatch(listProductDetails(params.id))
  },[dispatch,params])
 
  return (
    <>
         
        <Link to="/" className='btn btn-secondary btn-lg my-3'>Go Back</Link>
        {loading ? (<h2>Loading....</h2>) : error ? (<h2>{error}</h2>):
        <Row>
          <Col md={6}>
            <Image src={process.env.PUBLIC_URL + `${product.image}`}      alt={product.name} fluid/>
          </Col>
          <Col md={3}>
             <ListGroup variant='flush' >
               <ListGroup.Item >
               <h3>{product.name}</h3>
               </ListGroup.Item>
               <ListGroup.Item><Rating value={product.rating}  text={`${product.numReview} rating`}/></ListGroup.Item>
               <ListGroup.Item>Price:{product.price}</ListGroup.Item>
               <ListGroup.Item>Description:{product.description}</ListGroup.Item>
              
             </ListGroup>
          </Col>
          <Col md={3}>
            <Card >
              <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    ${product.price}
                  </Col>
                </Row>
                </ListGroup.Item>
                <ListGroup.Item>

                
                <Row>
                  <Col>Status :</Col>
                  <Col>{product.countInStock>0 ? "In Stock" : "Out of Stock"}</Col>
                </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                <Row>
                  <Col>
                  <Button className='btn-block' type='button' disabled={product.countInStock===0}>Add to cart</Button>
                  </Col>
                </Row>
                
             
                </ListGroup.Item>
                
              

              </ListGroup>
            </Card>
          </Col>
        </Row>
        }
       
    </>
  )
}

export default SingleProductScreen