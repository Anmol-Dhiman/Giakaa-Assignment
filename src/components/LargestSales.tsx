
import React, { useEffect, useRef, useState } from 'react'
import ViewAllButton from './common/ViewAllButton'
import NFTCard from './common/NFTCard'
import { LargestSalesNFTs } from '../constants/nfts'
import MovingButtons from './common/MovingButtons'
import { NFTCardType } from '../../types'

const LargestSales = () => {
    const nftsRef = useRef(null)

    const [visibleIndex, setVisibleIndex] = useState(0)
    const [visibleCards, setVisibleCards] = useState<NFTCardType[]>(LargestSalesNFTs)
    const containerRef = useRef(null)
    const [maxVisible, setMaxVisible] = useState(0)

    const handleMoveLeft = () => {

        // if (visibleIndex - 2 >= 0) {
        //     setVisibleCards(LargestSalesNFTs.slice(visibleIndex - 2, visibleIndex))
        //     setVisibleIndex(visibleIndex - 2)
        // }
    };

    useEffect(() => {
        const { innerWidth } = window
        setVisibleCards(LargestSalesNFTs.slice(0, Math.round(innerWidth / 400) + 1))
        setVisibleIndex(Math.round(innerWidth / 400) - 1)
        setMaxVisible(Math.round(innerWidth / 400) + 1)
    }, [])

    const handleMoveRight = () => {

        // if (visibleIndex < LargestSalesNFTs.length) {
        //     setVisibleCards(LargestSalesNFTs.slice(visibleIndex, visibleIndex + 3))
        //     setVisibleIndex(visibleIndex + 2)
        // }

        // if (visibleIndex + 2 < LargestSalesNFTs.length) {
        //     console.log("clicked")
        //     setVisibleCards(LargestSalesNFTs.slice(visibleIndex + 2, visibleIndex + 4))
        //     console.log(visibleCards.length)
        //     setVisibleIndex(visibleIndex + 2)
        // }

        // move when this condition matches 
        if (visibleIndex + maxVisible < LargestSalesNFTs.length) {
            console.log("if")
            setVisibleCards(LargestSalesNFTs.slice(visibleIndex, visibleIndex + maxVisible))
            // +2 because i'm moving 2 cards at a time 
            setVisibleIndex(visibleIndex + 2)
        } else {
            console.log("else")
            setVisibleCards(LargestSalesNFTs.slice(visibleIndex, LargestSalesNFTs.length))
        }
    };




    return (
        <div className={"py-24 flex flex-col"} >
            <div className=' px-[120px]  flex flex-row justify-between items-center ' >
                <p className={"darkHeading"} >Largest Sales</p>
                <ViewAllButton onClick={() => { }} />
            </div>



            <div className={"flex flex-row mt-24 ml-[120px]   overflow-hidden "} style={{
                // transform: `translateX(-${visibleIndex * 50}%)`,
                // transition: 'transform 1s ease-in-out',
            }} ref={containerRef} >
                {
                    visibleCards.map((item, index) => {
                        return <div key={index} ref={nftsRef}>
                            <NFTCard nft={item} />
                        </div>
                    })
                }
            </div>

            <div className=' px-[120px] ' >
                <MovingButtons onLeftClick={handleMoveLeft} onRightClick={handleMoveRight} />
            </div>
        </div>
    )
}

export default LargestSales