import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Search = () => {
    return (
    
        <Wrapper>
        
        {/* Button Container */}

        <ButtonContainer>
            <Link href="/">
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
        </ButtonContainer>

        <InputContainer>
            <FromToIcons>
                <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
                <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
                <Square src="https://img.icons8.com/windows/50/000000/square-full.png"/>
            </FromToIcons>
        
            <InputBoxes>
                <Input placeholder="Enter Pickup Location"/>
                <Input placeholder="Where to?"/>
            </InputBoxes>

            <PlusIcon src="https://img.icons8.com/ios/50/9CA3AF/plus-math.png"/>
        </InputContainer>

        <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
        Saved Places
        </SavedPlaces>

        {/* Image Container */}
        {/* Saved Places */}
        {/* Confirm Locations*/}
        <Confirm>
        <button class="bg-black w-full text-white rounded text-center p-3">
        Confirm Location
        </button>
        </Confirm>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white px-3
`

const BackButton = tw.img`
h-10 transform hover:scale-110
`

const FromToIcons = tw.div`
w-10 flex flex-col items-center mr-2 
`

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`

const Circle = tw.img`
h-2.5
`
const Line = tw.img`
h-10
`
const Square = tw.img`
h-3
`

const InputBoxes = tw.div`
flex flex-col flex-1 
`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`
const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const Confirm = tw.div`
m-3
`