import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
<div className="what-content-in">
  <h3>FULL STACK & AI DEVELOPMENT</h3>
  <h4>Building Real-World Digital Products</h4>

  <p>
    Computer Science Engineering student passionate about developing
    innovative web applications, AI-powered solutions, and interactive
    digital experiences. I enjoy turning creative ideas into impactful
    products using modern technologies.
  </p>

  <h5>Technologies & Expertise</h5>

  <div className="what-content-flex">
    <div className="what-tags">React.js</div>
    <div className="what-tags">Node.js</div>
    <div className="what-tags">Express.js</div>
    <div className="what-tags">MongoDB</div>
    <div className="what-tags">Gemini AI</div>
    <div className="what-tags">Firebase</div>
    <div className="what-tags">Three.js</div>
    <div className="what-tags">Tailwind CSS</div>
    <div className="what-tags">REST APIs</div>
    <div className="what-tags">Git & GitHub</div>
  </div>

  <div className="what-arrow"></div>
</div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
             <h3>CREATIVE DESIGN & BRANDING</h3>
<h4>Transforming Ideas into Visual Stories</h4>

<p>
  I create visually compelling designs that blend creativity with purpose.
  From event posters and social media campaigns to modern UI/UX concepts and
  branding materials, I focus on delivering designs that are both engaging
  and impactful. My goal is to craft experiences.
</p>

<h5>Design Expertise</h5>

<div className="what-content-flex">
  <div className="what-tags">Graphic Design</div>
  <div className="what-tags">UI/UX Design</div>
  <div className="what-tags">Event Posters</div>
  <div className="what-tags">GDG Creatives</div>
  <div className="what-tags">Social Media Design</div>
  <div className="what-tags">Brand Identity</div>
  <div className="what-tags">Figma</div>
  <div className="what-tags">Canva</div>
  <div className="what-tags">Adobe Photoshop</div>
  <div className="what-tags">Visual Storytelling</div>
</div>

              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    

  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
