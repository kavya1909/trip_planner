import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
const Home = () => {
  return <>
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero__content'>
            <div className='hero__subtitle d-flex align-items-center'>
              <Subtitle subtitle='Know Before You Go'/>
              <img src={worldImg} alt=''></img>
            </div>
            <h1>
              Traveling opens the door to creating  
              <span className='highlight'>
                 memories
              </span>
            </h1>
            <p>
            "Embark on unforgettable journeys with our intuitive trip planner! Explore the world hassle-free as our user-friendly platform simplifies the intricate process of crafting your dream itinerary. Whether you crave cultural escapades, scenic wonders, or thrilling adventures, our website transforms your travel aspirations into seamless reality. Browse curated destinations, discover hidden gems, and personalize your trip effortlessly."
            </p>
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box'>
            <img src ={heroImg} alt = ""></img>
          </div>
        </Col>
        <Col lg='2'>
          <div className='hero__img-box mt-4'>
            <video src ={heroVideo} alt = "" controls></video>
          </div>
        </Col >
        <Col lg='2'>
          <div className='hero__img-box mt-5'>
            <img src ={heroImg02} alt = ""></img>
          </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
  </section>


  <section>
  <Container>
      <Row>
        <Col lg='3'>

          <h5 className='services__subtitle'>What we serve</h5>
          <h2 className='services__title'>We offer our best services</h2>
        </Col>
        <ServiceList></ServiceList>
      </Row>
  </Container>
  </section>



  {/* featured your section */}
  <section>
    <Container>

      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'Explore'}></Subtitle>
          <h2 className='feature__tour-title'>Our featured tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
  </section>



  
  </>
}

export default Home