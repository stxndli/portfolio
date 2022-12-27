import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import { ArrowDown, ArrowUp, XIcon } from '../utils/icons'
import Modal from '../components/Modal'
import { useEffect, useRef, useState, Fragment } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Link from 'next/link'
import Skill from '../components/Skill'
import { Tooltip } from '@mui/material'
import {contactModalState} from "../utils/atoms"
import { chessle_paths, ecom_paths, portfolio_paths, graphtool_paths, travelapp_paths, deliveryapp_paths } from '../utils/constants'
import { useRecoilState } from 'recoil'
import ContactModal from '../components/ContactModal'
import Spinner from '../utils/spinner'
type Inputs = {
  name: string,
  email: string,
  message: string
}
export default function Home() {
  const firstRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const topButtonRef = useRef<HTMLButtonElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [rowScrolled, setRowScrolled] = useState(false)
  const [showEmail, setShowEmail] = useState(false)
  const [currentSection, setCurrentSection] = useState<HTMLDivElement | null>(firstRef.current)
  const [textCopied, setTextCopied] = useState(false)
  const [showContactSuccess, setShowContactSuccess] = useRecoilState(contactModalState)
  const [contactSuccess, setContactSuccess] = useState(false)
  const [contactModalMessage, setContactModalMessage] = useState("")
  const [contactLoading, setContactLoading] = useState(false)
  useEffect(() => {
    setTimeout(function () {
      if (firstRef.current) { firstRef.current.classList.remove("is-loading") }
    }, 100)
    window.onscroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
        // scroll spy
        const refArrs = [contactRef.current, projectsRef.current, skillsRef.current, firstRef.current]
        refArrs.every((ref) => {
          if (ref && (window.scrollY >= ref.getBoundingClientRect().top + window.pageYOffset - ref.getBoundingClientRect().height)) {
            setCurrentSection(ref)
            return false
          }
          else if (ref && (window.scrollY > ref.offsetTop - window.innerHeight + ref.getBoundingClientRect().height * 2)) {
            ref.classList.remove("is-loading")
          }
          return true
        })
        if (topButtonRef.current) topButtonRef.current.style.display = "block"
      } else {
        setIsScrolled(false)
        if (topButtonRef.current) topButtonRef.current.style.display = "none";
      }
    }
  }, [])
  useEffect(()=>{
    if(contactSuccess){
      setContactModalMessage("Thank you for reaching out, I'll get back to you as soon as possible")
    }
    else{
      setContactModalMessage("Something went wrong while sending your message, Please try again later or contact me at js_silem@esi.dz")
    }
  },[contactSuccess])
  const handleHeaderClick = (ref: HTMLDivElement | null) => {
    if (ref) {
      const x = ref.getBoundingClientRect().top + window.pageYOffset 
      window.scrollTo({ top: x, behavior: 'smooth' });
    }
  }
  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("js_silem@esi.dz").then(() => {
        setTextCopied(true)
        setTimeout(() => {
          setTextCopied(false)
        }, 2000)
      })
    }
    else {
      setShowEmail(true)
    }
  }
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ name, email, message }, event) => {
    setContactLoading(true)
    fetch('/api/mailer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name:name,contact:email,content:message}),
    }).then((resp:Response)=>{
      setContactLoading(false)
      if(resp.status===200){
        setContactSuccess(true)
        setShowContactSuccess(true)
      }
      else{
        setContactSuccess(false)
        setShowContactSuccess(true)
      }
    }).catch((err)=>{
      setContactLoading(false)
      setContactSuccess(false)
      setShowContactSuccess(true)
    })
   }
  return (
    <div>
      <Head>
        <title>Portfolio - Silem Sifeddine</title>
        <meta name="description" content="Silem's personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`${isScrolled && "bg-[#242424]/70"} hidden sm:block`}>
        <div className="flex justify-end mr-12">
          <ul className="space-x-12 md:flex">
            <li className={`headerLink ${currentSection && currentSection === firstRef.current && "font-semibold"}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</li>
            <li className={`headerLink ${currentSection && currentSection === skillsRef.current && "font-semibold"}`} onClick={() => handleHeaderClick(skillsRef.current)}>Skills</li>
            <li className={`headerLink ${currentSection && currentSection === projectsRef.current && "font-semibold"}`} onClick={() => handleHeaderClick(projectsRef.current)}>Projects</li>
            <li className={`headerLink ${currentSection && currentSection === contactRef.current && "font-semibold"}`} onClick={() => handleHeaderClick(contactRef.current)}>Contact</li>
          </ul>
        </div>
      </header>
      <main className="grid justify-center pt-12 text-center">
        <div className="flex flex-col space-y-16 pt-16 sm:pt-24 mx-5 md:mx-32 items-center h-screen">
          <div className="is-loading" ref={firstRef}>
            <h1 className="with-lines title">Hi, I&apos;m Silem Sifeddine</h1>
          </div>
          <p className="text-xl md:mx-24">I&apos;m a computer science student and a web/mobile developer, I&apos;m passionate about programming and always ready for new projects and opportunities, want to know more about what I do ? check out my skills and projects down below</p>
          <button onClick={() => handleHeaderClick(skillsRef.current)} className="rounded-full bg-white justify-self-center py-4 px-6 transition-all duration-150 hover:scale-105 text-[#141E30] text-xl">Get Started</button>
        </div>
        <div className="mx-5 md:min-h-screen">
          <div className="is-loading" ref={skillsRef}>
            <h1 className="title">Skills</h1>
          </div>

          <div className="skills-section" onScroll={() => setRowScrolled(true)}>
            <Image src="/icons/swipe.png" height={62} width={62} alt="" className={`sm:hidden absolute right-[45%] mt-[148px] ${rowScrolled && "hidden"}`} />
            <Skill icon='/icons/htmlcss.png' title='HTML & CSS' />
            <Skill icon='/icons/react.png' title='React JS' />
            <Skill icon='/icons/node.png' title='Node JS' />
            <Skill icon='/icons/flutter.png' title='Flutter' />
            <Skill icon='/icons/firebase.png' title='Firebase' />
            <Skill icon='/icons/mongodb.png' title='Mongo DB' />
            <Skill icon='/icons/mysql.png' title='MySQL and relational DBs' />
            <Skill icon='/icons/git.png' title='Git' />
          </div>
        </div>
        <div className="space-y-12 justify-center mx-5 min-h-screen" id="projects">
          <div className="is-loading" ref={projectsRef}>
            <h1 className="title">My Projects</h1>
          </div>
          <div className="grid grid-cols-1 p-3 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Card title="This Portfolio" desc="A portfolio made in Nextjs and Tailwindcss that showcases my projects." tags={["Nextjs", "tailwindcss", "Responsive", "Front end"]} images={portfolio_paths} github="portfolio"/>

            <Card title="Food Delivery App" desc="A client side mobile application for a food delivery service made using Flutter, Firebase, Stripe and Sqflite" tags={["Mobile App", "Flutter", "Firebase", "Fullstack"]} images={deliveryapp_paths} github="flutter-deliveryapp"/>

            <Card title="E-commerce website" desc="An e-commerce/store website made in Next.js, Tailwind, Firebase and Stripe" tags={["Next.js", "Responsive","Firebase", "Stripe"]} images={ecom_paths} github="ecom"/>

            <Card title="Travel App" desc="A prototype of a mobile app made in Flutter as part of a university project to guide tourists visiting Algeria" tags={["Mobile App", "Flutter"]} images={travelapp_paths} github="flutter-travelapp"/>

            <Card title="Graph Tool" desc="A web app made in React to create graphs and visualize common graph algorithms" tags={["React", "Algorithms & Data Structures"]} images={graphtool_paths} github="graph-tool"/>

            <Card title="Chessle" desc="A simple game for guessing chess openings" tags={["React", "Front End"]} images={chessle_paths} github="chessle"/>

          </div>
        </div>
        <div className="space-y-5 lg:flex lg:flex-row lg:justify-between lg:items-start lg:mr-32 mx-5 mt-24 justify-center items-center" id="contact">

          <div className="is-loading" ref={contactRef}>
            <h1 className="with-lines title mb-12 lg:mt-[20%] lg:ml-16">Contact Me</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5 md:p-0">
            <div className="flex flex-col items-start"><label>{errors.name && <p className="p-1 text-[13px] font-light text-red-600">This field is required</p>}</label><input type="text" autoComplete='none' className="rounded-md w-full lg:w-[400px] focus:outline-none text-black p-2 mb-10" placeholder="Full Name" {...register('name', { required: true })} /></div>
            <div className="flex flex-col items-start"><label>{errors.email && <p className="p-1 text-[13px] font-light text-red-600">This field is required</p>}</label><input type="text" autoComplete='none' className="rounded-md w-full lg:w-[400px] focus:outline-none text-black p-2 mb-10" placeholder="Email or Contact Info" {...register('email', { required: true })} /></div>
            <div className="flex flex-col items-start"><label>{errors.message && <p className="p-1 text-[13px] font-light text-red-600">This field is required</p>}</label><textarea style={{ resize: "none" }} className="rounded-md w-full lg:w-[400px] h-[400px] focus:outline-none text-black p-2 mb-10" placeholder="Message" {...register('message', { required: true })} /></div>
            <button className={`p-2 bg-transparent border border-indigo-500 hover:bg-indigo-500 rounded-md w-[70%] text-lg self-center ${contactLoading && "pl-[30%]"}`}>{contactLoading ? <Spinner/> : "Send"}</button>
          </form>
        </div>
        <button className="group shadow w-12 h-12 md:w-14 md:h-14 border border-indigo-500 rounded-full bg-transparent md:hover:bg-indigo-500 hover:scale-110 transition-all duration-100 hidden fixed bottom-[10px] right-[15px] md:bottom-[20px] md:right-[30px] z-10 p-[8px] md:p-[15px]" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }} ref={topButtonRef} title="Go to top"><ArrowUp /></button>
      </main>
      <Modal />
      <ContactModal success={contactSuccess} message={contactModalMessage}/>

      <footer className="flex space-x-12 mt-10 space-y-1 items-center justify-center w-full h-24 bg-[#242424]/40">
        {!showEmail ?
          <>
            <Link href="https://github.com/stxndli" rel="noopener noreferrer" target="_blank">
              <Image
                src="/icons/github.png"
                alt="Github"
                height={36}
                width={36}
                className="cursor-pointer rounded-full"
              />
            </Link>
            <Link href="https://linkedin.com/in/silemsifeddine" rel="noopener noreferrer" target="_blank">
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                height={36}
                width={36}
                className="cursor-pointer rounded-full"
              />
            </Link>
            <Tooltip title={
              <Fragment>
                {
                  textCopied ?
                    <h1 className='text-lg font-light'>Copied ✅</h1> :
                    <h1 className='text-lg'>Click to copy my email</h1>
                }
              </Fragment>
            }>
              <Image
                src="/icons/gmail.png"
                alt="Email"
                height={36}
                width={36}
                className="cursor-pointer"
                onClick={handleCopy}
              />
            </Tooltip>
          </>
          :
          <div className="flex justify-center mr-[25%]">
            <input readOnly={true} onClick={() => { emailRef.current?.select() }} ref={emailRef} value="js_silem@esi.dz" type="text" className="bg-transparent text-right pr-5 focus:outline-none text-lg font-semibold" />
            <div className="w-8 h-8 fill-white cursor-pointer" onClick={() => setShowEmail(false)}><XIcon /></div>
          </div>}
      </footer>
    </div>
  )
}