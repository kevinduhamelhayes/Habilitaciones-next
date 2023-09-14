import React from 'react'
import Card1 from './Card1'
import CardPricing2 from './CardPricing2'
import CardPricing from './CardPricing'
import CardPricing1 from './CardPricing1'
            const Cards = () => {
              return (
                <div className='flex flex-wrap justify-center items-center gap-8 mt-8 mb-8  '>
                <CardPricing2/>
                <Card1/>
                <CardPricing/>
                <CardPricing1
                />
                </div>
              )
            }

            export default Cards