"use client"
import React, {useTransition, useState} from 'react'
import Facility from './Facility';

const Corporations = (corporation) => {
  const {Facilities} = corporation.facilities
  
  return (
    <section className="text-white">
      {Facilities.map( (facility) => <Facility key={facility.Number} data= {facility} />)}
    </section>
  )
}

export default Corporations