import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { carList } from '../../data/carList'

const RideSelector = () => {
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                {carList.map((car, index) => (
                    <Car key={index}>
                    <CarImage src={car.imgUrl}></CarImage>
                    <CarDetails>
                        <ServiceSection>{car.service}</ServiceSection>
                        <Time>{5* (car.multiplier)} min away </Time>
                    </CarDetails>
                    <Price>$24.00</Price>
                </Car>
                ))}
                
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Car = tw.div`
flex p-4 items-center
`
const CarImage = tw.img`
h-14 px-5 mr-4
`

const CarDetails = tw.div`
flex-1
`
const ServiceSection = tw.div`
font-medium
`

const Time = tw.div`
text-sm text-blue-500
`

const Price = tw.div`
text-sm
`


const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.div`
text-center text-gray-500 text-xs py-2 border-b
`
const CarList = tw.div`
overflow-y-scroll
`