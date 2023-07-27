
import React, { useEffect, useState } from 'react'
import contractABI from "../abi/GiakaaAssignment.json"
import { getNetwork, getAccount, switchNetwork, readContract } from '@wagmi/core'
import { useNetwork, useAccount, useContractRead } from 'wagmi'
import { ethers } from 'ethers';

const Profile = () => {


    const { chain } = useNetwork()
    const account = useAccount()
    const [isClient, setIsClient] = useState(false)
    const [isRequestSent, setIsRequestSent] = useState(false)



    useEffect(() => {
        setIsClient(true)
    }, [])



    useEffect(() => {
        // this means user is connected through wallet
        const networkChecking = async () => {
            console.log("network checking")
            if (account.isConnected) {
                console.log("connected")
                if (chain?.id != 80001 && !isRequestSent) {
                    console.log("wrong network")
                    setIsRequestSent(true)
                    try {
                        await switchNetwork({
                            chainId: 80001,
                        })
                    } catch (e) { }
                    setIsRequestSent(false)
                }
                else {

                }
            }

        }
        networkChecking()
    }, [chain?.id])



    return (
        <div className=' flex  h-screen justify-center flex-col items-center bg-black ' >
            <div className='text-white font-fixel-bold text-[32px] ' >
                {
                    isClient ?
                        account.isConnected ? chain?.id === 80001 ? "USERNAME" : "Please Change Your Network" : "Please Connect Your Wallet" : "Please Connect Your Wallet"
                }
            </div>

        </div>
    )
}

export default Profile