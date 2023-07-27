
import React, { useEffect, useState } from 'react'
import contractABI from "../abi/GiakaaAssignment.json"
import { getNetwork, getAccount, switchNetwork, readContract } from '@wagmi/core'


const Profile = () => {


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
                else {
                    try {
                        console.log("address", account.address)
                        const data = await readContract({
                            address: '0x77fe89354a331aEB51a0737E4aaBcf25c9DbAaBd',
                            abi: contractABI.abi,
                            functionName: 'getName'
                        })
                        console.log("got")


                        console.log(data)
                    } catch (e) {
                        console.log("error", e)
                    }
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

export default Profile