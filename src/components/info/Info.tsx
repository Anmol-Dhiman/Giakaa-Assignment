import React from 'react'
import Steps from './Steps'
import FAQs from './FAQs'

const Info = () => {
    return (
        <div className='flex flex-col bg-black rounded-t-[56px] px-[150px] py-24' >
            < div className='mb-[128px]' >
                <Steps />
            </div>
            <FAQs />
        </div>
    )
}

export default Info