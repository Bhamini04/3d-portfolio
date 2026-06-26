import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Open to Internships & Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building modern web applications using React, Node.js, Express,
              MongoDB, Tailwind CSS, and AI integrations. Passionate about
              creating impactful digital products and immersive user experiences.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>4th Year Student</h5>
              </div>
              <h3>2023–2027</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science Engineering.
              Focused on Full Stack Development, Software Engineering, Database
              Management Systems, and Artificial Intelligence.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ChatSphere</h4>
                <h5>Real-Time Chat Application</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a real-time chat platform using React, Node.js,
              Socket.io, and MongoDB with support for messaging, media sharing,
              voice features, and modern UI/UX.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Meraki Market</h4>
                <h5>MERN E-Commerce Platform</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a full-stack e-commerce platform with user authentication,
              product management, shopping cart, admin dashboard, and responsive
              design using the MERN stack.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Synapso AI</h4>
                <h5>AI Study Companion</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Created an AI-powered study assistant integrating Gemini AI,
              Firebase Authentication, PDF analysis, and intelligent learning
              workflows for students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;