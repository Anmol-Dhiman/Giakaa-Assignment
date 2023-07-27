
import React, { useEffect, useState } from 'react'
import contractABI from "../abi/GiakaaAssignment.json"
import { switchNetwork, readContract } from '@wagmi/core'
import { useNetwork, useAccount, } from 'wagmi'
import Link from 'next/link'
import Image from 'next/image'
import { ImageAssets } from '../src/constants/images'



const Profile = () => {


    const { chain } = useNetwork()
    const account = useAccount()
    const [isClient, setIsClient] = useState(false)
    const [isRequestSent, setIsRequestSent] = useState(false)
    const [profileState, setProfileState] = useState("Please Connect Your Wallet")

    useEffect(() => {
        setIsClient(true)
        if (account.isConnected && chain?.id === 80001) {
            readAssignemntContract()
        }
    }, [])

    const readAssignemntContract = async () => {
        const data = await readContract({
            address: "0x77fe89354a331aEB51a0737E4aaBcf25c9DbAaBd",
            abi: contractABI.abi,
            functionName: "getName"
        })
        setProfileState(data as string)
    }


    useEffect(() => {
        // this means user is connected through wallet
        const networkChecking = async () => {

            if (account.isConnected) {
                console.log("again")
                if (chain?.id != 80001 && !isRequestSent) {
                    setProfileState("Please Change Your Network")
                    try {
                        setIsRequestSent(true)
                        await switchNetwork({
                            chainId: 80001,
                        })
                    } catch (e) { }
                }
                else if (chain?.id === 80001 && isRequestSent) {
                    readAssignemntContract()
                    setIsRequestSent(false)
                }
            }

        }
        networkChecking()
    }, [chain?.id])


    // account.isConnected ? chain?.id === 80001 ? "USERNAME" : "Please Change Your Network" : "Please Connect Your Wallet" : "Please Connect Your Wallet"
    return (
        <div className=' flex  h-screen justify-center flex-col items-center bg-black ' >
            <div className='text-white font-fixel-bold text-[64px] ' >
                {
                    isClient ?
                        profileState : "Please Connect Your Wallet"
                }
            </div>
            <div className='text-white font-fixel-medium text-[22px] ' >Getting Data from Smart Contract</div>
            <Link href="https://github.com/Anmol-Dhiman/Giakaa-Assignment/blob/master/contract/GiakaaAssignment.sol" className='flex flex-row items-center mt-4 rounded-[100px] text-[18px] px-[24px] py-[12px]  border-border border-2  '  >
                <p className='text-white font-fixel-medium text-[22px] mr-8 '  >Move to Contract</p>
                <Image src={ImageAssets.route_icon} alt='read article' />
            </Link>
        </div>
    )
}

export default Profile