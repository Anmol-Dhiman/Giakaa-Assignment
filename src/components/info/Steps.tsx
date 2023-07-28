import Image from 'next/image'
import React from 'react'
import { ImageAssets } from '../../constants/images'

const Steps = () => {
    return (
        <div className='flex flex-row justify-between' >

            <p className='text-white font-fixel-medium text-[30px] ' >How do I get a punk?</p>

            <div className='flex flex-col' >
                <div className='flex flex-row  h-[400px]  ' >
                    <div className='infoSerialNumberContainer' >
                        <p className='serialNumber' >1</p>
                        <div className=' infoDividerLine' />
                    </div>
                    <div className='flex flex-col' >
                        <Image src={ImageAssets.metamask} alt='metamask' className='w-[60px] h-[60px]  mb-6' />
                        <p className=' infoHeading ' >Download and install MetaMask</p>
                        <p className=' infoText'  >Download and install a Chrome browser plugin called MetaMask. This will allow websites (that you authorise) access to your Ethereum account.</p>
                        <button className='text-white px-[18px] py-[12px] border-border border-2 rounded-[100px] font-fixel-medium text-[16px] w-fit ' >Download MetaMask</button>
                    </div>
                </div>


                <div className='flex flex-row h-[300px] ' >
                    <div className='infoSerialNumberContainer' >
                        <p className='serialNumber' >2</p>
                        <div className='infoDividerLine ' />
                    </div>
                    <div className='flex flex-col' >
                        <Image src={ImageAssets.eth} alt='metamask' className='w-[60px] h-[60px]  mb-6' />
                        <p className='infoHeading' >Buy some Ethereum</p>
                        <p className=' infoText'  >If you made a new account, buy some Ethereum. The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.</p>

                    </div>
                </div>


                <div className='flex flex-row  mb-24  ' >
                    <div className='infoSerialNumberContainer' >
                        <p className='serialNumber' >3</p>
                    </div>
                    <div className='flex flex-col' >
                        <p className=' infoHeading' >Start bidding, buying and selling</p>
                        <p className=' infoText '  >Once you have the plugin installed, this website will recognise it and add buttons that allow you to bid on, buy and sell punks directly in the interface.</p>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Steps