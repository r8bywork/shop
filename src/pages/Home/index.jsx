import React from 'react'
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
    </div>
  )
}

export default Home