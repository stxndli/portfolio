import { CheckCircleIcon } from "@heroicons/react/solid"
import MuiModal from "@mui/material/Modal"
import { useRecoilState } from "recoil"
import {contactModalState} from "../utils/atoms"
export default function ContactModal(){
    const [show, setShow] = useRecoilState(contactModalState)
    return(
        <MuiModal open={show} onClose={()=>setShow(false)} className="fixed mx-auto my-auto w-[90%]  sm:w-[60%] h-[50%]  z-50 ">
            <div className="flex flex-col items-center justify-center rounded-md bg-[white] px-5 w-full h-full space-y-12">
                <CheckCircleIcon className="h-20 w-20 text-green-500"/>
                <p className="text-lg text-black">Thank you for reaching out, I'll get back to you as soon as possible</p>
                <button className="w-36 rounded-md p-2 bg-indigo-600" onClick={()=>setShow(false)}>Continue</button>
            </div>
        </MuiModal>
    )
}
