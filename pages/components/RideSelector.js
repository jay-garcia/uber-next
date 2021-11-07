import React, {useEffect, useState} from 'react' 
import tw from 'tailwind-styled-components/dist/tailwind'
import { carList } from '../../data/carList'

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
    const [rideDuration, setRideDuration] = useState(0)

    //get ride duration from MAPBOX API
    //Needs pickup destination and dropoff destination
    useEffect(() => {
        rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]}, ${pickupCoordinates[1]};${dropoffCoordinates[0]}, ${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiamF5LWdhcmNpYSIsImEiOiJja3Zsb2d4cjkwbWp2Mm9xbjliZngxdXloIn0.ph9R5PKOycmI9kICxJ4GJQ`) //template literal
        .then(res => res.json())
        .then(data => {
            setRideDuration((data.routes && data.routes[0].duration / 100))
        })
    }, [pickupCoordinates, dropoffCoordinates]) //needed so coordinates refresh

    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                {carList.map((car, index) => (
                    <Car key={index}>
                    <CarImage src={car.imgUrl}></CarImage>
                    <CarDetails>
                        <ServiceSection>{car.service}</ServiceSection>
                        <Time>5 min away </Time>
                    </CarDetails>
                    <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
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