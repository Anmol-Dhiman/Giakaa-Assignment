import Image from 'next/image'
import React from 'react'
import { ImageAssets } from '../../constants/images'


const FeaturedIn = () => {
    return (
        <div className='flex flex-col items-center w-full ' >
            <p className='text-white font-fixel-medium text-[20px]' >Featured in</p>
            <div className='flex flex-row w-full justify-between px-[200px]  mt-[64px]' >
                <FeatureCard title='Mashable' content='This ethereum-based project could change how we think about digital art' onClick={() => { }} />
                <FeatureCard title='Mashable' content='This ethereum-based project could change how we think about digital art' onClick={() => { }} />
                <FeatureCard title='Mashable' content='This ethereum-based project could change how we think about digital art' onClick={() => { }} />
            </div>
        </div>
    )
}

const FeatureCard = ({ title, content, onClick }: { title: string, content: string, onClick: () => void }) => {
    return (
        <div>
            <div className='flex flex-col border-2 rounded-t-[28px] border-border px-[24px] py-[24px] ' >
                <p className='font-fixel-black text-white text-[20px]  ' >{title}</p>
                <p className=' mt-2  font-fixel-regular  text-white text-[18px] w-[300px] ' >{content}</p>
            </div>
            <button onClick={onClick} className='flex w-full flex-row items-center justify-between  border-x-2 border-b-2 rounded-b-[28px] border-border  px-[24px] py-[24px] ' >
                <p className='text-white text-[16px] font-fixel-medium' >Read article</p>
                <Image src={ImageAssets.route_icon} alt='read article' />
            </button>
        </div>
    )
}


export default FeaturedIn