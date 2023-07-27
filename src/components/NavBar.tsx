import React, { useEffect, useState } from 'react'
import { ImageAssets } from '../constants/images'
import Image from 'next/image'
import {
    useConnectModal,
} from '@rainbow-me/rainbowkit';
import { getNetwork, getAccount, switchNetwork, disconnect } from '@wagmi/core'
import { BsTwitter, BsDiscord } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { FiLogOut } from "react-icons/fi"
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
                <button className='connectButton' onClick={handleConnectButton}  >
                    {isClient ? account.address != undefined ? `${account.address.substring(0, 8) + "..."}` : "Connect Wallet" : "Connect Wallet"}
                </button>
                {showDropDown && <div className="flex flex-col absolute z-10 mt-[170px]  right-[230px] rounded-xl px-2 py-2 border-[1px] border-[#475068] bg-black">

                    <div className='flex flex-col px-12 py-2' >
                        <Link href="/profile">
                            <div className='flex flex-row items-center mb-4' >
                                <CgProfile className='text-white mr-4 w-6 h-6 ' />
                                <button onClick={() => setDropDownStatus(false)} className='text-white font-fixel-medium text-[18px]'>Profile</button>
                            </div>
                        </Link>
                        <div className='flex flex-row items-center '   >
                            <FiLogOut className='text-white mr-4 w-6 h-6 ' />
                            <button className='text-white font-fixel-medium text-[18px]' onClick={disconnectAccount} >Log Out</button>
                        </div>
                    </div>


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