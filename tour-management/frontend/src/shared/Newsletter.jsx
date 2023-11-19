import React from 'react'
import  './newsletter.css'
import {Container, Row, Col} from 'reactstrap' 
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <sectoin>
        <Container className='newsletter'>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to het useful trabeling info</h2>
                        <div className='newsletter__input'>
                            <input type='email' placeholder='Enter your email'></input>
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ut, iusto pariatur reiciendis architecto minus odit quisquam vero explicabo fugit fugiat a quam dicta omnis esse qui corporis deleniti dolorem?</p>

                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt = ''/>
                    </div>
                </Col>
            </Row>
        </Container>
    </sectoin>
  )
}

export default Newsletter
