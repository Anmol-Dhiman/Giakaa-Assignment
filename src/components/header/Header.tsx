import React from 'react'
import FeaturedIn from './FeaturedIn'
import MeetThePunk from './MeetThePunk'

const Header = () => {
    return (
        <div className={' items-center bg-black rounded-b-[56px]   ' + "container"} >

            <div className='flex flex-row' >
                <p className='text-white font-fixel-medium text-[30px] mr-2' >The project that inspired the modern</p>
                <p className='text-white font-fixel-bold text-[30px]' >CryptoArt movement</p>
            </div>
            <p className='text-white font-fixel-regular text-[18px] w-[600px] text-center my-14' >10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.</p>
            <div className='flex flex-row bg-white rounded-[100px] px-[18px] py-[8px] mb-[128px]' >
                <p className='text-black font-fixel-medium text-[20px] mr-1' >Mint</p>
                <p className='text-black font-fixel-bold text-[20px]' >now</p>
            </div>
            <div className='mb-[128px] w-full' >
                <FeaturedIn />
            </div>
            <MeetThePunk />
        </div>
    )
}

export default Header