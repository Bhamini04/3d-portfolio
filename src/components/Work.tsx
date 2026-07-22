import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
const projects = [
  {
    title: "Meraki Market",
    category: "Full Stack MERN E-Commerce Platform",
    tools: "React, Node.js, Express, MongoDB, Admin Dashboard, Authentication",
    image: "/images/meraki-market.png",
    link: "https://meraki-market-1.onrender.com/",
  },
  {
    title: "Synapso AI Study Companion",
    category: "AI Learning Platform",
    tools: "Gemini AI, Firebase, PDF Analysis, Smart Learning",
    image: "/images/synapso.png",
    link: "https://synapso-chi.vercel.app/",
  },
  {
    title: "Resume-Sage",
    category: "React,Vite ,JavaScript, Tailwind CSS ,Google Gemini API ,PDF Processing ,GitHub",
    tools: "Gemini AI, Firebase, PDF Analysis, Smart Learning",
    image: "/images/resume.png",
    link: "https://resume-sage-inky.vercel.app/",
  },
   {
    title: "Design Portfolio",
    category: "Creative Design Showcase",
    tools: "HTML, CSS, JavaScript, Responsive Design, UI Animation",
    image: "/images/design.png",
    link: "https://superlative-cranachan-c1e156.netlify.app/",
  },
  {
    title: "AI Chat Assistant",
    category: "AI-Powered Conversational Assistant",
    tools: "React, Gemini AI, API Integration, Real-time Responses",
    image: "/images/ai-chat.png",
    link: "https://ai-chat-assistant-1-ufhc.onrender.com",
  },
  {
    title: "Synapso AI Study Companion",
    category: "AI Learning Platform",
    tools: "Gemini AI, Firebase, PDF Analysis, Smart Learning",
    image: "/images/synapso.png",
    link: "",
  },
  {
    title: "ASTRA",
    category: "Interactive Space Exploration Website",
    tools: "HTML, CSS, JavaScript, Animations, Responsive Design",
    image: "/images/astra.png",
    link: "https://bhamini04.github.io/ASTRA/",
  },
  {
    title: "Apex Racer",
    category: "3D Racing Experience",
    tools: "JavaScript, Game Logic, Interactive UI",
    image: "/images/apex-racer.png",
    link: "https://bhamini04.github.io/Apex-Racer/",
  },
  {
    title: "Flowers",
    category: "Creative Floral Showcase Website",
    tools: "HTML, CSS, Responsive Design, UI Animation",
    image: "/images/flowers.png",
    link: "https://bhamini04.github.io/-FLOWERS-/",
  },
  {
    title: "Portfolio By Frameworks",
    category: "Developer Portfolio Website",
    tools: "HTML, CSS, JavaScript, Portfolio Design",
    image: "/images/portfolio-frameworks.png",
    link: "https://bhamini04.github.io/PORTFOLIO-BY-FRAMEWORKS/",
  },
  {
    title: "Currency Converter",
    category: "Finance Utility Application",
    tools: "JavaScript, Exchange Rate API, Responsive UI",
    image: "/images/currency-converter.png",
    link: "https://bhamini04.github.io/currency-convertor/",
  },
  {
    title: "Calculator",
    category: "Interactive Calculator Application",
    tools: "HTML, CSS, JavaScript",
    image: "/images/calculator.png",
    link: "https://bhamini04.github.io/calculator-project/",
  },
  {
    title: "To-Do List",
    category: "Task Management Application",
    tools: "JavaScript, Local Storage, Responsive Design",
    image: "/images/todo.png",
    link: "https://bhamini04.github.io/To-do-list/",
  },
  {
    title: "Snake Game",
    category: "Classic Browser Game",
    tools: "JavaScript, Canvas, Game Development",
    image: "/images/snake.png",
    link: "https://bhamini04.github.io/snake-game-project/",
  },
  {
    title: "Rock Paper Scissors",
    category: "Interactive Browser Game",
    tools: "HTML, CSS, JavaScript",
    image: "/images/rps.png",
    link: "https://bhamini04.github.io/rock-paper-scissors/",
  },
];

const Work = () => { const [currentIndex, setCurrentIndex] = useState(0); 
  const [isAnimating, setIsAnimating] = useState(false);
   const goToSlide = useCallback( (index: number) => { if (isAnimating) return;
     setIsAnimating(true); setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500); }, [isAnimating] );
        const goToPrev = useCallback(() => { const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1; goToSlide(newIndex); }, [currentIndex, goToSlide]);
         const goToNext = useCallback(() => { const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1; goToSlide(newIndex); }, [currentIndex, goToSlide]);
          return ( <div className="work-section" id="work"> <div className="work-container section-container">
             <h2> Featured <span>Projects</span> </h2> 
             <div className="carousel-wrapper"> {/* Navigation Arrows */} 
              <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} aria-label="Previous project" data-cursor="disable" >
             <MdArrowBack /> </button> 
             <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next project" data-cursor="disable" > 
              <MdArrowForward />
              </button> {/* Slides */} 
              <div className="carousel-track-container"> <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }} > {projects.map((project, index) => ( <div className="carousel-slide" key={index}> 
                <div className="carousel-content"> <div className="carousel-info">
                 <div className="carousel-number"> 
                  <h3>0{index + 1}</h3> </div> <div className="carousel-details"> 
                    <h4>{project.title}</h4>
                  <p className="carousel-category"> {project.category} </p> 
                  <div className="carousel-tools"> <span className="tools-label">Tools & Features</span>
                   <p>{project.tools}</p> </div> </div> </div>
                    <div className="carousel-image-wrapper">
                       <WorkImage image={project.image} alt={project.title} link={project.link} /> </div> </div> </div> ))} </div> </div> {/* Dot Indicators */}
                    <div className="carousel-dots"> {projects.map((_, index) => ( <button key={index} className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : "" }`} 
                    onClick={() => goToSlide(index)} aria-label={`Go to project ${index + 1}`} data-cursor="disable" /> ))} </div> </div> </div> </div> ); };
export default Work;
