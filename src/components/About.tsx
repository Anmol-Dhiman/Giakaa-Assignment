import React from 'react'
import { BsDiscord, BsTwitter } from 'react-icons/bs'

const About = () => {
    return (

        <div className={' bg-black  ' + "container"} >

            <div className='flex flex-row justify-between' >
                <p className='text-white font-fixel-bold  '>CryptoPunks</p>
                <div className='flex flex-row'>
                    <p className='text-white font-fixel-medium mx-4' >Buy a Punk</p>
                    <p className='text-white font-fixel-medium mx-4' >View Full Collection</p>
                </div>
                <div className='flex flex-row'>
                    <BsTwitter className={'fotterSocialIcon ' + "mr-8"} />
                    <BsDiscord className='fotterSocialIcon' />
                </div>
            </div>
            <div className='bg-border h-[0.2px]  mt-16 ' />
            <div className='flex flex-row justify-center mt-8 ' >
                <p className='footerButton'>© 2021 CryptoPunks. All right reserved.</p>
                <p className='footerButton'>Privacy Policy</p>
                <p className='footerButton'>Terms of Service</p>
                <p className='footerButton'>Cookies Settings</p>
            </div>

        </div>
    )
}

export default About