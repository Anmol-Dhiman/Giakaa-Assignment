import Image from 'next/image'
import React from 'react'
import { NFTCardType } from '../../../types'



const NFTCard = ({ nft, index }: { nft: NFTCardType, index: number }) => {
    return (
        <div key={index} className={'flex flex-col mr-8 '} >
            <Image src={nft.image} alt='nft' className='w-[400px] h-[400px]' />
            <p className='mt-4 font-fixel-bold text-black text-[26px] ' >{`#${nft.id}`}</p>
            <p className=' font-fixel-medium text-black text-[20px] ' >{nft.price}</p>
            <p className='mt-4 font-fixel-regular text-black text-[17px] '  >{nft.date!}</p>
        </div>
    )
}

export default NFTCard