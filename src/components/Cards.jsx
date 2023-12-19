import React from 'react'
import CardItem from './CardItem'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
             <CardItem img={Single} userCount='Single User' price='149' storage='500 GB' sendUpTo='2 GB' userAllowed='1'/>
             <CardItem img={Double} userCount='Partnership' price='199' storage='1 TB' sendUpTo='10 GB' userAllowed='3'/>
             <CardItem img={Triple} userCount='Group Account' price='299' storage='5 TB' sendUpTo='20 GB' userAllowed='10'/>    
         </div>
    </div>
  )
}

export default Cards