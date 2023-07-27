import Image from 'next/image'
import React from 'react'
import { NFTCardType } from '../../../types'



const NFTCard = ({ nft }: { nft: NFTCardType }) => {
    return (
        <div className={'flex flex-col mr-12 '} >
            <Image src={nft.image} alt='nft' className='w-[400px] h-[400px]' />
            <p className='mt-4 font-fixel-bold text-black text-[26px] ' >{`#${nft.id}`}</p>
            <p className=' font-fixel-medium text-black text-[20px] ' >{nft.price}</p>
            <p className='mt-4 font-fixel-regular text-black text-[17px] '  >{nft.date!}</p>
        </div>
    )
}

export default NFTCard