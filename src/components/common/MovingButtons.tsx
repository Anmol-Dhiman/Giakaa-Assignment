import Image from 'next/image'
import React from 'react'
import { ImageAssets } from '../../constants/images'

const MovingButtons = ({ onRightClick, onLeftClick }: { onRightClick: () => void, onLeftClick: () => void }) => {
    return (
        <div className='flex flex-row mt-24' >
            <button onCanPlay={onLeftClick} className='border-[1px] border-border p-[16px]  rounded-full mr-4'>
                <Image src={ImageAssets.left} alt="left" />
            </button>
            <button onClick={onRightClick} className='border-[1px] border-border p-[16px]  rounded-full mr-4'>
                <Image src={ImageAssets.right} alt="right" />
            </button>
        </div>
    )
}

export default MovingButtons