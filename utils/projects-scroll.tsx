import { Carousel } from "react-responsive-carousel";
import { useRecoilState } from "recoil";
import { modalContentState, modalState } from "./atoms";
import {
  quick_translate_paths,
  chessle_paths,
  ecom_paths,
  portfolio_paths,
  graphtool_paths,
  travelapp_paths,
  deliveryapp_paths,
  hrm_paths,
} from "./constants";
import Image from "next/image";

const [modal, setModal] = [0, (x: boolean) => {}];
const [modalContent, setModalContent] = [0, (x: string[]) => {}];
export const projects = [
  {
    title: "HRM System",
    description:
      "Worked within a team to create and deliver a web application that allows users to manage and keep track of their working hours, projects, days off, weekly planning and various other features.",
    tags: ["Python Flask", "Javascript", "Bootstrap", "Relational Database"],
    images: { hrm_paths },
    content: (
      <Carousel
        showThumbs={false}
        onClickItem={() => {
          setModal(true);
          setModalContent(hrm_paths);
        }}
        className="cursor-pointer"
        selectedItem={0}
      >
        {hrm_paths.map((image, i) => (
          <div key={i} className="">
            <Image src={image} height={674} width={1295} alt=""></Image>
          </div>
        ))}
      </Carousel>
    ),
  },

  {
    title: "Quick Translate",
    description:
      "Quick Translate is a Chrome & Firefox extension that translates selected text on web pages using MyMemory translation API",
    tags: ["Browser extension", "Javascript"],
    images: { quick_translate_paths },
    github: "quick_translate",
    content: (
      <Carousel
        showThumbs={false}
        onClickItem={() => {
          setModal(true);
          setModalContent(hrm_paths);
        }}
        className="cursor-pointer"
        selectedItem={0}
      >
        {quick_translate_paths.map((image, i) => (
          <div key={i}>
            <Image src={image} height={674} width={1295} alt=""></Image>
          </div>
        ))}
      </Carousel>
    ),
  },
  {
    title: "This Portfolio",
    description:
      "A portfolio made in Nextjs and Tailwindcss that showcases my projects.",
    tags: ["Nextjs", "tailwindcss", "Responsive", "Front end"],
    images: { portfolio_paths },
    github: "portfolio",
    content: (
      <Carousel
        showThumbs={false}
        onClickItem={() => {
          setModal(true);
          setModalContent(hrm_paths);
        }}
        className="cursor-pointer"
        selectedItem={0}
      >
        {portfolio_paths.map((image, i) => (
          <div key={i}>
            <Image src={image} height={674} width={1295} alt=""></Image>
          </div>
        ))}
      </Carousel>
    ),
  },
  {
    title: "Food Delivery App",
    description:
      "A client side mobile application for a food delivery service made using Flutter, Firebase, Stripe and Sqflite",
    tags: ["Mobile App", "Flutter", "Firebase", "Fullstack"],
    images: { deliveryapp_paths },
    content: (
      <Carousel
        showThumbs={false}
        onClickItem={() => {
          setModal(true);
          setModalContent(hrm_paths);
        }}
        className="cursor-pointer"
        selectedItem={0}
      >
        {deliveryapp_paths.map((image, i) => (
          <div key={i}>
            <Image src={image} height={674} width={1295} alt=""></Image>
          </div>
        ))}
      </Carousel>
    ),
  },
  {
    title: "E-commerce website",
    description:
      "An e-commerce/store website made in Next.js, Tailwind, Firebase and Stripe",
    tags: ["Next.js", "Responsive", "Firebase", "Stripe"],
    images: { ecom_paths },
    github: "ecom",
    content: (
      <Carousel
        showThumbs={false}
        onClickItem={() => {
          setModal(true);
          setModalContent(hrm_paths);
        }}
        className="cursor-pointer"
        selectedItem={0}
      >
        {ecom_paths.map((image, i) => (
          <div key={i}>
            <Image src={image} height={674} width={1295} alt=""></Image>
          </div>
        ))}
      </Carousel>
    ),
  },
  {
    title: "Travel App",
    description:
      "A prototype of a mobile app made in Flutter as part of a university project to guide tourists visiting Algeria",
    tags: ["Mobile App", "Flutter"],
    images: { travelapp_paths },
    content: (
      <Carousel
        showThumbs={false}
        onClickItem={() => {
          setModal(true);
          setModalContent(hrm_paths);
        }}
        className="cursor-pointer"
        selectedItem={0}
      >
        {travelapp_paths.map((image, i) => (
          <div key={i}>
            <Image src={image} height={674} width={1295} alt=""></Image>
          </div>
        ))}
      </Carousel>
    ),
  },
  {
    title: "Graph Tool",
    description:
      "A web app made in React to create graphs and visualize common graph algorithms",
    tags: ["React", "Algorithms & Data Structures"],
    images: { graphtool_paths },
    github: "graph-tool",
    content: (
      <Carousel
        showThumbs={false}
        onClickItem={() => {
          setModal(true);
          setModalContent(hrm_paths);
        }}
        className="cursor-pointer"
        selectedItem={0}
      >
        {graphtool_paths.map((image, i) => (
          <div key={i}>
            <Image src={image} height={674} width={1295} alt=""></Image>
          </div>
        ))}
      </Carousel>
    ),
  },
  {
    title: "Chessle",
    description: "A simple game for guessing chess openings",
    tags: ["React", "Front End"],
    images: { chessle_paths },
    github: "chessle",
    content: (
      <Carousel
        showThumbs={false}
        onClickItem={() => {
          setModal(true);
          setModalContent(hrm_paths);
        }}
        className="cursor-pointer"
        selectedItem={0}
      >
        {chessle_paths.map((image, i) => (
          <div key={i}>
            <Image src={image} height={674} width={1295} alt=""></Image>
          </div>
        ))}
      </Carousel>
    ),
  },
];
