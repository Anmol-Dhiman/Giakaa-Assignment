import Image from 'next/image'
import React from 'react'
import { ImageAssets } from '../../constants/images'

const Steps = () => {
    return (
        <div className='flex flex-row justify-between' >

            <p className='text-white font-fixel-medium text-[30px] ' >How do I get a punk?</p>

            <div className='flex flex-col' >
                <div className='flex flex-row  mb-24 ' >
                    <div className=' text-white font-fixel-medium text-[20px] border-2 w-fit h-fit  border-border px-[20px] py-[10px] rounded-full  mr-12  ' >1</div>
                    <div className='flex flex-col' >
                        <Image src={ImageAssets.metamask} alt='metamask' className='w-[60px] h-[60px]  mb-6' />
                        <p className=' text-white font-fixel-medium mb-6 ' >Download and install MetaMask</p>
                        <p className=' text-white font-fixel-regular mb-6 w-[500px] '  >Download and install a Chrome browser plugin called MetaMask. This will allow websites (that you authorise) access to your Ethereum account.</p>
                        <button className='text-white px-[18px] py-[12px] border-border border-2 rounded-[100px] font-fixel-medium text-[16px] w-fit ' >Download MetaMask</button>
                    </div>
                </div>


                <div className='flex flex-row  mb-24 ' >
                    <div className=' text-white font-fixel-medium text-[20px] border-2 w-fit h-fit  border-border px-[20px] py-[10px] rounded-full  mr-12  ' >2</div>
                    <div className='flex flex-col' >
                        <Image src={ImageAssets.eth} alt='metamask' className='w-[60px] h-[60px]  mb-6' />
                        <p className=' text-white font-fixel-medium mb-6 ' >Buy some Ethereum</p>
                        <p className=' text-white font-fixel-regular mb-6 w-[500px] '  >If you made a new account, buy some Ethereum. The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.</p>

                    </div>
                </div>


                <div className='flex flex-row  mb-24 ' >
                    <div className=' text-white font-fixel-medium text-[20px] border-2 w-fit h-fit  border-border px-[20px] py-[10px] rounded-full  mr-12  ' >3</div>
                    <div className='flex flex-col' >
                        <p className=' text-white font-fixel-medium mb-6 ' >Start bidding, buying and selling</p>
                        <p className=' text-white font-fixel-regular mb-6 w-[500px] '  >Once you have the plugin installed, this website will recognise it and add buttons that allow you to bid on, buy and sell punks directly in the interface.</p>
                    </div>
                </div>








            </div>
        </div>
    )
}

export default Steps