import React from 'react'
import { FAQsList } from '../../constants/faqs'

const FAQs = () => {





    return (
        <div className='flex flex-col' >
            <p className='text-white font-fixel-medium text-[30px] mb-24 ' >Details and FAQ</p>
            {
                FAQsList.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col mb-24' >
                            <div className='bg-border h-[0.2px]' />
                            <div className='flex flex-row justify-between mt-6' >
                                <p className='text-white  font-fixel-medium text-[16px]   '  >{item.question}</p>
                                <p className='text-white  font-fixel-regular text-[16px] w-[650px] ' >{item.answer}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FAQs