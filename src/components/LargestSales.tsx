import React from 'react'
import ViewAllButton from './common/ViewAllButton'
import NFTCard from './common/NFTCard'
import { LargestSalesNFTs } from '../constants/nfts'
import MovingButtons from './common/MovingButtons'

const LargestSales = () => {



    return (
        <div className={"py-24 flex flex-col"} >
            <div className=' px-[120px]  flex flex-row justify-between items-center ' >
                <p className={"darkHeading"} >Largest Sales</p>
                <ViewAllButton onClick={() => { }} />
            </div>



            <div className={"flex flex-row mt-24 ml-[120px] overflow-x-scroll "} >
                {
                    LargestSalesNFTs.map((item, index) => {
                        return <div key={index}>
                            <NFTCard nft={item} />
                        </div>
                    })
                }
            </div>

            <div className=' px-[120px] ' >
                <MovingButtons onLeftClick={() => { }} onRightClick={() => { }} />
            </div>
        </div>
    )
}

export default LargestSales