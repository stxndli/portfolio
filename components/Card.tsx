import Link from "next/link"
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import {useRecoilState} from 'recoil'
import { modalContentState, modalState } from '../utils/atoms'
interface Props{
    title:string,
    desc:string,
    tags:string[],
    images:string[]
}
export default function Card({title,desc,tags,images}:Props){
    const [modal, setModal] = useRecoilState(modalState)
    const [modalContent, setModalContent] = useRecoilState(modalContentState)
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Carousel showThumbs={false} onClickItem={()=>{setModal(true);setModalContent(images)}} className="cursor-pointer">
                    {images.map((image)=>(
                        <div>
                            <Image src={image} height={674} width={1295} alt=""></Image>
                        </div>
                    ))}
        </Carousel>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-white text-base">
                {desc}
            </p>
        </div>
        <div className="px-6 pt-2 pb-2">
            {tags.map((tag)=>{
                return(
                    <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                )
            })}
        </div>
        <div className="px-6 pt-2 pb-2 flex justify-center">
            <Link href="https://github.com/stxndli/next-ecom">
                <Image
                    src="/icons/github.png"
                    alt="Github"
                    height={36}
                    width={36}
                    className="cursor-pointer rounded-full"
                />
            </Link>
        </div>
        </div>
    )
}