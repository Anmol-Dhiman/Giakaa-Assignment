import React, { useEffect, useState } from 'react'
import { ImageAssets } from '../constants/images'
import Image from 'next/image'
import {
    useConnectModal,
} from '@rainbow-me/rainbowkit';
import { getNetwork, getAccount, switchNetwork, disconnect } from '@wagmi/core'
import { BsTwitter, BsDiscord } from "react-icons/bs"
import Link from 'next/link';

const NavBar = () => {
    const { openConnectModal } = useConnectModal();
    const { chain } = getNetwork()
    const account = getAccount()
    const [isClient, setIsClient] = useState(false)
    const [showDropDown, setDropDownStatus] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])



    useEffect(() => {

        // this means user is connected through wallet
        const networkChecking = async () => {
            if (account.address != undefined) {
                if (chain?.id != 80001) {
                    const network = await switchNetwork({
                        chainId: 80001,
                    })
                    console.log(network)
                }
            }
        }
        networkChecking()
    }, [account])

    const handleConnectButton = () => {

        if (account.address === undefined)
            openConnectModal?.()
        else
            setDropDownStatus(!showDropDown)
    }

    const disconnectAccount = async () => {
        await disconnect()
        setDropDownStatus(false)
    }

    return (
        <div className=' flex flex-row justify-between bg-black px-[80px] pt-[20px]  pb-2 items-center '  >
            <Image src={ImageAssets.logo_svg} alt='logo' />
            <div className='flex flex-row items-center' >
                <button className='navTextButton' >About</button>
                <button className='navTextButton'>Collection</button>
                <button className='navTextButton'>FAQs</button>
                <button className='connectButton' onClick={handleConnectButton} >
                    {isClient ? account.address != undefined ? `${account.address.substring(0, 8) + "..."}` : "Connect Wallet" : "Connect Wallet"}
                </button>
                {showDropDown && <div className="flex flex-col absolute z-10 mt-28  right-[230px] rounded-xl px-2 py-2 border-[1px] border-[#475068] bg-black">
                    <Link href="/profile">
                        <button className='text-white font-fixel-medium text-[18px]'>profile</button>
                    </Link>
                    <button className='text-white font-fixel-medium text-[18px]' onClick={disconnectAccount} >log out</button>

                </div>}
                <a>
                    <BsTwitter className='socialIcon' />
                </a>
                <a>
                    <BsDiscord className='socialIcon' />
                </a>

            </div>
        </div>
    )
}

export default NavBar