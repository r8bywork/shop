import React from 'react'
import Delivery from '../../components/Delivery'
import Category from '../../components/Homepage/Category'
import Header from '../../components/Homepage/Header'
import InfoBlock from '../../components/Homepage/InfoBlock'
import style from './Home.module.scss'

const Home = () => {
  return (
    <div className={style.Home}>
      <Header/> 
      <InfoBlock/> 
      <Category/>  
      <Delivery/>  
    </div>
  )
}

export default Home