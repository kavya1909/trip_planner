// import React from 'react'

// const BOoking = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default BOoking;


import React from 'react'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
const b0oking = ({tour, avgRating}) => {
    const {price, reviews} = tour;


    const handleChange = e => {

    }



    return (
    <div className='booking'>
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>${price}<span>/per person</span></h3>
        <span className='tour__rating d-flex align-items-center '>
          <i class="ri-star-s-fill"></i>
          {avgRating===0?null:avgRating} ({reviews?.length})
        </span>
      </div>

       {/* booking form  */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className='booking__info-form'>
          <FormGroup>
            <input type='text' placeholder='Full Name' id='fullName' 
            required onChange={handleChange}></input>
          </FormGroup>
          <FormGroup>
            <input type='number' placeholder='Phone' id='phone' 
            required onChange={handleChange}></input>
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3'>
            <input type='date' placeholder='' id='bookAt' 
            required onChange={handleChange}></input>
            <input type='nunmber' placeholder='Guest' id='guestSize' 
            required onChange={handleChange}></input>

          </FormGroup>
        </Form>
      </div> 

     </div> 
    );

};

export default b0oking;