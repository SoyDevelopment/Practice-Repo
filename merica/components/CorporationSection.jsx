"use client"
import React, { useState } from 'react'
import Corporation from './Corporation'
import CorporationTag from './CorporationTag'
import DATA from './Facilities.JSON'


const CorporationSection = () => {

    const Accounts = DATA.map( (accounts) => {
        const {Corporation} = accounts

        return Corporation
    })

    const [tag, setTag] = useState('All')

    const handleTagChange = (newTag)=> setTag(newTag)

    const filterCorporations = Accounts.filter( (corporation) => corporation.Code.includes(tag))
  
    return (
    <>
        <h2 className='text-center text-4xl font-bold text-white flex flex-row justify-center items-center'>
            Our Accounts
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6" >
            {
                Accounts.map( (corporation) => <CorporationTag
                    key = {corporation.Code} 
                    name= {corporation.Code}
                    onClick= {handleTagChange}
                />)
            }
        </div>
        <p className='text-center text-red-400'>
            {
                tag === "All" 
                ? "Please Select a Corporation Code above for a list of their facilities and rules" 
                : filterCorporations.map( (corp) => corp.Info )
            }
        </p>
        <div className='flex flex-row justify-center items-center'>
            {
                filterCorporations.map( (corp) => <Corporation key ={corp.Code} facilities= {corp} />)
            }
        </div>
    </>
  )
}

export default CorporationSection