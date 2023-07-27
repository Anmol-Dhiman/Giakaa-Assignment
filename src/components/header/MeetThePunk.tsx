import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { ImageAssets } from '../../constants/images'


const MeetThePunk = () => {
    const punks = [
        {
            bg: "bg-[#638596]",
            image: ImageAssets.image4,
            text: "Punks with a blue background are not for sale and have no current bids."
        },
        {
            bg: "bg-[#95544E]",
            image: ImageAssets.image1,
            text: "Punks with a red background are available for sale by their owner."
        },
        {
            bg: "bg-[#8E6FB5]",
            image: ImageAssets.image5,
            text: "Punks with a purple background have an active bid on them"
        },

    ]

    const [selectedPunk, setSelectedPunk] = useState(0)


    return (
        <div className='flex flex-col w-full   ' >
            {/* header part of meet the punk the info part  */}
            <div className='flex flex-row justify-between' >
                <p className={"lightHeading"} >Meet the Punks</p>
                <div>
                    <p className='text-white font-fixel-regular text-[18px] w-[500px]' >The CryptoPunks are 24x24 pixel art images, generated algorithmically. Most are punky-looking guys and girls, but there are a few rarer types mixed in: Apes, Zombies and even the odd Alien. Every punk has their own profile page that shows their attributes as well as their ownership/for-sale status.</p>
                    <div className='flex flex-row mt-8   ' >
                        <button className='text-black bg-white font-fixel-medium rounded-[100px] text-[18px] px-[24px] py-[12px] mr-4' >Buy a Punk</button>
                        <button className='text-white   font-fixel-medium rounded-[100px] text-[18px] px-[24px] py-[12px]  border-border border-2  ' >View a collection</button>
                    </div>
                </div>
            </div>

            {/* nft image part  */}
            <div className='flex flex-row justify-between mt-[128px] ' >
                <div className='flex flex-col' >
                    {/* selectedPunk === index  */}
                    {
                        punks.map((item, index) => {
                            return (
                                <PunkSelectionCard punk={item} isSelected={index === selectedPunk} onClick={() => { setSelectedPunk(index) }} />
                            )
                        })
                    }
                </div>
                <Image src={punks.at(selectedPunk)?.image!} alt="meet the punk" width={500} className='h-full' />
            </div>



        </div>
    )
}

const PunkSelectionCard = ({ punk, onClick, isSelected }: { punk: { bg: string, text: string, image: StaticImageData }, onClick: () => void, isSelected: boolean }) => {
    console.log(isSelected)
    return (
        <button onClick={onClick} >
            <p className=
                {`font-fixel-medium text-[22px] mb-8 text-white w-[550px] text-left  rounded-[30px] px-[40px] py-[40px]   ${isSelected ? `${punk.bg}  p-[2px] ` : "border-border border-2"}   `} >{punk.text}</p>
        </button>
    )
}

export default MeetThePunk