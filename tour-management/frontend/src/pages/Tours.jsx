import React, {useState, useEffect} from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tour.css';
import tourData from '../assets/data/tours'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import Newsletter from './../shared/Newsletter'
import { Container, Row, Col } from 'reactstrap';

const Tours = () => {
  // const [pageCount, setPageCount]
  return (
    
    <>
      <CommonSection title={"All Tours"}/>
      <section>
        <Container>
          <Row>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {
              tourData?.map(tour=> <Col lg='3' key={tour.id}>
                <TourCard tour={tour}/>
                </Col>)
            }

            <Col lg='12'></Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Tours;