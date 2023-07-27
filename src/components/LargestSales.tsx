import React from 'react'
import ViewAllButton from './common/ViewAllButton'
import NFTCard from './common/NFTCard'
import { LargestSalesNFTs } from '../constants/nfts'
import MovingButtons from './common/MovingButtons'

const LargestSales = () => {



    return (
        <div className={"container "} >
            <div className='flex flex-row justify-between items-center ' >
                <p className={"darkHeading"} >Largest Sales</p>
                <ViewAllButton onClick={() => { }} />
            </div>
            <div className='flex flex-row mt-24 overflow-x-auto ' >
                {
                    LargestSalesNFTs.map((item) => {
                        return <NFTCard nft={item} />
                    })
                }
            </div>
            <MovingButtons onLeftClick={() => { }} onRightClick={() => { }} />
        </div>
    )
}

export default LargestSales