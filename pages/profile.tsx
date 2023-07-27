
import React, { useEffect, useState } from 'react'

import { getNetwork, getAccount, switchNetwork, disconnect } from '@wagmi/core'
import { useConnectModal } from '@rainbow-me/rainbowkit';

const profile = () => {

    const { openConnectModal } = useConnectModal();
    const { chain } = getNetwork()
    const account = getAccount()
    const [isClient, setIsClient] = useState(false)
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

    return (
        <div className=' flex  h-screen justify-center flex-col items-center bg-black ' >
            <div className='text-white font-fixel-bold text-[32px] ' >
                {isClient && account.address === undefined ? "Please Connect Your Wallet" : "USERNAME"}
            </div>

        </div>
    )
}

export default profile