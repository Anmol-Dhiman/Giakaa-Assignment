import React from 'react'
import ViewAllButton from './common/ViewAllButton'
import { RecentTransactionsNFTs } from '../constants/nfts'
import NFTCard from './common/NFTCard'
import { ImageAssets } from '../constants/images'
import Image from 'next/image'
import MovingButtons from './common/MovingButtons'


const RecentTx = () => {
    return (
        <div className={"container "} >
            <div className='flex flex-row justify-between items-center ' >
                <div>
                    <p className={"darkHeading"} >Recent Transactions</p>
                    <p className='  font-fixel-regular text-[12px] text-border ' >Updated 25 seconds ago</p>
                </div>
                <ViewAllButton onClick={() => { }} />
            </div>
            <div className='flex flex-row mt-24 overflow-x-auto ' >
                {
                    RecentTransactionsNFTs.map((item, index) => {
                        return <NFTCard nft={item} key={index} />
                    })
                }
            </div>
            <MovingButtons onLeftClick={() => { }} onRightClick={() => { }} />
        </div>
    )
}

export default RecentTx