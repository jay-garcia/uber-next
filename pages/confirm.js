import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import Map from './components/Map'
import { useRouter } from 'next/dist/client/router'
import RideSelector from './components/RideSelector'

const Confirm = () => {

    const router = useRouter()
    const {pickup, dropoff} = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState() // Initialize some data storage
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCoordinates = (pickup) => {
        //Fetch function

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
            access_token: "pk.eyJ1IjoiamF5LWdhcmNpYSIsImEiOiJja3Zsb2d4cjkwbWp2Mm9xbjliZngxdXloIn0.ph9R5PKOycmI9kICxJ4GJQ",
            limit: 1
        })
        )

        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center);
        })
    }
    //?access_token=

    const getDropoffCoordinates = (dropoff) => {
        //Fetch function

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
            access_token: "pk.eyJ1IjoiamF5LWdhcmNpYSIsImEiOiJja3Zsb2d4cjkwbWp2Mm9xbjliZngxdXloIn0.ph9R5PKOycmI9kICxJ4GJQ",
            limit: 1
        })
        )

        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })

    }


    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <ButtonContainer>
            <Link href="/search">
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
            </ButtonContainer>

            <Map 
            pickupCoordinates={pickupCoordinates} 
            dropoffCoordinates={dropoffCoordinates}
            />
            
            <RideContainer>

                <RideSelector />

                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>


            </RideContainer>

        
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col 
`
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
border-t-2
`
const ConfirmButton = tw.div`
cursor-pointer bg-black text-white my-4 mx-4 py-4 text-center text-xl
`
const ButtonContainer = tw.div`
m-5 absolute z-10 bg-white rounded-full
`
const BackButton = tw.img`
h-10 transform hover:scale-110 cursor-pointer
`