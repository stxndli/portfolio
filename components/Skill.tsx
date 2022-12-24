import Image from "next/image"
interface Props{
    icon:string,
    title:string
}
export default function Skill({icon,title}:Props){
    return(
        <div className="flex flex-col items-center space-y-5">
              <Image
                  src={icon}
                  alt={title}
                  height={128}
                  width={128}
              />
              <h1 className="text-xl">{title}</h1>
        </div>
    )
}