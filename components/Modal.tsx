import MuiModal from "@mui/material/Modal"
import { useRecoilState } from "recoil"
import { modalContentState, modalState } from "../utils/atoms"
import { XIcon } from "../utils/icons"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { useState, useEffect } from "react"
function Modal(){
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [modalContent, setModalContent] = useRecoilState(modalContentState)
    const [matches, setMatches] = useState(false)
    useEffect(() => {
    window
    .matchMedia("(min-width: 640px)")
    .addEventListener('change', e => setMatches( e.matches ));
    }, []);
    const handleClose = ()=>{
        setShowModal(false)
    }
    return(
        <MuiModal open={showModal} onClose={handleClose} className="fixed !top-[20%] md:!top-7 left-0 right-0 z-50 mx-auto  w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide">
            <>
                <button onClick={handleClose} className="flex items-center justify-center rounded-full border-2 border-[gray] bg-[gray]/60 transition hover:border-white hover:bg-white/10 absolute right-5 top-5 !z-40 h-9 w-9 border-none">
                    <XIcon/>
                </button>
                <Carousel centerMode={matches} centerSlidePercentage={90} showThumbs={false} emulateTouch={true}>
                    {modalContent.map((image)=>(
                        <div>
                            <img src={image}></img>
                        </div>
                    ))}
                </Carousel>
            </>
        </MuiModal>
    )
}
export default Modal

