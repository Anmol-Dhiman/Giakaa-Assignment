import { StaticImageData } from "next/image"

export type NFTCardType = {
    id: string,
    image: StaticImageData,
    price: string,
    date?: string
}
