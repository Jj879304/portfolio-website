import "./App.css";
import taskManager from "./assets/Dash-board.png";
import jobTracker from "./assets/add.job.png";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>James.</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-text">

          <h1>Hi, I'm James Ntshingila</h1>

          <h2>Aspiring Full-Stack Developer</h2>

          <p>
            Building practical web applications with
            React, Node.js, JavaScript, and SQLite.
            Passionate about learning and creating
            real-world projects.
          </p>

          <div className="buttons">
            <a href="#projects">
              <button>View Projects</button>
            </a>

            <a href="#contact">
              <button className="contact-btn">
                Contact Me
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About Me</h2>

        <p>
          I am an aspiring Full-Stack Developer focused
          on building practical applications and improving
          my skills every day. I enjoy solving problems,
          learning new technologies, and creating projects
          that help people.
        </p>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>SQLite</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-container">

          {/* JOB TRACKER */}
          <div className="project-card">

            <img
              src={jobTracker}
              alt="Job Tracker"
              className="project-image"
            />

            <h3>Job Tracker App</h3>

            <p>
              A full-stack web application for
              tracking job applications and
              managing application status.
            </p>

            <div className="tech">
              <span>React</span>
              <span>Node.js</span>
              <span>SQLite</span>
            </div>

            <a
              href="https://github.com/Jj879304/job-tracker-app"
              target="_blank"
              rel="noreferrer"
            >
              <button>GitHub</button>
            </a>

          </div>

          {/* TASK MANAGER */}
          <div className="project-card">

            <img
              src={taskManager}
              alt="Task Manager"
              className="project-image"
            />

            <h3>Full Stack Task Manager</h3>

            <p>
              A task management application built
              to create, manage, and track tasks.
            </p>

            <div className="tech">
              <span>React</span>
              <span>Node.js</span>
              <span>SQLite</span>
            </div>

            <a
              href="https://github.com/Jj879304/full-stack-task-manager"
              target="_blank"
              rel="noreferrer"
            >
              <button>GitHub</button>
            </a>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>

        <p>
          Interested in working together or
          hiring me for opportunities?
        </p>

        <div className="contact-links">
          <p>📧 Email: jj6507544@gmail.com</p>
          <p>📱 Phone: 0683513638</p>
          <p>
            💻 GitHub:
            https://github.com/Jj879304
          </p>
        </div>
      </section>

    </div>
  );
}

export default App;