import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/solid"
import MuiModal from "@mui/material/Modal"
import { useRecoilState } from "recoil"
import {contactModalState} from "../utils/atoms"
interface Props{
    success:boolean,
    message:string
}
export default function ContactModal({success,message}:Props){
    const [show, setShow] = useRecoilState(contactModalState)
    return(
        <MuiModal open={show} onClose={()=>setShow(false)} className="fixed mx-auto my-auto w-[90%]  sm:w-[60%] h-[50%]  z-50 ">
            <div className="flex flex-col items-center justify-center rounded-md bg-[white] px-5 w-full h-full space-y-12">
                {success ? 
                    <CheckCircleIcon className="h-20 w-20 text-green-500"/>
                :
                    <ExclamationCircleIcon className="h-20 w-20 text-red-600"/>
                }
                <p className="text-lg text-black">{message}</p>
                <button className="w-36 rounded-md p-2 bg-indigo-600" onClick={()=>setShow(false)}>Continue</button>
            </div>
        </MuiModal>
    )
}
