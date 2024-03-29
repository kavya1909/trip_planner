import React from 'react';
import Home from '../pages/Home';
import TourDetails from '../pages/TourDetails';
import Tours from '../pages/Tours';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import Login from '../pages/Login';
import{Routes,Route,Navigate} from 'react-router-dom';
import ThankYou from '../ThankYou';
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path="/home" element={<Home />} />
        <Route path='/tours'element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>
    </Routes>
  )
}

export default Routers