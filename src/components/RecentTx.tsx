import React from 'react'
import ViewAllButton from './common/ViewAllButton'
import { RecentTransactionsNFTs } from '../constants/nfts'
import NFTCard from './common/NFTCard'
import { ImageAssets } from '../constants/images'
import Image from 'next/image'
import MovingButtons from './common/MovingButtons'


const RecentTx = () => {
    return (
        <div className={"flex flex-col "} >
            <div className='flex flex-row px-[120px] justify-between items-center ' >
                <div>
                    <p className={"darkHeading"} >Recent Transactions</p>
                    <p className='  font-fixel-regular text-[12px] text-border ' >Updated 25 seconds ago</p>
                </div>
                <ViewAllButton onClick={() => { }} />
            </div>
            <div className="flex flex-row mt-24 ml-[120px] overflow-x-scroll whitespace-nowrap" >
                {
                    RecentTransactionsNFTs.map((item, index) => {
                        return <NFTCard nft={item} index={index} />
                    })
                }
            </div>
            <div className='pl-[120px] mb-[128px] ' >
                <MovingButtons onLeftClick={() => { }} onRightClick={() => { }} />

            </div>
        </div>
    )
}

export default RecentTx