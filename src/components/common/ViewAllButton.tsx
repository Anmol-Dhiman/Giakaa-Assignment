import React from 'react'

const ViewAllButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <button onClick={onClick} className='text-black h-fit w-fit border-border rounded-[100px] border-[1px] px-[18px] py-[8px]  font-fixel-medium ' >View all</button>
    )
}

export default ViewAllButton