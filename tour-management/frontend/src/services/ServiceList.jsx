import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import cutomizationImg from '../assets/images/customization.png'


const servicesData = [
    {imgUrl: weatherImg,
    title: 'Calculate Weather',
    desc: 'abc'},
    {imgUrl: guideImg,
    title: 'Best Tour Guide',
    desc: 'abc'},
    {imgUrl: cutomizationImg,
    title: 'Customization',
    desc: 'abc'}

]
const ServiceList = () => {
    return (
    <>{
        servicesData.map((item, index)=><Col lg='3' key={index}><ServiceCard item={item}/></Col>)
    }</>
    )
}

export default ServiceList
