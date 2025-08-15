import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setIsNavSticky(true);
        setShowScrollButton(true);
      } else {
        setIsNavSticky(false);
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.querySelector(".menu-btn").style.display = "none";

    } else {
      document.body.style.overflow = 'auto';
      document.querySelector(".menu-btn").style.display = "block";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleHireMe = () => {
    window.location.href = 'mailto:contactabith@gmail.com?subject=Mohamed%20Abith%20M,%20Interested%20in%20a%20[Job%20Title]%20Role%20at%20[Company%20Name]%3F&body=';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/918270051985?text=Hi%20Abith!';
  };

 const handleDownloadCV = () => {
  window.open('https://github.com/Aabith124/resume/raw/main/Mohamed_Abith_Resume.pdf', '_blank');
};


  return (
    <div className="App">
      {/* Scroll to top button */}
      <div className="scroll-button" style={{ display: showScrollButton ? 'block' : 'none' }}>
        <a href="#home"><i className="fas fa-arrow-up"></i></a>
      </div>

      {/* Navigation menu */}
      <nav className={isNavSticky ? 'sticky' : ''}>
        <div className="navbar">
          <div className="logo"><a href="#">Portfolio.</a></div>
          <ul className={`menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>

            {/* Mobile Social Media Icons */}
            <div className="mobile-media-icons">
              <a href="https://www.linkedin.com/in/mohamed-abith" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Mohamed-Abith/Mohamed-Abith" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/aabith___" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <div className="cancel-btn" onClick={toggleMobileMenu}>
              <i className="fas fa-times"></i>
            </div>
          </ul>

          {/* Desktop Social Media Icons */}
          <div className="media-icons">
            <a href="https://www.linkedin.com/in/mohamed-abith" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Mohamed-Abith/Mohamed-Abith" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/aabith___" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="menu-btn" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-content">
          <div className="text">
            <div className="text-one">Hello,</div>
            <div className="text-two">I'm Mohamed Abith</div>
            <div className="text-three">Full Stack Developer</div>
            <div className="text-four">From Madurai</div>
          </div>
          <div className="button">
            <button onClick={handleHireMe}>Hire Me</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="content">
          <div className="title"><span>About Me</span></div>
          <div className="about-details">
            <div className="left">
              <img src="images/about.jpg" alt="About Me" />
            </div>
            <div className="right">
              <div className="topic">I Build Projects That Solve Real Life Problems</div>
              <p>
                Hey, I’m Mohamed Abith, a 2025 Computer Science graduate from Dr. Mahalingam College of Engineering and Technology. I love building apps and websites that actually help people in their day-to-day life.

                For example, I created StudioMCET to make it easy for students to book photography for college events with less confusion. I also built Task Tracker, a simple to-do app that helps users stay organized and get things done. I mainly work with Java, React, MySQL, and Spring Boot.

                To me, coding means solving real problems and building things that make everyday life easier.
              </p>
              <div className="button">
                <button onClick={handleDownloadCV}>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="content">
          <div className="title"><span>My Skills</span></div>
          <div className="skills-details">
            <div className="text">
              <div className="topic">Skills Reflect Our Knowledge</div>
              <p>
                I work mainly with Java for backend development and use React.js, HTML, and CSS for building responsive and interactive front-end interfaces. I’m currently learning Spring Boot to build scalable and efficient backend applications. For databases, I use MySQL and connect them using JDBC. I’m also comfortable with tools like Git, Maven, IntelliJ, and VS Code, and I follow good practices in REST API design, responsive UI, and basic UI/UX principles to create user-friendly applications.
              </p>
              <div className="experience">
                <div className="num">1</div>
                <div className="exp">
                  Year Of <br />
                  Local Freelancing Experience
                </div>
              </div>
            </div>
            <div className="boxes">
              <div className="box">
                <div className="topic">Java</div>
                <div className="per">90%</div>
              </div>
              <div className="box">
                <div className="topic">ReactJS</div>
                <div className="per">80%</div>
              </div>
              <div className="box">
                <div className="topic">MySQL</div>
                <div className="per">80%</div>
              </div>
              <div className="box">
                <div className="topic">Spring Boot</div>
                <div className="per">70%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* projects Section */}
      <section className="projects" id="projects">
        <div className="content">
          <div className="title"><span>Projects</span></div>
          <div className="boxes">

            <div className="box">
              <a
                href="https://studiomcet.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="box-link"
              >
                <img className="web-image" src="/images/studiomcet.png" alt="Studio MCET" />
                <div className="topic">Studio Mcet</div>
                <p>
                  This website helps students easily book photographers for college events. No more confusion or last-minute calls. Everything is managed in one place, making the process smooth for both organizers and the photography team.


                </p>
                <div className="tech-stack">
                  <strong>Tech Stack:</strong>  ReactJS, Spring Boot, PostgreSQL
                </div>
              </a>
            </div>


            <div className="box">
              <a href="https://eshoppy.vercel.app" target="_blank" rel="noopener noreferrer" className="box-link">
                <img className="web-image" src="/images/E-shoppy.png" alt="E-shoppy" />
                <div className="topic">E-shoppy</div>
                <p>
                  A simple online store that makes shopping easier and faster. Users can browse, add items to cart, and place orders without hassle. It keeps things clear, smooth, and helps people get what they need in just a few clicks.


                </p>
                <div className="tech-stack">
                  <strong>Tech Stack:</strong> ReactJS, ExpressJS, SQLite
                </div>
              </a>
            </div>

            <div className="box">
              <a href="https://aabith124.github.io/to-do-list/" target="_blank" rel="noopener noreferrer" className="box-link">
                <img className="web-image" src="/images/tasktracker.png" alt="Task Tracker" />
                <div className="topic">Task Tracker</div>
                <p>
                  This app helps you stay on top of your daily work and personal goals. You can add tasks, mark them done, and stay organized without feeling overwhelmed. It’s built to keep things simple, clean, and totally stress-free every day.
                </p>
                <div className="tech-stack">
                  <strong>Tech Stack:</strong> HTML, CSS, JavaScript
                </div>
              </a>
            </div>

            <div className="box">
              <a href=" https://aabith124.github.io/rock-paper-scissor/" target="_blank" rel="noopener noreferrer" className="box-link">
                <img className="web-image" src="/images/rockpaperscissor.png" alt="Rock Paper Scissor" />
                <div className="topic">Rock Paper Scissor</div>
                <p>
                  A fun little game to pass time, relax, and challenge yourself. You play against the computer, and results appear instantly after each quick round. It’s light, interactive, and gives a quick playful break whenever you need one.
                </p>
                <div className="tech-stack">
                  <strong>Tech Stack:</strong> HTML, CSS, JavaScript
                </div>
              </a>
            </div>

            <div className="box">
              <a href="https://youtube-dusky-nu.vercel.app/" target="_blank" rel="noopener noreferrer" className="box-link">
                <img className="web-image" src="/images/youtube.png" alt="YouTube Clone" />
                <div className="topic">YouTube</div>
                <p>
                  A video-watching platform where users can search and play content. It’s designed to feel familiar and smooth, making it easy to explore and enjoy videos. Clean layout and simple features keep things easy to use and enjoy.
                </p>
                <div className="tech-stack">
                  <strong>Tech Stack:</strong> ReactJS
                </div>
              </a>
            </div>

            <div className="box">
              <a href="https://abithportfolio.onrender.com" target="_blank" rel="noopener noreferrer" className="box-link">
                <img className="web-image" src="/images/portfolio.png" alt="Portfolio" />
                <div className="topic">Portfolio</div>
                <p>
                  This site showcases who I am, what I’ve built, and how to reach me easily. It’s made to keep things clear, personal, and easy to navigate on any device. Visitors can view my work, learn about me, and get in touch quickly and easily.


                </p>
                <div className="tech-stack">
                  <strong>Tech Stack:</strong>  ReactJS
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="content">
          <div className="title"><span>Contact Me</span></div>
          <div className="text">
            <div className="topic">Got a Project or an Idea?</div>
            <p>
              If you're looking to build a website, create an app, or just want to talk about something tech related, I'm here to help. I'm always open to new ideas, collaborations, or freelance work.
            </p>
            <div className="button">
              <button onClick={handleWhatsApp}>Let's Chat</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="text">
          <span>Created By <a href="#">Abith</a> | &#169; 2024 All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}

export default App;